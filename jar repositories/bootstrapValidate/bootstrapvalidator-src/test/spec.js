describe('api', function() {
    // Override the options
    $.extend($.fn.bootstrapValidator.DEFAULT_OPTIONS, {
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        }
    });

    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="apiForm">',
                '<div class="form-group">',
                    '<input type="text" name="username" data-bv-notempty data-bv-stringlength data-bv-stringlength-min="8" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" name="email" data-bv-notempty data-bv-emailaddress />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#apiForm').bootstrapValidator();

        this.bv     = $('#apiForm').data('bootstrapValidator');
        this.$email = this.bv.getFieldElements('email');
    });

    afterEach(function() {
        $('#apiForm').bootstrapValidator('destroy').remove();
    });

    it('revalidateField()', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect(this.bv.isValidField('email')).toBeTruthy();

        this.$email.val('invalid#email.address');
        this.bv.revalidateField('email');
        expect(this.bv.isValidField(this.$email)).toEqual(false);
    });

    it('destroy()', function() {
        this.bv.destroy();
        expect($('#apiForm').data('bootstrapValidator')).toBeUndefined();
        expect($('#apiForm').find('i[data-bv-icon-for]').length).toEqual(0);
        expect($('#apiForm').find('.help-block[data-bv-for]').length).toEqual(0);
        expect($('#apiForm').find('.has-feedback').length).toEqual(0);
        expect($('#apiForm').find('.has-success').length).toEqual(0);
        expect($('#apiForm').find('.has-error').length).toEqual(0);
        expect($('#apiForm').find('[data-bv-field]').length).toEqual(0);
    });

    it('getOptions()', function() {
        // Form options
        expect(this.bv.getOptions().feedbackIcons.valid).toEqual('glyphicon glyphicon-ok');

        // Field options
        expect(this.bv.getOptions('username', 'stringlength')).toBeNull();
        expect(this.bv.getOptions('username', 'stringlength', 'min')).toBeNull();

        expect(this.bv.getOptions('username', 'stringLength')).toBeDefined();
        expect(this.bv.getOptions('username', 'stringLength', 'min')).toEqual('8');
        expect(this.bv.getOptions('username', 'stringlength', 'max')).toBeNull();
    });
});

describe('container form option', function() {
    beforeEach(function() {
        $([
            '<form id="containerForm" class="form-horizontal">',
                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Full name</label>',
                    '<div class="col-lg-4">',
                        '<input type="text" class="form-control" name="firstName" required placeholder="First name" data-bv-notempty-message="The first name is required" />',
                    '</div>',
                    '<div class="col-lg-4">',
                        '<input type="text" class="form-control" name="lastName" required placeholder="Last name" data-bv-notempty-message="The last name is required" />',
                    '</div>',
                '</div>',
                '<div id="errors"></div>',
            '</form>'
        ].join('')).appendTo('body');
    });

    afterEach(function() {
        $('#containerForm').bootstrapValidator('destroy').remove();
    });

    it('form container declarative', function() {
        $('#containerForm')
            .attr('data-bv-container', '#errors')
            .bootstrapValidator();

        this.bv         = $('#containerForm').data('bootstrapValidator');
        this.$firstName = this.bv.getFieldElements('firstName');
        this.$lastName  = this.bv.getFieldElements('lastName');

        expect($('#errors').find('.help-block').length).toBeGreaterThan(0);

        this.$firstName.val('First');
        this.$lastName.val('');
        this.bv.validate();
        expect($('#errors').find('.help-block:visible[data-bv-for="firstName"]').length).toEqual(0);
        expect($('#errors').find('.help-block:visible[data-bv-for="lastName"]').length).toBeGreaterThan(0);
    });

    it('form container programmatically', function() {
        $('#containerForm').bootstrapValidator({
            container: '#errors'
        });

        this.bv         = $('#containerForm').data('bootstrapValidator');
        this.$firstName = this.bv.getFieldElements('firstName');
        this.$lastName  = this.bv.getFieldElements('lastName');

        expect($('#errors').find('.help-block').length).toBeGreaterThan(0);

        this.$firstName.val('');
        this.$lastName.val('Last');
        this.bv.validate();
        expect($('#errors').find('.help-block:visible[data-bv-for="firstName"]').length).toBeGreaterThan(0);
        expect($('#errors').find('.help-block:visible[data-bv-for="lastName"]').length).toEqual(0);

        this.bv.resetForm();
        this.$firstName.val('First');
        this.$lastName.val('Last');
        this.bv.validate();
        expect($('#errors').find('.help-block:visible').length).toEqual(0);
    });
});

describe('container field option', function() {
    beforeEach(function() {
        $([
            '<form id="containerForm" class="form-horizontal">',
                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Full name</label>',
                    '<div class="col-lg-4">',
                        '<input type="text" class="form-control" name="firstName" required placeholder="First name" data-bv-notempty-message="The first name is required" data-bv-container="#firstNameMessage" />',
                        '<span class="help-block" id="firstNameMessage" />',
                    '</div>',
                    '<div class="col-lg-4">',
                        '<input type="text" class="form-control" name="lastName" required placeholder="Last name" data-bv-notempty-message="The last name is required" />',
                        '<span class="help-block lastNameMessage" />',
                    '</div>',
                '</div>',
            '</form>'
        ].join('')).appendTo('body');

        $('#containerForm').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                lastName: {
                    container: '.lastNameMessage'
                }
            }
        });

        this.bv         = $('#containerForm').data('bootstrapValidator');
        this.$firstName = this.bv.getFieldElements('firstName');
        this.$lastName  = this.bv.getFieldElements('lastName');
    });

    afterEach(function() {
        $('#containerForm').bootstrapValidator('destroy').remove();
    });

    it('field container declarative', function() {
        expect($.trim($('#firstNameMessage').text())).toEqual('The first name is required');
        expect($.trim($('.lastNameMessage').text())).toEqual('The last name is required');
    });

    it('field container programmatically', function() {
        this.$firstName.val('First');
        this.$lastName.val('');
        this.bv.validate();
        expect($('#firstNameMessage').find('.help-block:visible').length).toEqual(0);
        expect($('.lastNameMessage').find('.help-block:visible').length).toBeGreaterThan(0);

        this.bv.resetForm();
        this.$firstName.val('');
        this.$lastName.val('Last');
        this.bv.validate();
        expect($('#firstNameMessage').find('.help-block:visible').length).toBeGreaterThan(0);
        expect($('.lastNameMessage').find('.help-block:visible').length).toEqual(0);
    });
});

describe('container tooltip/popover', function() {
    beforeEach(function() {
        $([
            '<form id="containerForm" class="form-horizontal">',
                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Full name</label>',
                    '<div class="col-lg-4">',
                        '<input type="text" class="form-control" name="firstName" required placeholder="First name" data-bv-notempty-message="The first name is required" />',
                    '</div>',
                    '<div class="col-lg-4">',
                        '<input type="text" class="form-control" name="lastName" required placeholder="Last name" data-bv-notempty-message="The last name is required" />',
                    '</div>',
                '</div>',
                '<div id="errors"></div>',
            '</form>'
        ].join('')).appendTo('body');
    });

    afterEach(function() {
        $('#containerForm').bootstrapValidator('destroy').remove();
    });

    it('container declarative', function() {
        $('#containerForm')
            .attr('data-bv-container', 'tooltip')
            .find('[name="lastName"]')
                .attr('data-bv-container', 'popover')
                .end()
            .bootstrapValidator();

        this.bv         = $('#containerForm').data('bootstrapValidator');
        this.$firstName = this.bv.getFieldElements('firstName');
        this.$lastName  = this.bv.getFieldElements('lastName');

        this.bv.validate();
        expect(this.$firstName.parent().find('i').data('bs.tooltip')).toBeDefined();
        expect(this.$firstName.parent().find('i').data('bs.tooltip').type).toEqual('tooltip');
        expect(this.$lastName.parent().find('i').data('bs.popover')).toBeDefined();
        expect(this.$lastName.parent().find('i').data('bs.popover').type).toEqual('popover');

        this.bv.resetForm();
        this.$firstName.val('First');
        this.$lastName.val('Last');
        this.bv.validate();
        expect(this.$firstName.parent().find('i').data('bs.tooltip')).toBeDefined();
        expect(this.$lastName.parent().find('i').data('bs.popover')).toBeDefined();
    });

    it('container programmatically', function() {
        $('#containerForm').bootstrapValidator({
            container: 'tooltip',
            fields: {
                lastName: {
                    container: 'popover'
                }
            }
        });

        this.bv         = $('#containerForm').data('bootstrapValidator');
        this.$firstName = this.bv.getFieldElements('firstName');
        this.$lastName  = this.bv.getFieldElements('lastName');

        this.bv.validate();
        expect(this.$firstName.parent().find('i').data('bs.tooltip')).toBeDefined();
        expect(this.$firstName.parent().find('i').data('bs.tooltip').type).toEqual('tooltip');
        expect(this.$lastName.parent().find('i').data('bs.popover')).toBeDefined();
        expect(this.$lastName.parent().find('i').data('bs.popover').type).toEqual('popover');

        this.bv.resetForm();
        this.$firstName.val('First');
        this.$lastName.val('Last');
        this.bv.validate();
        expect(this.$firstName.parent().find('i').data('bs.tooltip')).toBeDefined();
        expect(this.$lastName.parent().find('i').data('bs.popover')).toBeDefined();
    });
});

describe('dynamic fields', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="dynamicForm">',
                '<div class="form-group">',
                    '<input type="text" name="fullName" class="form-control" />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#dynamicForm').bootstrapValidator({
            fields: {
                fullName: {
                    validators: {
                        notEmpty: {
                            message: 'The full name is required and cannot be empty'
                        },
                        stringLength: {
                            min: 8,
                            max: 40,
                            message: 'The full name must be more than %s and less than %s characters long'
                        },
                        regexp: {
                            enabled: false,
                            regexp: /^[a-zA-Z\s]+$/,
                            message: 'The full name can only consist of alphabetical, number, and space'
                        }
                    }
                },
                // #725: Note that the email field isn't available in the form yet
                email: {
                    validators: {
                        emailAddress: {
                            message: 'The email address is not valid'
                        }
                    }
                }
            }
        });

        this.bv        = $('#dynamicForm').data('bootstrapValidator');
        this.$fullName = this.bv.getFieldElements('fullName');
    });

    afterEach(function() {
        $('#dynamicForm').bootstrapValidator('destroy').remove();
    });

    // https://github.com/nghuuphuoc/bootstrapvalidator/pull/725
    it('adding field [does not exist but is already set in "fields" option]', function() {
        var $div   = $('<div/>').addClass('form-group').appendTo($('#dynamicForm'));
            $email = $('<input/>')
                        .attr('type', 'text')
                        .addClass('form-control')
                        .attr('name', 'email')
                        .appendTo($div);

        this.bv.addField('email');

        this.$fullName.val('Phuoc Nguyen');

        $email.val('not valid@email');
        this.bv.validate();
        expect(this.bv.isValidField('email')).toBeFalsy();
        expect(this.bv.isValid()).toBeFalsy();

        this.bv.resetForm();
        $email.val('valid@email.com');
        this.bv.validate();
        expect(this.bv.isValidField('email')).toBeTruthy();
        expect(this.bv.isValid()).toBeTruthy();
    });
});

describe('enable validators', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="enableForm">',
                '<div class="form-group">',
                    '<input type="text" name="fullName" class="form-control" />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#enableForm').bootstrapValidator({
            fields: {
                fullName: {
                    validators: {
                        notEmpty: {
                            message: 'The full name is required and cannot be empty'
                        },
                        stringLength: {
                            min: 8,
                            max: 40,
                            message: 'The full name must be more than %s and less than %s characters long'
                        },
                        regexp: {
                            enabled: false,
                            regexp: /^[a-zA-Z\s]+$/,
                            message: 'The full name can only consist of alphabetical, number, and space'
                        }
                    }
                }
            }
        });

        this.bv        = $('#enableForm').data('bootstrapValidator');
        this.$fullName = this.bv.getFieldElements('fullName');
    });

    afterEach(function() {
        $('#enableForm').bootstrapValidator('destroy').remove();
    });

    it('enable all validators', function() {
        this.$fullName.val('@ $full N@m3');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$fullName.val('Contain#$@');
        this.bv.enableFieldValidators('fullName', true);
        this.bv.validate();
        expect(this.bv.isValidField('fullName')).toEqual(false);
        expect(this.bv.isValid()).toEqual(false);
    });

    it('disable all validators', function() {
        this.bv.resetForm();
        this.bv.enableFieldValidators('fullName', false);
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('enabled option particular validator', function() {
        this.$fullName.val('Contain@#$');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        var messages = this.bv.getMessages('fullName');
        expect(messages.length).toEqual(0);
    });

    it('enable particular validators', function() {
        // Enable stringLength validator
        this.bv.resetForm();
        this.bv.enableFieldValidators('fullName', true, 'stringLength');
        this.bv.enableFieldValidators('fullName', true, 'regexp');
        this.$fullName.val('Full@');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        var messages = this.bv.getMessages('fullName');
        expect($.inArray('The full name must be more than 8 and less than 40 characters long', messages)).toBeGreaterThan(-1);
        expect($.inArray('The full name can only consist of alphabetical, number, and space', messages)).toBeGreaterThan(-1);
    });

    it('disable particular validators', function() {
        // Disable stringLength validator
        this.bv.enableFieldValidators('fullName', false, 'stringLength');
        this.$fullName.val('Full');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        var messages = this.bv.getMessages('fullName');
        expect($.inArray('The full name must be more than 8 and less than 40 characters long', messages)).toEqual(-1);

        // Disable regexp validator
        this.bv.enableFieldValidators('fullName', false, 'regexp');
        this.$fullName.val('Special@#$');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        var messages = this.bv.getMessages('fullName');
        expect($.inArray('The full name can only consist of alphabetical, number, and space', messages)).toEqual(-1);
    });
});

TestSuite = $.extend({}, TestSuite, {
    Event: {
        onEmailValid: function(e, data) {
            $('#msg').html('TestSuite.Event.onEmailValid() called, ' + data.field + ' is valid');
        },

        onEmailInvalid: function(e, data) {
            $('#msg').html('TestSuite.Event.onEmailInvalid() called, ' + data.field + ' is invalid');
        },

        onEmailStatus: function(e, data) {
            $('#status').html('TestSuite.Event.onEmailStatus() called; status = ' + data.status);
        },

        onFormValid: function(e) {
            $('#msg').html('TestSuite.Event.onFormValid() called, form ' + $(e.target).attr('id') + ' is valid');
        },

        onFormInvalid: function(e) {
            $('#msg').html('TestSuite.Event.onFormInvalid() called, form ' + $(e.target).attr('id') + ' is invalid');
        }
    }
});

// ---
// Form events
// ---

function onFormValid(e) {
    $('#msg').html('form ' + $(e.target).attr('id') + ' is valid');
};

function onFormInvalid(e) {
    $('#msg').html('form ' + $(e.target).attr('id') + ' is invalid');
};

describe('event form attribute callback global', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="eventForm" data-bv-onsuccess="onFormValid" data-bv-onerror="onFormInvalid" >',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="email" required data-bv-emailaddress />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#eventForm').bootstrapValidator();

        this.bv     = $('#eventForm').data('bootstrapValidator');
        this.$email = this.bv.getFieldElements('email');
    });

    afterEach(function() {
        $('#eventForm').bootstrapValidator('destroy').remove();
    });

    it('call data-bv-onsuccess', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('form eventForm is valid');
    });

    it('call data-bv-onerror', function() {
        this.$email.val('a@b@c@example.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('form eventForm is invalid');
    });
});

describe('event form attribute callback namespace', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="eventForm" data-bv-onsuccess="TestSuite.Event.onFormValid" data-bv-onerror="TestSuite.Event.onFormInvalid" >',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="email" required data-bv-emailaddress />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#eventForm').bootstrapValidator();

        this.bv     = $('#eventForm').data('bootstrapValidator');
        this.$email = this.bv.getFieldElements('email');
    });

    afterEach(function() {
        $('#eventForm').bootstrapValidator('destroy').remove();
    });

    it('call data-bv-onsuccess', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('TestSuite.Event.onFormValid() called, form eventForm is valid');
    });

    it('call data-bv-onerror', function() {
        this.$email.val('just"not"right@example.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('TestSuite.Event.onFormInvalid() called, form eventForm is invalid');
    });
});

describe('event form trigger', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="eventForm">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="email" data-bv-emailaddress />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#eventForm')
            .bootstrapValidator()
            .on('success.form.bv', function(e) {
                $('#msg').html('form ' + $(e.target).attr('id') + ' triggered success.form.bv event');
            })
            .on('error.form.bv', function(e) {
                $('#msg').html('form ' + $(e.target).attr('id') + ' triggered error.form.bv event');
            });

        this.bv     = $('#eventForm').data('bootstrapValidator');
        this.$email = this.bv.getFieldElements('email');
    });

    afterEach(function() {
        $('#eventForm').bootstrapValidator('destroy').remove();
    });

    it('trigger success.form.bv', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('form eventForm triggered success.form.bv event');
    });

    it('trigger error.form.bv', function() {
        this.$email.val('this is"not\\allowed@example.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('form eventForm triggered error.form.bv event');
    });
});

describe('event form programmatically', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="eventForm">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="email" data-bv-emailaddress />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#eventForm').bootstrapValidator({
            onSuccess: function(e) {
                $('#msg').html('onSuccess() called');
            },
            onError: function(e) {
                $('#msg').html('onError() called');
            }
        });

        this.bv     = $('#eventForm').data('bootstrapValidator');
        this.$email = this.bv.getFieldElements('email');
    });

    afterEach(function() {
        $('#eventForm').bootstrapValidator('destroy').remove();
    });

    it('call onSuccess()', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('onSuccess() called');
    });

    it('call onError()', function() {
        this.$email.val('Abc.example.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('onError() called');
    });
});

// ---
// Field events
// ---

function onEmailValid(e, data) {
    $('#msg').html(data.field + ' is valid');
};

function onEmailInvalid(e, data) {
    $('#msg').html(data.field + ' is invalid');
};

function onEmailStatus(e, data) {
    $('#status').html(data.status);
};

describe('event field attribute callback global', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="eventForm">',
                '<div id="msg"></div>',
                '<div id="status"></div>',
                '<div class="form-group">',
                    '<input type="text" name="email" data-bv-emailaddress data-bv-onsuccess="onEmailValid" data-bv-onerror="onEmailInvalid" data-bv-onstatus="onEmailStatus" />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#eventForm').bootstrapValidator();

        this.bv     = $('#eventForm').data('bootstrapValidator');
        this.$email = this.bv.getFieldElements('email');
    });

    afterEach(function() {
        $('#eventForm').bootstrapValidator('destroy').remove();
    });

    it('call data-bv-onsuccess', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('email is valid');
        expect($('#status').html()).toEqual(this.bv.STATUS_VALID);
    });

    it('call data-bv-onerror', function() {
        this.$email.val('A@b@c@example.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('email is invalid');
        expect($('#status').html()).toEqual(this.bv.STATUS_INVALID);
    });
});

describe('event field attribute callback namespace', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="eventForm">',
                '<div id="msg"></div>',
                '<div id="status"></div>',
                '<div class="form-group">',
                    '<input type="text" name="email" data-bv-emailaddress data-bv-onsuccess="TestSuite.Event.onEmailValid" data-bv-onerror="TestSuite.Event.onEmailInvalid" data-bv-onstatus="TestSuite.Event.onEmailStatus" />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#eventForm').bootstrapValidator();

        this.bv     = $('#eventForm').data('bootstrapValidator');
        this.$email = this.bv.getFieldElements('email');
    });

    afterEach(function() {
        $('#eventForm').bootstrapValidator('destroy').remove();
    });

    it('call data-bv-onsuccess', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('TestSuite.Event.onEmailValid() called, email is valid');
        expect($('#status').html()).toEqual('TestSuite.Event.onEmailStatus() called; status = ' + this.bv.STATUS_VALID);
    });

    it('call data-bv-onerror', function() {
        this.$email.val('a"b(c)d,e:f;gi[j\\k]l@example.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('TestSuite.Event.onEmailInvalid() called, email is invalid');
        expect($('#status').html()).toEqual('TestSuite.Event.onEmailStatus() called; status = ' + this.bv.STATUS_INVALID);
    });
});

describe('event field trigger', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="eventForm">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="email" data-bv-emailaddress />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#eventForm')
            .bootstrapValidator()
            .on('success.field.bv', '[name="email"]', function(e, data) {
                $('#msg').html('triggered success.field.bv on ' + data.field);
            })
            .on('error.field.bv', '[name="email"]', function(e, data) {
                $('#msg').html('triggered error.field.bv on ' + data.field);
            });

        this.bv     = $('#eventForm').data('bootstrapValidator');
        this.$email = this.bv.getFieldElements('email');
    });

    afterEach(function() {
        $('#eventForm').bootstrapValidator('destroy').remove();
    });

    it('trigger success.field.bv', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('triggered success.field.bv on email');
    });

    it('trigger error.field.bv', function() {
        this.$email.val('just"not"right@example.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('triggered error.field.bv on email');
    });
});

describe('event field programmatically', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="eventForm">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="email" data-bv-emailaddress />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#eventForm').bootstrapValidator({
            fields: {
                email: {
                    onSuccess: function(e, data) {
                        $('#msg').html('onSuccess() called');
                    },
                    onError: function(e, data) {
                        $('#msg').html('onError() called');
                    }
                }
            }
        });

        this.bv     = $('#eventForm').data('bootstrapValidator');
        this.$email = this.bv.getFieldElements('email');
    });

    afterEach(function() {
        $('#eventForm').bootstrapValidator('destroy').remove();
    });

    it('call onSuccess()', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('onSuccess() called');
    });

    it('call onError()', function() {
        this.$email.val('this is"not\\allowed@example.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('onError() called');
    });
});

// ---
// Modifying default events
// ---

describe('event form trigger with default events', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="eventForm1">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="email" data-bv-emailaddress />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#eventForm1')
            .bootstrapValidator()
            .on('bv.form.success', function(e) {
                $('#msg').html('form ' + $(e.target).attr('id') + ' triggered bv.form.success event');
            })
            .on('success.form.bv', function(e) {
                $('#msg').html('form ' + $(e.target).attr('id') + ' triggered success.form.bv event');
            })
            .on('bv.form.error', function(e) {
                $('#msg').html('form ' + $(e.target).attr('id') + ' triggered bv.form.error event');
            })
            .on('error.form.bv', function(e) {
                $('#msg').html('form ' + $(e.target).attr('id') + ' triggered error.form.bv event');
            });

        this.bv     = $('#eventForm1').data('bootstrapValidator');
        this.$email = this.bv.getFieldElements('email');
    });

    afterEach(function() {
        $('#eventForm1').bootstrapValidator('destroy').remove();
    });

    it('does not trigger bv.form.success', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).not.toEqual('form eventForm1 triggered bv.form.success event');
    });

    it('triggers success.form.bv', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('form eventForm1 triggered success.form.bv event');
    });

    it('does not trigger bv.form.error', function() {
        this.$email.val('A@b@c@example.com');
        this.bv.validate();
        expect($('#msg').html()).not.toEqual('form eventForm1 triggered bv.form.error event');
    });

    it('triggers error.form.bv', function() {
        this.$email.val('A@b@c@example.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('form eventForm1 triggered error.form.bv event');
    });
});

describe('event field trigger with default events', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="eventForm3">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="email" data-bv-emailaddress />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#eventForm3')
            .bootstrapValidator()
            .on('success.field.bv', '[name="email"]', function(e, data) {
                $('#msg').html('triggered success.field.bv on ' + data.field);
            })
            .on('error.field.bv', '[name="email"]', function(e, data) {
                $('#msg').html('triggered error.field.bv on ' + data.field);
            })
            .on('bv.field.success', '[name="email"]', function(e, data) {
                $('#msg').html('triggered bv.field.success on ' + data.field);
            })
            .on('bv.field.error', '[name="email"]', function(e, data) {
                $('#msg').html('triggered bv.field.error on ' + data.field);
            });

        this.bv     = $('#eventForm3').data('bootstrapValidator');
        this.$email = this.bv.getFieldElements('email');
    });

    afterEach(function() {
        $('#eventForm3').bootstrapValidator('destroy').remove();
    });

    it('triggers success.field.bv', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('triggered success.field.bv on email');
    });

    it('does not trigger bv.field.success', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).not.toEqual('triggered bv.field.success on email');
    });

    it('does not trigger error.field.bv', function() {
        this.$email.val('just"not"right@example.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('triggered error.field.bv on email');
    });

    it('triggers bv.field.error', function() {
        this.$email.val('just"not"right@example.com');
        this.bv.validate();
        expect($('#msg').html()).not.toEqual('triggered bv.field.error on email');
    });
});

describe('event form trigger with events changed', function() {
    beforeEach(function() {
        $.fn.bootstrapValidator.DEFAULT_OPTIONS = $.extend({}, $.fn.bootstrapValidator.DEFAULT_OPTIONS, {
            events: {
                formInit: 'init.form.bv',
                formError: 'bv.form.error',
                formSuccess: 'bv.form.success',
                fieldAdded: 'added.field.bv',
                fieldRemoved: 'removed.field.bv',
                fieldInit: 'init.field.bv',
                fieldError: 'bv.field.error',
                fieldSuccess: 'bv.field.success',
                fieldStatus: 'status.field.bv',
                validatorError: 'bv.validator.error',
                validatorSuccess: 'success.validator.bv'
            }
        });

        $([
            '<form class="form-horizontal" id="eventForm2">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="email" data-bv-emailaddress />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#eventForm2')
            .bootstrapValidator()
            .on('bv.form.success', function(e) {
                $('#msg').html('form ' + $(e.target).attr('id') + ' triggered bv.form.success event');
            })
            .on('success.form.bv', function(e) {
                $('#msg').html('form ' + $(e.target).attr('id') + ' triggered success.form.bv event');
            })
            .on('bv.form.error', function(e) {
                $('#msg').html('form ' + $(e.target).attr('id') + ' triggered bv.form.error event');
            })
            .on('error.form.bv', function(e) {
                $('#msg').html('form ' + $(e.target).attr('id') + ' triggered error.form.bv event');
            });

        this.bv     = $('#eventForm2').data('bootstrapValidator');
        this.$email = this.bv.getFieldElements('email');
    });

    afterEach(function() {
        $('#eventForm2').bootstrapValidator('destroy').remove();
    });

    it('triggers bv.form.success', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('form eventForm2 triggered bv.form.success event');
    });

    it('does not trigger success.form.bv', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).not.toEqual('form eventForm2 triggered success.form.bv event');
    });

    it('triggers bv.form.error', function() {
        spyOn(window, 'onerror');

        this.$email.val('this is"not\\allowed@example.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('form eventForm2 triggered bv.form.error event');

        expect(window.onerror).not.toHaveBeenCalled();
    });
});

describe('event field trigger with events changed', function() {
    beforeEach(function () {
        $.fn.bootstrapValidator.DEFAULT_OPTIONS = $.extend({}, $.fn.bootstrapValidator.DEFAULT_OPTIONS, {
            events: {
                formInit: 'init.form.bv',
                formError: 'bv.form.error',
                formSuccess: 'bv.form.success',
                fieldAdded: 'added.field.bv',
                fieldRemoved: 'removed.field.bv',
                fieldInit: 'init.field.bv',
                fieldError: 'bv.field.error',
                fieldSuccess: 'bv.field.success',
                fieldStatus: 'status.field.bv',
                validatorError: 'bv.validator.error',
                validatorSuccess: 'success.validator.bv'
            }
        });

        $([
            '<form class="form-horizontal" id="eventForm4">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="email" data-bv-emailaddress />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#eventForm4')
            .bootstrapValidator()
            .on('success.field.bv', '[name="email"]', function(e, data) {
                $('#msg').html('triggered success.field.bv on ' + data.field);
            })
            .on('error.field.bv', '[name="email"]', function(e, data) {
                $('#msg').html('triggered error.field.bv on ' + data.field);
            })
            .on('bv.field.success', '[name="email"]', function(e, data) {
                $('#msg').html('triggered bv.field.success on ' + data.field);
            })
            .on('bv.field.error', '[name="email"]', function(e, data) {
                $('#msg').html('triggered bv.field.error on ' + data.field);
            });

        this.bv     = $('#eventForm4').data('bootstrapValidator');
        this.$email = this.bv.getFieldElements('email');
    });

    afterEach(function() {
        $('#eventForm4').bootstrapValidator('destroy').remove();
    });

    it('triggers success.field.bv', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).not.toEqual('triggered success.field.bv on email');
    });

    it('does not trigger bv.field.success', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('triggered bv.field.success on email');
    });

    it('does not trigger error.field.bv', function() {
        this.$email.val('Abc.example.com');
        this.bv.validate();
        expect($('#msg').html()).not.toEqual('triggered error.field.bv on email');
    });

    it('triggers bv.field.error', function() {
        spyOn(window, 'onerror');

        this.$email.val('Abc.example.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('triggered bv.field.error on email');

        expect(window.onerror).not.toHaveBeenCalled();
    });
});

// ---
// Validator events
// ---

function onEmailAddressValidatorSuccess(e, data) {
    $('#msg').html(data.validator + ' validator passed');
};

function onEmailAddressValidatorError(e, data) {
    $('#msg').html(data.validator + ' validator did not pass');
};

describe('event validator declarative', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="eventForm">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="email" data-bv-emailaddress data-bv-emailaddress-onsuccess="onEmailAddressValidatorSuccess" data-bv-emailaddress-onerror="onEmailAddressValidatorError" />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#eventForm').bootstrapValidator();

        this.bv     = $('#eventForm').data('bootstrapValidator');
        this.$email = this.bv.getFieldElements('email');
    });

    afterEach(function() {
        $('#eventForm').bootstrapValidator('destroy').remove();
    });

    it('trigger data-bv-emailaddress-onsuccess', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('emailAddress validator passed');
    });

    it('trigger data-bv-emailaddress-onerror', function() {
        this.$email.val('A@b@c@example.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('emailAddress validator did not pass');
    });
});

describe('event validator programmatically', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="eventForm">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="email" data-bv-emailaddress />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#eventForm').bootstrapValidator({
            fields: {
                email: {
                    validators: {
                        emailAddress: {
                            onSuccess: function(e, data) {
                                $('#msg').html('emailAddress validator: onSuccess() called');
                            },
                            onError: function(e, data) {
                                $('#msg').html('emailAddress validator: onError() called');
                            },
                            message: 'The email address is not valid'
                        }
                    }
                }
            }
        });

        this.bv     = $('#eventForm').data('bootstrapValidator');
        this.$email = this.bv.getFieldElements('email');
    });

    afterEach(function() {
        $('#eventForm').bootstrapValidator('destroy').remove();
    });

    it('call onSuccess()', function() {
        this.$email.val('email@domain.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('emailAddress validator: onSuccess() called');
    });

    it('call onError()', function() {
        this.$email.val('A@b@c@example.com');
        this.bv.validate();
        expect($('#msg').html()).toEqual('emailAddress validator: onError() called');
    });
});

describe('excluded', function() {
    beforeEach(function() {
        $([
            '<div class="container">',
                '<form class="form-horizontal" id="excludedForm" data-bv-excluded="[name=\'email\']">',
                    '<div class="form-group">',
                        '<input type="text" name="username" required />',
                    '</div>',
                    '<div class="form-group">',
                        '<input type="text" name="email" required data-bv-emailaddress />',
                    '</div>',
                '</form>',
            '</div>'
        ].join('')).appendTo('body');

        $('#excludedForm').bootstrapValidator();

        this.bv        = $('#excludedForm').data('bootstrapValidator');
        this.$username = this.bv.getFieldElements('username');
        this.$email    = this.bv.getFieldElements('email');
    });

    afterEach(function() {
        $('#excludedForm').bootstrapValidator('destroy').parent().remove();
    });

    it('excluded form declarative', function() {
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$username.val('your_user_name');
        this.$email.val('');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('excluded form programmatically', function() {
        this.bv.destroy();
        $('#excludedForm').removeAttr('data-bv-excluded');

        $('#excludedForm').bootstrapValidator({
            excluded: '[name="username"]'
        });

        this.bv        = $('#excludedForm').data('bootstrapValidator');
        this.$username = this.bv.getFieldElements('username');
        this.$email    = this.bv.getFieldElements('email');

        this.$username.val('');
        this.$email.val('invalid#email.com');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$email.val('valid@email.com');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('excluded field declarative', function() {
        this.bv.destroy();
        $('#excludedForm').removeAttr('data-bv-excluded');
        $('#excludedForm').find('[name="username"]').attr('data-bv-excluded', 'true');
        $('#excludedForm').find('[name="email"]').attr('data-bv-excluded', 'false');

        this.bv        = $('#excludedForm').bootstrapValidator().data('bootstrapValidator');
        this.$username = this.bv.getFieldElements('username');
        this.$email    = this.bv.getFieldElements('email');

        this.$username.val('');
        this.$email.val('');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$email.val('invalid#email.com');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$email.val('valid@email.com');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('excluded field programmatically true/false', function() {
        this.bv.destroy();
        $('#excludedForm').removeAttr('data-bv-excluded');

        $('#excludedForm').bootstrapValidator({
            fields: {
                username: {
                    excluded: true
                },
                email: {
                    excluded: false
                }
            }
        });

        this.bv        = $('#excludedForm').bootstrapValidator().data('bootstrapValidator');
        this.$username = this.bv.getFieldElements('username');
        this.$email    = this.bv.getFieldElements('email');

        this.$username.val('');
        this.$email.val('');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$email.val('invalid#email.com');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$email.val('valid@email.com');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('excluded field programmatically "true"/"false"', function() {
        this.bv.destroy();
        $('#excludedForm').removeAttr('data-bv-excluded');

        $('#excludedForm').bootstrapValidator({
            fields: {
                username: {
                    excluded: 'false'
                },
                email: {
                    excluded: 'true'
                }
            }
        });

        this.bv        = $('#excludedForm').bootstrapValidator().data('bootstrapValidator');
        this.$username = this.bv.getFieldElements('username');
        this.$email    = this.bv.getFieldElements('email');

        this.$username.val('');
        this.$email.val('valid@email.com');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$username.val('your_user_name');
        this.$email.val('invalid#email.com');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });
});

describe('group option', function() {
    beforeEach(function() {
        $([
            '<form id="groupForm" method="post" class="form-horizontal">',
                '<div class="form-group">',
                    '<div class="firstNameGroup">',
                        '<label class="col-sm-2 control-label">First name</label>',
                        '<div class="col-sm-4">',
                            '<input type="text" class="form-control" name="firstName" />',
                        '</div>',
                    '</div>',
                    '<div class="lastNameGroup">',
                        '<label class="col-sm-2 control-label">Last name</label>',
                        '<div class="col-sm-4">',
                            '<input type="text" class="form-control" name="lastName" data-bv-group=".lastNameGroup" />',
                        '</div>',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-sm-2 control-label">Username</label>',
                    '<div class="col-sm-5">',
                        '<input type="text" class="form-control" name="username" />',
                    '</div>',
                '</div>',
            '</form>'
        ].join('')).appendTo('body');

        $('#groupForm').bootstrapValidator({
            fields: {
                firstName: {
                    group: '.firstNameGroup',
                    validators: {
                        notEmpty: {
                            message: 'The first name is required and cannot be empty'
                        }
                    }
                },
                lastName: {
                    validators: {
                        notEmpty: {
                            message: 'The last name is required and cannot be empty'
                        }
                    }
                },
                username: {
                    validators: {
                        notEmpty: {
                            message: 'The username is required and cannot be empty'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The username must be more than 6 and less than 30 characters long'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_\.]+$/,
                            message: 'The username can only consist of alphabetical, number, dot and underscore'
                        }
                    }
                }
            }
        });

        this.bv         = $('#groupForm').data('bootstrapValidator');
        this.$firstName = this.bv.getFieldElements('firstName');
        this.$lastName  = this.bv.getFieldElements('lastName');
        this.$username  = this.bv.getFieldElements('username');
    });

    afterEach(function() {
        $('#groupForm').bootstrapValidator('destroy').remove();
    });

    it('group default', function() {
        this.$username.val('123@#$');
        this.bv.validate();
        expect(this.$username.parents('.form-group').hasClass('has-error')).toBeTruthy();
        expect(this.$username.parents('.form-group').hasClass('has-success')).toEqual(false);

        this.bv.resetForm();
        this.$username.val('validUser.Name');
        this.bv.validate();
        expect(this.$username.parents('.form-group').hasClass('has-success')).toBeTruthy();
        expect(this.$username.parents('.form-group').hasClass('has-error')).toEqual(false);
    });

    it('group programmatically', function() {
        this.$firstName.val('');
        this.bv.validate();
        expect(this.$firstName.parents('.firstNameGroup').hasClass('has-error')).toBeTruthy();
        expect(this.$firstName.parents('.firstNameGroup').hasClass('has-success')).toEqual(false);
        expect(this.$firstName.parents('.form-group').hasClass('has-error')).toEqual(false);
    });

    it('group declarative', function() {
        this.$firstName.val('First');
        this.$lastName.val('Last');
        this.bv.validate();
        expect(this.$lastName.parents('.lastNameGroup').hasClass('has-success')).toBeTruthy();
        expect(this.$lastName.parents('.lastNameGroup').hasClass('has-error')).toEqual(false);
        expect(this.$lastName.parents('.form-group').hasClass('has-success')).toEqual(false);
        expect(this.$lastName.parents('.form-group').hasClass('has-error')).toEqual(false);
    });
});

describe('i18n', function() {
    beforeEach(function() {
        $([
            '<form id="i18nForm" class="form-horizontal">',
                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Full name</label>',
                    '<div class="col-lg-5">',
                        '<input type="text" class="form-control" name="fullName" />',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Username</label>',
                    '<div class="col-lg-5">',
                        '<input type="text" class="form-control" name="username" />',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Email address</label>',
                    '<div class="col-lg-5">',
                        '<input type="text" class="form-control" name="email" />',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Password</label>',
                    '<div class="col-lg-5">',
                        '<input type="password" class="form-control" name="password" />',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Retype password</label>',
                    '<div class="col-lg-5">',
                        '<input type="password" class="form-control" name="confirmPassword" />',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Gender</label>',
                    '<div class="col-lg-5">',
                        '<div class="radio">',
                            '<label><input type="radio" name="gender" value="male" /> Male</label>',
                        '</div>',
                        '<div class="radio">',
                            '<label><input type="radio" name="gender" value="female" /> Female</label>',
                        '</div>',
                        '<div class="radio">',
                            '<label><input type="radio" name="gender" value="other" /> Other</label>',
                        '</div>',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Age</label>',
                    '<div class="col-lg-3">',
                        '<input type="text" class="form-control" name="age" />',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Website</label>',
                    '<div class="col-lg-5">',
                        '<input type="text" class="form-control" name="website" />',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Phone number</label>',
                    '<div class="col-lg-5">',
                        '<input type="text" class="form-control" name="phoneNumber" />',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Languages</label>',
                    '<div class="col-lg-5">',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="languages[]" value="english" /> English</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="languages[]" value="french" /> French</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="languages[]" value="german" /> German</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="languages[]" value="russian" /> Russian</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="languages[]" value="other" /> Other</label>',
                        '</div>',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Programming Languages</label>',
                    '<div class="col-lg-5">',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="programs[]" value="net" /> .Net</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="programs[]" value="java" /> Java</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="programs[]" value="c" /> C/C++</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="programs[]" value="php" /> PHP</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="programs[]" value="perl" /> Perl</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="programs[]" value="ruby" /> Ruby</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="programs[]" value="python" /> Python</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="programs[]" value="javascript" /> Javascript</label>',
                        '</div>',
                    '</div>',
                '</div>',
            '</form>'
        ].join('')).appendTo('body');

        $('#i18nForm').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                fullName: {
                    validators: {
                        notEmpty: {},
                        stringCase: {
                            'case': 'upper'
                        }
                    }
                },
                username: {
                    validators: {
                        notEmpty: {},
                        stringLength: {
                            min: 6,
                            max: 20
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_\.]+$/
                        },
                        different: {
                            field: 'password'
                        }
                    }
                },
                email: {
                    validators: {
                        emailAddress: {}
                    }
                },
                password: {
                    validators: {
                        notEmpty: {},
                        identical: {
                            field: 'confirmPassword'
                        },
                        different: {
                            field: 'username'
                        }
                    }
                },
                confirmPassword: {
                    validators: {
                        notEmpty: {},
                        identical: {
                            field: 'password'
                        },
                        different: {
                            field: 'username'
                        }
                    }
                },
                age: {
                    validators: {
                        notEmpty: {},
                        digits: {},
                        greaterThan: {
                            value: 18
                        },
                        lessThan: {
                            value: 100
                        }
                    }
                },
                website: {
                    validators: {
                        notEmpty: {},
                        uri: {}
                    }
                },
                phoneNumber: {
                    validators: {
                        notEmpty: {},
                        digits: {},
                        phone: {
                            country: 'US'
                        }
                    }
                },
                gender: {
                    validators: {
                        notEmpty: {}
                    }
                },
                'languages[]': {
                    validators: {
                        notEmpty: {}
                    }
                },
                'programs[]': {
                    validators: {
                        choice: {
                            min: 2,
                            max: 4
                        }
                    }
                }
            }
        });

        this.bv        = $('#i18nForm').data('bootstrapValidator');
        this.$fullName = this.bv.getFieldElements('fullName');
        this.$email    = this.bv.getFieldElements('email');
        this.$userName = this.bv.getFieldElements('username');
        this.$password = this.bv.getFieldElements('password');
        this.$confirm  = this.bv.getFieldElements('confirmPassword');
        this.$age      = this.bv.getFieldElements('age');
        this.$website  = this.bv.getFieldElements('website');
        this.$phone    = this.bv.getFieldElements('phoneNumber');
        this.$program  = this.bv.getFieldElements('programs[]');
    });

    afterEach(function() {
        $('#i18nForm').bootstrapValidator('destroy').remove();
    });

    it('default message', function() {
        var format = $.fn.bootstrapValidator.helpers.format,
            i18n   = $.fn.bootstrapValidator.i18n;

        this.bv.validate();
        expect(this.bv.getMessages(this.$fullName, 'notEmpty')[0]).toEqual(i18n.notEmpty['default']);

        this.$fullName.val('lowerName');
        this.bv.revalidateField('fullName');
        expect(this.bv.getMessages('fullName', 'stringCase')[0]).toEqual(i18n.stringCase.upper);

        this.bv.resetForm();
        this.$userName.val('123');
        this.bv.validate();
        expect(this.bv.getMessages('username', 'stringLength')[0]).toEqual(format(i18n.stringLength.between, [6, 20]));

        this.bv.resetForm();
        this.$userName.val('contain@#$');
        this.bv.validate();
        expect(this.bv.getMessages(this.$userName, 'regexp')[0]).toEqual(i18n.regexp['default']);

        this.bv.resetForm();
        this.$userName.val('validUserName');
        this.$password.val('validUserName');
        this.bv.validate();
        expect(this.bv.getMessages('username', 'different')[0]).toEqual(i18n.different['default']);

        this.bv.resetForm();
        this.$email.val('A@b@c@example.com');
        this.bv.validate();
        expect(this.bv.getMessages(this.$email, 'emailAddress')[0]).toEqual(i18n.emailAddress['default']);

        this.bv.resetForm();
        this.$password.val('@S3cur3P@@w0rd');
        this.$confirm.val('notMatch');
        this.bv.validate();
        expect(this.bv.getMessages('password', 'identical')[0]).toEqual(i18n.identical['default']);

        this.bv.resetForm();
        this.$age.val('notDigit');
        this.bv.validate();
        expect(this.bv.getMessages('age', 'digits')[0]).toEqual(i18n.digits['default']);

        this.bv.resetForm();
        this.$age.val(10);
        this.bv.validate();
        expect(this.bv.getMessages(this.$age, 'greaterThan')[0]).toEqual(format(i18n.greaterThan['default'], 18));

        this.bv.resetForm();
        this.$age.val(120);
        this.bv.validate();
        expect(this.bv.getMessages('age', 'lessThan')[0]).toEqual(format(i18n.lessThan['default'], 100));

        this.bv.resetForm();
        this.$website.val('http://invalidWebsite');
        this.bv.validate();
        expect(this.bv.getMessages('website', 'uri')[0]).toEqual(i18n.uri['default']);

        this.bv.resetForm();
        this.$phone.val('123456');
        this.bv.validate();
        expect(this.bv.getMessages('phoneNumber', 'phone')[0]).toEqual(format(i18n.phone.country, i18n.phone.countries['US']));

        this.bv.resetForm();
        this.$program.eq(0).prop('checked', 'checked');
        this.bv.validate();
        expect(this.bv.getMessages(this.$program, 'choice')[0]).toEqual(format(i18n.choice.between, [2, 4]));

        this.bv.resetForm();
        this.$program.prop('checked', 'checked');
        this.bv.validate();
        expect(this.bv.getMessages('programs[]', 'choice')[0]).toEqual(format(i18n.choice.between, [2, 4]));
    });
});

describe('message', function() {
    beforeEach(function() {
        var html = [
            '<div class="container">',
                '<form class="form-horizontal" id="messageForm">',
                    '<div class="form-group">',
                        '<input type="password" class="form-control" name="password" placeholder="Enter secure password" />',
                    '</div>',
                '</form>',
            '</div>'
        ].join('\n');

        $(html).appendTo('body');
        $('#messageForm').bootstrapValidator({
            fields: {
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required'
                        },
                        callback: {
                            callback: function(value, validator) {
                                // Check the password strength
                                if (value.length < 6) {
                                    return {
                                        valid: false,
                                        message: 'The password must be more than 6 characters'
                                    }
                                }

                                if (value === value.toLowerCase()) {
                                    return {
                                        valid: false,
                                        message: 'The password must contain at least one upper case character'
                                    }
                                }
                                if (value === value.toUpperCase()) {
                                    return {
                                        valid: false,
                                        message: 'The password must contain at least one lower case character'
                                    }
                                }
                                if (value.search(/[0-9]/) < 0) {
                                    return {
                                        valid: false,
                                        message: 'The password must contain at least one digit'
                                    }
                                }

                                return true;
                            }
                        }
                    }
                }
            }
        });

        this.bv        = $('#messageForm').data('bootstrapValidator');
        this.$password = this.bv.getFieldElements('password');
    });

    afterEach(function() {
        $('#messageForm').bootstrapValidator('destroy').parent().remove();
    });

    it('update message from callback', function() {
        this.bv.resetForm();
        this.$password.val('123');
        this.bv.validate();
        expect(this.bv.getMessages('password', 'callback')[0]).toEqual('The password must be more than 6 characters');

        this.bv.resetForm();
        this.$password.val('no_upper_case!@#');
        this.bv.validate();
        expect(this.bv.getMessages('password', 'callback')[0]).toEqual('The password must contain at least one upper case character');

        this.bv.resetForm();
        this.$password.val('NO_LOWER_CASE123');
        this.bv.validate();
        expect(this.bv.getMessages('password', 'callback')[0]).toEqual('The password must contain at least one lower case character');

        this.bv.resetForm();
        this.$password.val('NoDigits!@#');
        this.bv.validate();
        expect(this.bv.getMessages('password', 'callback')[0]).toEqual('The password must contain at least one digit');
    });

    it('call updateMessage()', function() {
        this.bv.updateStatus('password', this.bv.STATUS_INVALID, 'callback');

        this.bv.updateMessage('password', 'callback', 'The password is weak');
        expect(this.bv.getMessages('password', 'callback')[0]).toEqual('The password is weak');

        this.bv.updateMessage(this.$password, 'callback', 'The password is not strong');
        expect(this.bv.getMessages(this.$password, 'callback')[0]).toEqual('The password is not strong');
    });
});

describe('verbose option', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="verboseForm">',
                '<div class="form-group">',
                    '<input type="text" name="fullName" class="form-control" ',
                        'required data-bv-notempty-message="The full name is required and cannot be empty" ',
                        'data-bv-regexp="true" data-bv-regexp-regexp="^[a-zA-Z\\s]+$" data-bv-regexp-message="The full name can only consist of alphabetical, number, and space" ',
                        'data-bv-stringlength="true" data-bv-stringlength-min="8" data-bv-stringlength-max="40" data-bv-stringlength-message="The full name must be more than 8 and less than 40 characters long" ',
                    '/>',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        // The order of validators are alphabetical:
        // - notEmpty
        // - regexp
        // - stringLength
    });

    afterEach(function() {
        $('#verboseForm').bootstrapValidator('destroy').remove();
    });

    it('set data-bv-verbose="false" for form', function() {
        var bv        = $('#verboseForm').attr('data-bv-verbose', 'false').bootstrapValidator().data('bootstrapValidator'),
            $fullName = bv.getFieldElements('fullName'),
            messages;

        $fullName.val('');
        bv.validate();
        messages = bv.getMessages('fullName');
        expect(messages.length).toEqual(1);
        expect(messages[0]).toEqual($fullName.attr('data-bv-notempty-message'));

        bv.resetForm();
        $fullName.val('Special@#$');
        bv.validate();
        messages = bv.getMessages('fullName');
        expect(messages.length).toEqual(1);
        expect(messages[0]).toEqual($fullName.attr('data-bv-regexp-message'));

        bv.resetForm();
        $fullName.val('Full');
        bv.validate();
        messages = bv.getMessages('fullName');
        expect(messages.length).toEqual(1);
        expect(messages[0]).toEqual($fullName.attr('data-bv-stringlength-message'));
    });

    it('set data-bv-verbose="false" for field', function() {
        var bv        = $('#verboseForm')
                            .attr('data-bv-verbose', 'true')
                            .find('[name="fullName"]')
                                .attr('data-bv-verbose', 'false')
                                .end()
                            .bootstrapValidator().data('bootstrapValidator'),
            $fullName = bv.getFieldElements('fullName'),
            messages;

        $fullName.val('');
        bv.validate();
        messages = bv.getMessages('fullName');
        expect(messages.length).toEqual(1);
        expect(messages[0]).toEqual($fullName.attr('data-bv-notempty-message'));

        bv.resetForm();
        $fullName.val('Special@#$');
        bv.validate();
        messages = bv.getMessages('fullName');
        expect(messages.length).toEqual(1);
        expect(messages[0]).toEqual($fullName.attr('data-bv-regexp-message'));

        bv.resetForm();
        $fullName.val('Full');
        bv.validate();
        messages = bv.getMessages('fullName');
        expect(messages.length).toEqual(1);
        expect(messages[0]).toEqual($fullName.attr('data-bv-stringlength-message'));
    });

    it('set verbose: "false" for form', function() {
        var bv        = $('#verboseForm').bootstrapValidator({ verbose: false }).data('bootstrapValidator'),
            $fullName = bv.getFieldElements('fullName'),
            messages;

        $fullName.val('');
        bv.validate();
        messages = bv.getMessages('fullName');
        expect(messages.length).toEqual(1);
        expect(messages[0]).toEqual($fullName.attr('data-bv-notempty-message'));

        bv.resetForm();
        $fullName.val('Special@#$');
        bv.validate();
        messages = bv.getMessages('fullName');
        expect(messages.length).toEqual(1);
        expect(messages[0]).toEqual($fullName.attr('data-bv-regexp-message'));

        bv.resetForm();
        $fullName.val('Full');
        bv.validate();
        messages = bv.getMessages('fullName');
        expect(messages.length).toEqual(1);
        expect(messages[0]).toEqual($fullName.attr('data-bv-stringlength-message'));
    });

    it('set verbose: "false" for field', function() {
        var bv        = $('#verboseForm')
                            .attr('data-bv-verbose', 'true')
                            .bootstrapValidator({
                                verbose: true,
                                fields: {
                                    fullName: {
                                        verbose: false
                                    }
                                }
                            })
                            .data('bootstrapValidator'),
            $fullName = bv.getFieldElements('fullName'),
            messages;

        $fullName.val('');
        bv.validate();
        messages = bv.getMessages('fullName');
        expect(messages.length).toEqual(1);
        expect(messages[0]).toEqual($fullName.attr('data-bv-notempty-message'));

        bv.resetForm();
        $fullName.val('Special@#$');
        bv.validate();
        messages = bv.getMessages('fullName');
        expect(messages.length).toEqual(1);
        expect(messages[0]).toEqual($fullName.attr('data-bv-regexp-message'));

        bv.resetForm();
        $fullName.val('Full');
        bv.validate();
        messages = bv.getMessages('fullName');
        expect(messages.length).toEqual(1);
        expect(messages[0]).toEqual($fullName.attr('data-bv-stringlength-message'));
    });
});

function betweenCompareMin() {
    var compareTo = $('#betweenForm').find('[name="minAge"]').val();
    $('#msgMin').html('betweenCompareMin() called; compare to ' + compareTo);
    return compareTo;
};

function betweenCompareMax() {
    var compareTo = $('#betweenForm').find('[name="maxAge"]').val();
    $('#msgMax').html('betweenCompareMax() called; compare to ' + compareTo);
    return compareTo;
};

TestSuite = $.extend({}, TestSuite, {
    between: {
        compareToMin: function(value, validator, $field) {
            var compareTo = $('#betweenForm').find('[name="minAge"]').val();
            $('#msgMin').html('TestSuite.between.compareToMin() called; compare to ' + compareTo);
            return compareTo;
        },

        compareToMax: function(value, validator, $field) {
            var compareTo = $('#betweenForm').find('[name="maxAge"]').val();
            $('#msgMax').html('TestSuite.between.compareToMax() called; compare to ' + compareTo);
            return compareTo;
        }
    }
});

describe('between', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="betweenForm">',
                '<div id="msgMin"></div>',
                '<div id="msgMax"></div>',
                '<div class="form-group">',
                    '<input type="text" name="minAge" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" name="maxAge" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" name="age" data-bv-between data-bv-between-min="18" data-bv-between-max="100" />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#betweenForm').bootstrapValidator();

        this.bv      = $('#betweenForm').data('bootstrapValidator');
        this.$minAge = this.bv.getFieldElements('minAge');
        this.$maxAge = this.bv.getFieldElements('maxAge');
        this.$age    = this.bv.getFieldElements('age');
    });

    afterEach(function() {
        $('#betweenForm').bootstrapValidator('destroy').remove();
    });

    it('not a number', function() {
        this.$age.val('50abc');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

    it('compare to value', function() {
        this.$age.val(10);
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$age.val(120);
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$age.val(30);
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('compare to other field', function() {
        this.$age.attr('data-bv-between-min', 'minAge')
                 .attr('data-bv-between-max', 'maxAge');
        this.bv.destroy();
        this.bv = $('#betweenForm').bootstrapValidator().data('bootstrapValidator');

        this.$minAge.val(2);
        this.$maxAge.val(10);
        this.$age.val(5);
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$minAge.val(20);
        this.$maxAge.val(40);
        this.$age.val(50);
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'between')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.between['default'], [this.$minAge.val(), this.$maxAge.val()]));
    });

    it('compare to return value of a function', function() {
        this.$age.attr('data-bv-between-min', 'betweenCompareMin')
                 .attr('data-bv-between-max', 'betweenCompareMax');
        this.bv.destroy();
        this.bv = $('#betweenForm').bootstrapValidator().data('bootstrapValidator');

        this.$minAge.val(20);
        this.$maxAge.val(30);
        this.$age.val(18);
        this.bv.validate();
        expect($('#msgMin').html()).toEqual('betweenCompareMin() called; compare to 20');
        expect($('#msgMax').html()).toEqual('betweenCompareMax() called; compare to 30');
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'between')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.between['default'], [this.$minAge.val(), this.$maxAge.val()]));

        this.bv.resetForm();
        this.$minAge.val(2);
        this.$maxAge.val(10);
        this.$age.val(6);
        this.bv.validate();
        expect($('#msgMin').html()).toEqual('betweenCompareMin() called; compare to 2');
        expect($('#msgMax').html()).toEqual('betweenCompareMax() called; compare to 10');
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('compare to return value of a namespace function', function() {
        this.$age.attr('data-bv-between-min', 'TestSuite.between.compareToMin')
                 .attr('data-bv-between-max', 'TestSuite.between.compareToMax');
        this.bv.destroy();
        this.bv = $('#betweenForm').bootstrapValidator().data('bootstrapValidator');

        this.$minAge.val(20);
        this.$maxAge.val(30);
        this.$age.val(40);
        this.bv.validate();
        expect($('#msgMin').html()).toEqual('TestSuite.between.compareToMin() called; compare to 20');
        expect($('#msgMax').html()).toEqual('TestSuite.between.compareToMax() called; compare to 30');
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'between')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.between['default'], [this.$minAge.val(), this.$maxAge.val()]));

        this.bv.resetForm();
        this.$minAge.val(2);
        this.$maxAge.val(10);
        this.$age.val(5);
        this.bv.validate();
        expect($('#msgMin').html()).toEqual('TestSuite.between.compareToMin() called; compare to 2');
        expect($('#msgMax').html()).toEqual('TestSuite.between.compareToMax() called; compare to 10');
        expect(this.bv.isValid()).toBeTruthy();
    });
});

function validateCaptcha(value, validator, $field) {
    var items = $('#captchaOperation').html().split(' '), sum = parseInt(items[0]) + parseInt(items[2]);
    return value === sum + '';
};

describe('callback', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="callbackForm">',
                '<div class="form-group">',
                    '<label class="col-md-3 control-label" id="captchaOperation"></label>',
                    '<div class="col-md-2">',
                        '<input type="text" class="form-control" name="captcha" />',
                    '</div>',
                '</div>',
                '<div class="form-group">',
                    '<div class="col-md-2 col-md-offset-3">',
                        '<input type="text" class="form-control" name="declarativeCaptcha" data-bv-callback data-bv-callback-callback="validateCaptcha" />',
                    '</div>',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#callbackForm').bootstrapValidator({
            fields: {
                captcha: {
                    validators: {
                        callback: {
                            message: 'Wrong answer',
                            callback: function(value, validator, $field) {
                                return validateCaptcha(value, validator, $field);
                            }
                        }
                    }
                }
            }
        });

        this.bv                  = $('#callbackForm').data('bootstrapValidator');
        this.$captcha            = this.bv.getFieldElements('captcha');
        this.$declarativeCaptcha = this.bv.getFieldElements('declarativeCaptcha');
    });

    afterEach(function() {
        $('#callbackForm').bootstrapValidator('destroy').remove();
    });

    it('execute the callback', function() {
        $('#captchaOperation').html('1 + 2');

        this.$captcha.val('3');
        this.bv.validate();
        expect(this.bv.isValidField('captcha')).toBeTruthy();

        this.bv.resetForm();
        this.$captcha.val('5');
        this.bv.validate();
        expect(this.bv.isValidField('captcha')).toEqual(false);
    });

    it('callback declarative', function() {
        $('#captchaOperation').html('10 + 20');

        this.$declarativeCaptcha.val('40');
        this.bv.validate();
        expect(this.bv.isValidField('declarativeCaptcha')).toEqual(false);

        this.bv.resetForm();
        this.$declarativeCaptcha.val('30');
        this.bv.validate();
        expect(this.bv.isValidField('declarativeCaptcha')).toBeTruthy();
    });
});

describe('creditCard', function() {
    // Get the fake credit card number at http://www.getcreditcardnumbers.com/

    beforeEach(function() {
        var html = [
            '<div class="container">',
                '<form class="form-horizontal" id="ccForm">',
                    '<div class="form-group">',
                        '<input type="text" name="cc" data-bv-creditcard />',
                    '</div>',
                '</form>',
            '</div>'
        ].join('\n');

        $(html).appendTo('body');
        $('#ccForm').bootstrapValidator();

        this.bv          = $('#ccForm').data('bootstrapValidator');
        this.$creditCard = this.bv.getFieldElements('cc');
    });

    afterEach(function() {
        $('#ccForm').bootstrapValidator('destroy').parent().remove();
    });

    it('accept spaces', function() {
        this.$creditCard.val('5267 9789 9451 9654');
        this.bv.validate();
        expect(this.bv.isValidField('cc')).toBeTruthy();
    });

    it('accept dashes', function() {
        this.$creditCard.val('6011-2649-6840-4521');
        this.bv.validate();
        expect(this.bv.isValidField('cc')).toBeTruthy();
    });

    it('invalid format', function() {
        this.$creditCard.val('4539.1870.2954.3862');
        this.bv.validate();
        expect(this.bv.isValidField('cc')).toEqual(false);
    });

    it('American Express', function() {
        this.$creditCard.val('340653705597107');
        this.bv.validate();
        expect(this.bv.isValidField('cc')).toBeTruthy();
    });

    it('American Express invalid length', function() {
        this.$creditCard.val('3744148309166730');
        this.bv.validate();
        expect(this.bv.isValidField('cc')).toEqual(false);
    });

    it('American Express invalid prefix', function() {
        this.$creditCard.val('356120148436654');
        this.bv.validate();
        expect(this.bv.isValidField('cc')).toEqual(false);
    });

    it('Diners Club', function() {
        this.$creditCard.val('30130708434187');
        this.bv.validate();
        expect(this.bv.isValidField('cc')).toBeTruthy();
    });

    it('Diners Club (US)', function() {
        this.$creditCard.val('5517479515603901');
        this.bv.validate();
        expect(this.bv.isValidField('cc')).toBeTruthy();
    });

    it('Discover', function() {
        this.$creditCard.val('6011734674929094');
        this.bv.validate();
        expect(this.bv.isValidField('cc')).toBeTruthy();
    });

    it('JCB', function() {
        this.$creditCard.val('3566002020360505');
        this.bv.validate();
        expect(this.bv.isValidField('cc')).toBeTruthy();
    });

    it('Laser', function() {
        this.$creditCard.val('6304 9000 1774 0292 441');
        this.bv.validate();
        expect(this.bv.isValidField('cc')).toBeTruthy();
    });

    it('Maestro', function() {
        this.$creditCard.val('6762835098779303');
        this.bv.validate();
        expect(this.bv.isValidField('cc')).toBeTruthy();
    });

    it('Mastercard', function() {
        this.$creditCard.val('5303765013600904');
        this.bv.validate();
        expect(this.bv.isValidField('cc')).toBeTruthy();
    });

    it('Solo', function() {
        this.$creditCard.val('6334580500000000');
        this.bv.validate();
        expect(this.bv.isValidField('cc')).toBeTruthy();
    });

    it('Visa', function() {
        this.$creditCard.val('4929248980295542');
        this.bv.validate();
        expect(this.bv.isValidField('cc')).toBeTruthy();
    });

    it('Visa invalid check digit', function() {
        this.$creditCard.val('4532599916257826');
        this.bv.validate();
        expect(this.bv.isValidField('cc')).toEqual(false);
    });
});

describe('date', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="dateForm">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="date" data-bv-date />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#dateForm').bootstrapValidator();

        this.bv    = $('#dateForm').data('bootstrapValidator');
        this.$date = this.bv.getFieldElements('date');
    });

    afterEach(function() {
        $('#dateForm').bootstrapValidator('destroy').remove();
    });

    it('YYYY/MM/DD', function() {
        this.bv.updateOption('date', 'date', 'format', 'YYYY/MM/DD');

        this.$date.val('2000/01/30');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        // Invalid year
        this.bv.resetForm();
        this.$date.val('100/10/20');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        // Invalid month
        this.bv.resetForm();
        this.$date.val('2000/00/10');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$date.val('2000/15/10');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        // Invalid day
        this.bv.resetForm();
        this.$date.val('2000/03/00');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$date.val('2000/10/32');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        // Negative number
        this.bv.resetForm();
        this.$date.val('-2000/10/20');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$date.val('2000/-10/20');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$date.val('2000/10/-20');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        // Consist invalid characters
        // Issue #310
        this.bv.resetForm();
        this.$date.val('aaaa/');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$date.val('2004df/1dd1/5ffg');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        // Issue #475
        this.bv.resetForm();
        this.$date.val('2014/09');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$date.val('2014/09/');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$date.val('2014//15');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$date.val('/09/15');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

    it('MM/DD/YYYY', function() {
        this.bv.updateOption('date', 'date', 'format', 'MM/DD/YYYY');

        this.$date.val('09/15/2020');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$date.val('09/15');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$date.val('09/15/');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

    it('number of days in February', function() {
        this.bv.updateOption('date', 'date', 'format', 'YYYY/MM/DD');

        this.$date.val('2000/02/28');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$date.val('2000/02/29');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$date.val('2001/02/29');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

    // Issue #681
    it('date, month, year are prefixed by zero', function() {
        this.bv.updateOption('date', 'date', 'format', 'MM/DD/YYYY');

        this.$date.val('0012/08/2014');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$date.val('12/0008/2014');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$date.val('12/08/002014');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$date.val('12/08/2014');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('hours, minutes, seconds are prefixed by zero', function() {
        this.bv.updateOption('date', 'date', 'format', 'YYYY/MM/DD h:m:s');

        this.$date.val('2014/08/17 0007:30:00');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$date.val('2014/08/17 07:030:00');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$date.val('2014/08/17 07:30:0000');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$date.val('2014/08/17 07:30:00');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });
});

describe('ean', function() {
    beforeEach(function() {
        var html = [
            '<div class="container">',
                '<form class="form-horizontal" id="eanForm">',
                    '<div class="form-group">',
                        '<input type="text" name="ean" data-bv-ean />',
                    '</div>',
                '</form>',
            '</div>'
        ].join('\n');

        $(html).appendTo('body');
        $('#eanForm').bootstrapValidator();

        this.bv   = $('#eanForm').data('bootstrapValidator');
        this.$ean = this.bv.getFieldElements('ean');
    });

    afterEach(function() {
        $('#eanForm').bootstrapValidator('destroy').parent().remove();
    });

    it('valid', function() {
        var samples = ['73513537', '9780471117094', '4006381333931'];

        for (var i in samples) {
            this.$ean.val(samples[i]);
            this.bv.validate();
            expect(this.bv.isValidField('ean')).toBeTruthy();
        }
    });

    it('contains only digits', function() {
        this.$ean.val('123abcDEF!@#');
        this.bv.validate();
        expect(this.bv.isValidField('ean')).toEqual(false);
    });

    it('invalid length', function() {
        this.$ean.val('1234567');
        this.bv.validate();
        expect(this.bv.isValidField('ean')).toEqual(false);
    });

    it('invalid check digit', function() {
        this.$ean.val('73513536');
        this.bv.validate();
        expect(this.bv.isValidField('ean')).toEqual(false);
    });
});

describe('emailAddress', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="emailAddressForm">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="email-address-or-addresses" data-bv-emailaddress />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#emailAddressForm').bootstrapValidator();

        this.bv = $('#emailAddressForm').data('bootstrapValidator');
        this.$emailAddressOrAddresses = this.bv.getFieldElements('email-address-or-addresses');
    });

    afterEach(function() {
        $('#emailAddressForm').bootstrapValidator('destroy').remove();
    });

    var validEmailAddresses = [
        'admin@mailserver1',
        'niceandsimple@example.com',
        'very.common@example.com',
        'a.little.lengthy.but.fine@dept.example.com',
        'disposable.style.email.with+symbol@example.com',
        'other.email-with-dash@example.com',
        '"much.more unusual"@example.com',
        '"very.unusual.@.unusual.com"@example.com',
        '"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com',
        '" "@example.org',
        'üñîçøðé@example.com'
    ];

    var invalidEmailAddresses = [
        // "!#$%&'*+-/=?^_`{}|~@example.org",   // This is actually passing validation; see https://github.com/nghuuphuoc/bootstrapvalidator/issues/673
        'üñîçøðé@üñîçøðé.com',
        'Abc.example.com',
        'A@b@c@example.com',
        'a"b(c)d,e:f;gi[j\k]l@example.com',
        'just"not"right@example.com',
        'this is"not\allowed@example.com',
        'this\ still\"not\\allowed@example.com'
    ];

    var validMultipleEmailAddressesForDefaultSeparators = [
        'niceandsimple@example.com,very.common@example.com',
        'niceandsimple@example.com;very.common@example.com',
        'niceandsimple@example.com;very.common@example.com,a.little.lengthy.but.fine@dept.example.com'
    ];

    var invalidMultipleEmailAddressesForDefaultSeparators = [
        'niceandsimple@example.com+very.common@example.com',
        'niceandsimple@example.com|very.common@example.com'
    ];

    var validMultipleEmailAddressesForCommaOrDollarSignSeparators = [
        'niceandsimple@example.com,very.common@example.com',
        'niceandsimple@example.com$very.common@example.com',
        'niceandsimple@example.com,very.common@example.com$a.little.lengthy.but.fine@dept.example.com'
    ];

    var invalidMultipleEmailAddressesForCommaOrDollarSignSeparators = [
        'niceandsimple@example.com;very.common@example.com',
        'niceandsimple@example.com;very.common@example.com,a.little.lengthy.but.fine@dept.example.com'
    ];

    it('Valid email addresses (multiple=false)', function() {
        var that = this;
        $.each(validEmailAddresses, function(index, emailAddress) {
            that.bv.resetForm();
            that.$emailAddressOrAddresses.val(emailAddress);
            that.bv.validate();
            expect(that.bv.isValid()).toBeTruthy();
        });
    });

    it('Invalid email addresses (multiple=false)', function() {
        var that = this;

        var addresses = invalidEmailAddresses
                            .concat(validMultipleEmailAddressesForDefaultSeparators)
                            .concat(invalidMultipleEmailAddressesForDefaultSeparators)
                            .concat(validMultipleEmailAddressesForCommaOrDollarSignSeparators)
                            .concat(invalidMultipleEmailAddressesForCommaOrDollarSignSeparators);

        $.each(addresses, function(index, emailAddress) {
            that.bv.resetForm();
            that.$emailAddressOrAddresses.val(emailAddress);
            that.bv.validate();
            expect(that.bv.isValid()).toEqual(false);
        });
    });

    it('Invalid email addresses (multiple=false,separator=/[,\$]/)', function() {
        var that = this;
        that.bv.updateOption('email-address-or-addresses', 'emailAddress', 'separator', /[,;]/);

        var addresses = invalidEmailAddresses
                            .concat(validMultipleEmailAddressesForDefaultSeparators)
                            .concat(invalidMultipleEmailAddressesForDefaultSeparators)
                            .concat(validMultipleEmailAddressesForCommaOrDollarSignSeparators)
                            .concat(invalidMultipleEmailAddressesForCommaOrDollarSignSeparators);

        $.each(addresses, function(index, emailAddress) {
            that.bv.resetForm();
            that.$emailAddressOrAddresses.val(emailAddress);
            that.bv.validate();
            expect(that.bv.isValid()).toEqual(false);
        });
    });

    it('Valid email addresses (multiple=true)', function() {
        var that = this;
        that.bv.updateOption('email-address-or-addresses', 'emailAddress', 'multiple', true);

        var addresses = validEmailAddresses
                            .concat(validMultipleEmailAddressesForDefaultSeparators);

        $.each(addresses, function(index, emailAddress) {
            that.bv.resetForm();
            that.$emailAddressOrAddresses.val(emailAddress);
            that.bv.validate();
            expect(that.bv.isValid()).toBeTruthy();
        });
    });

    it('Invalid email addresses (multiple=true)', function() {
        var that = this;
        that.bv.updateOption('email-address-or-addresses', 'emailAddress', 'multiple', true);

        var addresses = invalidEmailAddresses
                            .concat(invalidMultipleEmailAddressesForDefaultSeparators);

        $.each(addresses, function(index, emailAddress) {
            that.bv.resetForm();
            that.$emailAddressOrAddresses.val(emailAddress);
            that.bv.validate();
            expect(that.bv.isValid()).toEqual(false);
        });
    });

    it('Valid email addresses (multiple=true,separator=/[,\$]/)', function() {
        var that = this;
        that.bv.updateOption('email-address-or-addresses', 'emailAddress', 'multiple', true);
        that.bv.updateOption('email-address-or-addresses', 'emailAddress', 'separator', /[,\$]/);

        var addresses = validEmailAddresses
                            .concat(validMultipleEmailAddressesForCommaOrDollarSignSeparators);

        $.each(addresses, function(index, emailAddress) {
            that.bv.resetForm();
            that.$emailAddressOrAddresses.val(emailAddress);
            that.bv.validate();
            expect(that.bv.isValid()).toBeTruthy();
        });
    });

    it('Invalid email addresses (multiple=true,separator=/[,\$]/)', function() {
        var that = this;
        that.bv.updateOption('email-address-or-addresses', 'emailAddress', 'multiple', true);
        that.bv.updateOption('email-address-or-addresses', 'emailAddress', 'separator', /[,\$]/);

        var addresses = invalidEmailAddresses
                            .concat(invalidMultipleEmailAddressesForCommaOrDollarSignSeparators);

        $.each(addresses, function(index, emailAddress) {
            that.bv.resetForm();
            that.$emailAddressOrAddresses.val(emailAddress);
            that.bv.validate();
            expect(that.bv.isValid()).toEqual(false);
        });
    });
});

function greaterThanCompare() {
    var compareTo = $('#greaterThanForm').find('[name="minAge"]').val();
    $('#msg').html('greaterThanCompare() called; compare to ' + compareTo);
    return compareTo;
};

TestSuite = $.extend({}, TestSuite, {
    greaterThan: {
        compareTo: function(value, validator, $field) {
            var compareTo = $('#greaterThanForm').find('[name="minAge"]').val();
            $('#msg').html('TestSuite.greaterThan.compareTo() called; compare to ' + compareTo);
            return compareTo;
        }
    }
});

describe('greaterThan', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="greaterThanForm">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="minAge" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" name="age" data-bv-greaterthan data-bv-greaterthan-value="18" />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#greaterThanForm').bootstrapValidator();

        this.bv      = $('#greaterThanForm').data('bootstrapValidator');
        this.$minAge = this.bv.getFieldElements('minAge');
        this.$age    = this.bv.getFieldElements('age');
    });

    afterEach(function() {
        $('#greaterThanForm').bootstrapValidator('destroy').remove();
    });

    it('not a number', function() {
        this.$age.val('20abc');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

    it('compare to value', function() {
        this.$age.val(10);
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$age.val(20);
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('compare to other field', function() {
        this.$age.attr('data-bv-greaterthan-value', 'minAge');
        this.bv.destroy();
        this.bv = $('#greaterThanForm').bootstrapValidator().data('bootstrapValidator');

        this.$minAge.val(10);
        this.$age.val(20);
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$minAge.val(20);
        this.$age.val(10);
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'greaterThan')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.greaterThan['default'], this.$minAge.val()));
    });

    it('compare to return value of a function', function() {
        this.$age.attr('data-bv-greaterthan-value', 'greaterThanCompare');
        this.bv.destroy();
        this.bv = $('#greaterThanForm').bootstrapValidator().data('bootstrapValidator');

        this.$minAge.val(20);
        this.$age.val(18);
        this.bv.validate();
        expect($('#msg').html()).toEqual('greaterThanCompare() called; compare to 20');
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'greaterThan')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.greaterThan['default'], this.$minAge.val()));

        this.bv.resetForm();
        this.$minAge.val(18);
        this.$age.val(20);
        this.bv.validate();
        expect($('#msg').html()).toEqual('greaterThanCompare() called; compare to 18');
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('compare to return value of a namespace function', function() {
        this.$age.attr('data-bv-greaterthan-value', 'TestSuite.greaterThan.compareTo');
        this.bv.destroy();
        this.bv = $('#greaterThanForm').bootstrapValidator().data('bootstrapValidator');

        this.$minAge.val(20);
        this.$age.val(18);
        this.bv.validate();
        expect($('#msg').html()).toEqual('TestSuite.greaterThan.compareTo() called; compare to 20');
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'greaterThan')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.greaterThan['default'], this.$minAge.val()));

        this.bv.resetForm();
        this.$minAge.val(18);
        this.$age.val(20);
        this.bv.validate();
        expect($('#msg').html()).toEqual('TestSuite.greaterThan.compareTo() called; compare to 18');
        expect(this.bv.isValid()).toBeTruthy();
    });
});

describe('iban', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="ibanForm">',
                '<div class="form-group">',
                    '<select class="form-control" name="country">',
                        '<option value="AD">Andorra</option>',
                        '<option value="AE">United Arab Emirates</option>',
                        '<option value="AL">Albania</option>',
                        '<option value="AO">Angola</option>',
                        '<option value="AT">Austria</option>',
                        '<option value="AZ">Azerbaijan</option>',
                        '<option value="BA">Bosnia and Herzegovina</option>',
                        '<option value="BE">Belgium</option>',
                        '<option value="BF">Burkina Faso</option>',
                        '<option value="BG">Bulgaria</option>',
                        '<option value="BH">Bahrain</option>',
                        '<option value="BI">Burundi</option>',
                        '<option value="BJ">Benin</option>',
                        '<option value="BR">Brazil</option>',
                        '<option value="CH">Switzerland</option>',
                        '<option value="CM">Cameroon</option>',
                        '<option value="CR">Costa Rica</option>',
                        '<option value="CV">Cape Verde</option>',
                        '<option value="CY">Cyprus</option>',
                        '<option value="CZ">Czech Republic</option>',
                        '<option value="DE">Germany</option>',
                        '<option value="DK">Denmark</option>',
                        '<option value="DO">Dominican Republic</option>',
                        '<option value="DZ">Algeria</option>',
                        '<option value="EE">Estonia</option>',
                        '<option value="ES">Spain</option>',
                        '<option value="FI">Finland</option>',
                        '<option value="FO">Faroe Islands</option>',
                        '<option value="FR">France</option>',
                        '<option value="GB">United Kingdom</option>',
                        '<option value="GE">Georgia</option>',
                        '<option value="GI">Gibraltar</option>',
                        '<option value="GL">Greenland</option>',
                        '<option value="GR">Greece</option>',
                        '<option value="GT">Guatemala</option>',
                        '<option value="HR">Croatia</option>',
                        '<option value="HU">Hungary</option>',
                        '<option value="IE">Ireland</option>',
                        '<option value="IL">Israel</option>',
                        '<option value="IR">Iran</option>',
                        '<option value="IS">Iceland</option>',
                        '<option value="IT">Italy</option>',
                        '<option value="JO">Jordan</option>',
                        '<option value="KW">Kuwait</option>',
                        '<option value="KZ">Kazakhstan</option>',
                        '<option value="LB">Lebanon</option>',
                        '<option value="LI">Liechtenstein</option>',
                        '<option value="LT">Lithuania</option>',
                        '<option value="LU">Luxembourg</option>',
                        '<option value="LV">Latvia</option>',
                        '<option value="MC">Monaco</option>',
                        '<option value="MD">Moldova</option>',
                        '<option value="ME">Montenegro</option>',
                        '<option value="MG">Madagascar</option>',
                        '<option value="MK">Macedonia</option>',
                        '<option value="ML">Mali</option>',
                        '<option value="MR">Mauritania</option>',
                        '<option value="MT">Malta</option>',
                        '<option value="MU">Mauritius</option>',
                        '<option value="MZ">Mozambique</option>',
                        '<option value="NL">Netherlands</option>',
                        '<option value="NO">Norway</option>',
                        '<option value="PK">Pakistan</option>',
                        '<option value="PL">Poland</option>',
                        '<option value="PS">Palestinian</option>',
                        '<option value="PT">Portugal</option>',
                        '<option value="QA">Qatar</option>',
                        '<option value="RO">Romania</option>',
                        '<option value="RS">Serbia</option>',
                        '<option value="SA">Saudi Arabia</option>',
                        '<option value="SE">Sweden</option>',
                        '<option value="SE">Slovenia</option>',
                        '<option value="SK">Slovakia</option>',
                        '<option value="SM">San Marino</option>',
                        '<option value="SN">Senegal</option>',
                        '<option value="TN">Tunisia</option>',
                        '<option value="TR">Turkey</option>',
                        '<option value="VG">Virgin Islands, British</option>',
                    '</select>',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" name="iban" data-bv-iban />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#ibanForm').bootstrapValidator();

        this.bv       = $('#ibanForm').data('bootstrapValidator');
        this.$country = this.bv.getFieldElements('country');
        this.$iban    = this.bv.getFieldElements('iban');
    });

    afterEach(function() {
        $('#ibanForm').bootstrapValidator('destroy').remove();
    });

    it('not supported country', function() {
        this.$iban.val('US123456789');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toEqual(false);
    });

    it('dynamic country', function() {
        this.$iban.attr('data-bv-iban-country', 'country');
        this.bv.destroy();
        this.bv = $('#ibanForm').bootstrapValidator().data('bootstrapValidator');

        this.$country.val('AT');
        this.$iban.val('AT611904300234573201');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$country.val('BG');
        this.$iban.val('HR1210010051863000160');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

    it('Albania', function() {
        this.$iban.val('AL47212110090000000235698741');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Algeria', function() {
        this.$iban.val('DZ4000400174401001050486');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Andorra', function() {
        this.$iban.val('AD1200012030200359100100');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Angola', function() {
        this.$iban.val('AO06000600000100037131174');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Austria', function() {
        this.$iban.val('AT611904300234573201');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Azerbaijan', function() {
        this.$iban.val('AZ21NABZ00000000137010001944');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Bahrain', function() {
        this.$iban.val('BH29BMAG1299123456BH00');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Belgium', function() {
        this.$iban.val('BE68539007547034');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Benin', function() {
        this.$iban.val('BJ11B00610100400271101192591');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Brazil', function() {
        this.$iban.val('BR9700360305000010009795493P1');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Bulgaria', function() {
        this.$iban.val('BG80BNBG96611020345678');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Burkina Faso', function() {
        this.$iban.val('BF1030134020015400945000643');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });
    it('Burundi', function() {
        this.$iban.val('BI43201011067444');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Cameroon', function() {
        this.$iban.val('CM2110003001000500000605306');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Cape Verde', function() {
        this.$iban.val('CV64000300004547069110176');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Costa Rica', function() {
        this.$iban.val('CR0515202001026284066');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Croatia', function() {
        this.$iban.val('HR1210010051863000160');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });
    it('Cyprus', function() {
        this.$iban.val('CY17002001280000001200527600');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Czech Republic', function() {
        this.$iban.val('CZ6508000000192000145399');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Denmark', function() {
        this.$iban.val('DK5000400440116243');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Dominican Republic', function() {
        this.$iban.val('DO28BAGR00000001212453611324');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Estonia', function() {
        this.$iban.val('EE382200221020145685');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });
    it('Faroe Islands', function() {
        this.$iban.val('FO1464600009692713');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Finland', function() {
        this.$iban.val('FI2112345600000785');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('France', function() {
        this.$iban.val('FR1420041010050500013M02606');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Guatemala', function() {
        this.$iban.val('GT82TRAJ01020000001210029690');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Georgia', function() {
        this.$iban.val('GE29NB0000000101904917');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Germany', function() {
        this.$iban.val('DE89370400440532013000');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Gibraltar', function() {
        this.$iban.val('GI75NWBK000000007099453');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Greece', function() {
        this.$iban.val('GR1601101250000000012300695');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Greenland', function() {
        this.$iban.val('GL8964710001000206');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Hungary', function() {
        this.$iban.val('HU42117730161111101800000000');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Iceland', function() {
        this.$iban.val('IS140159260076545510730339');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Iran', function() {
        this.$iban.val('IR580540105180021273113007');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Ireland', function() {
        this.$iban.val('IE29AIBK93115212345678');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Israel', function() {
        this.$iban.val('IL620108000000099999999');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Italy', function() {
        this.$iban.val('IT60X0542811101000000123456');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Ivory Coast', function() {
        this.$iban.val('CI05A00060174100178530011852');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Jordan', function() {
        this.$iban.val('JO94CBJO0010000000000131000302');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Kazakhstan', function() {
        this.$iban.val('KZ176010251000042993');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Kuwait', function() {
        this.$iban.val('KW74NBOK0000000000001000372151');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Latvia', function() {
        this.$iban.val('LV80BANK0000435195001');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Lebanon', function() {
        this.$iban.val('LB30099900000001001925579115');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Liechtenstein', function() {
        this.$iban.val('LI21088100002324013AA');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Lithuania', function() {
        this.$iban.val('LT121000011101001000');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Luxembourg', function() {
        this.$iban.val('LU280019400644750000');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Macedonia', function() {
        this.$iban.val('MK07300000000042425');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Madagascar', function() {
        this.$iban.val('MG4600005030010101914016056');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Malta', function() {
        this.$iban.val('MT84MALT011000012345MTLCAST001S');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Mauritania', function() {
        this.$iban.val('MR1300012000010000002037372');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Mauritius', function() {
        this.$iban.val('MU17BOMM0101101030300200000MUR');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Mali', function() {
        this.$iban.val('ML03D00890170001002120000447');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Moldova', function() {
        this.$iban.val('MD24AG000225100013104168');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Monaco', function() {
        this.$iban.val('MC5813488000010051108001292');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Montenegro', function() {
        this.$iban.val('ME25505000012345678951');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Mozambique', function() {
        this.$iban.val('MZ59000100000011834194157');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Netherlands', function() {
        this.$iban.val('NL91ABNA0417164300');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Norway', function() {
        this.$iban.val('NO9386011117947');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Pakistan', function() {
        this.$iban.val('PK24SCBL0000001171495101');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Palestine', function() {
        this.$iban.val('PS92PALS000000000400123456702');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Poland', function() {
        this.$iban.val('PL27114020040000300201355387');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Portugal', function() {
        this.$iban.val('PT50000201231234567890154');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Qatar', function() {
        this.$iban.val('QA58DOHB00001234567890ABCDEFG');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Romania', function() {
        this.$iban.val('RO49AAAA1B31007593840000');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('San Marino', function() {
        this.$iban.val('SM86U0322509800000000270100');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Saudi Arabia', function() {
        this.$iban.val('SA0380000000608010167519');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Senegal', function() {
        this.$iban.val('SN12K00100152000025690007542');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Serbia', function() {
        this.$iban.val('RS35260005601001611379');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Slovakia', function() {
        this.$iban.val('SK3112000000198742637541');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Slovenia', function() {
        this.$iban.val('SI56191000000123438');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Spain', function() {
        this.$iban.val('ES9121000418450200051332');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Sweden', function() {
        this.$iban.val('SE3550000000054910000003');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Switzerland', function() {
        this.$iban.val('CH9300762011623852957');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Tunisia', function() {
        this.$iban.val('TN5914207207100707129648');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Turkey', function() {
        this.$iban.val('TR330006100519786457841326');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('United Arab Emirates', function() {
        this.$iban.val('AE260211000000230064016');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('United Kingdom', function() {
        this.$iban.val('GB29NWBK60161331926819');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('Virgin Islands, British', function() {
        this.$iban.val('VG96VPVG0000012345678901');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toBeTruthy();
    });

    it('invalid checksum', function() {
        this.$iban.val('TR330006100519786457841325');
        this.bv.validate();
        expect(this.bv.isValidField('iban')).toEqual(false);
    });
});

describe('id', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="idForm">',
                '<div class="form-group">',
                    '<select class="form-control" name="country">',
                        '<option value="BA">Bosnia and Herzegovina</option>',
                        '<option value="BG">Bulgaria</option>',
                        '<option value="BR">Brazil</option>',
                        '<option value="CH">Switzerland</option>',
                        '<option value="CL">Chile</option>',
                        '<option value="CN">China</option>',
                        '<option value="CZ">Czech</option>',
                        '<option value="DK">Denmark</option>',
                        '<option value="EE">Estonia</option>',
                        '<option value="ES">Spain</option>',
                        '<option value="FI">Finland</option>',
                        '<option value="HR">Croatia</option>',
                        '<option value="IE">Ireland</option>',
                        '<option value="IS">Iceland</option>',
                        '<option value="LT">Lithuania</option>',
                        '<option value="LV">Latvia</option>',
                        '<option value="ME">Montenegro</option>',
                        '<option value="MK">Macedonia</option>',
                        '<option value="NL">Netherlands</option>',
                        '<option value="RO">Romania</option>',
                        '<option value="RS">Serbia</option>',
                        '<option value="SE">Sweden</option>',
                        '<option value="SI">Slovenia</option>',
                        '<option value="SK">Slovakia</option>',
                        '<option value="SM">San Marino</option>',
                        '<option value="TH">Thailand</option>',
                        '<option value="ZA">South Africa</option>',
                    '</select>',
                '</div>',
                '<div class="form-group">',
                    '<input class="form-control" type="text" name="id" data-bv-id />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#idForm').bootstrapValidator();

        /**
         * @type {BootstrapValidator}
         */
        this.bv       = $('#idForm').data('bootstrapValidator');
        this.$country = this.bv.getFieldElements('country');
        this.$id      = this.bv.getFieldElements('id');
    });

    afterEach(function() {
        $('#idForm').bootstrapValidator('destroy').remove();
    });

    it('dynamic country', function() {
        this.$id.attr('data-bv-id-country', 'country');
        this.bv.destroy();
        this.bv = $('#idForm').bootstrapValidator().data('bootstrapValidator');

        this.$country.val('BG');
        this.$id.val('7552010005');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$country.val('BR');
        this.$id.val('231.002.999-00');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

    it('Bulgarian national identification number (EGN)', function() {
        this.bv.updateOption('id', 'id', 'country', 'BG');

        // Valid samples
        var validSamples = ['7523169263', '8032056031', '803205 603 1', '8001010008', '7501020018', '7552010005', '7542011030'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['8019010008'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$id.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Brazilian national identification number (CPF)', function() {
        this.bv.updateOption('id', 'id', 'country', 'BR');

        // Valid samples
        var validSamples = ['39053344705', '390.533.447-05', '111.444.777-35'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['231.002.999-00'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$id.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Swiss Social Security Number (AHV-Nr/No AVS)', function() {
        this.bv.updateOption('id', 'id', 'country', 'CH');

        // Valid samples
        var validSamples = ['756.1234.5678.95', '7561234567895'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }
    });

    it('Chilean national identification number (RUN/RUT)', function() {
        this.bv.updateOption('id', 'id', 'country', 'CL');

        // Valid samples
        var validSamples = ['76086428-5', '22060449-7', '12531909-2','12937893-K','12937893-k'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }
    });

    // #793
    it('Chinese citizen identification number', function() {
        this.bv.updateOption('id', 'id', 'country', 'CN');

        // Valid samples
        var validSamples = ['450202201409072332', '22011219930407001X', '110108601017023'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['999999199304070016', '220112190002290016', '220112199304070019', '999999601017023', '110108999999023'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$id.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Czech national identification number (RC)', function() {
        this.bv.updateOption('id', 'id', 'country', 'CZ');

        // Valid samples
        var validSamples = ['7103192745', '991231123'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['1103492745', '590312123'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$id.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Danish Personal Identification number (CPR)', function() {
        this.bv.updateOption('id', 'id', 'country', 'DK');

        // Valid samples
        var validSamples = ['2110625629', '211062-5629'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['511062-5629'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$id.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Estonian Personal Identification Code (isikukood)', function() {
        this.bv.updateOption('id', 'id', 'country', 'EE');

        // Valid samples
        var validSamples = ['37605030299'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }
    });

    it('Spanish personal identity code (DNI/NIE)', function() {
        this.bv.updateOption('id', 'id', 'country', 'ES');

        // Valid samples
        var validSamples = ['54362315K', '54362315-K', 'X2482300W', 'X-2482300W', 'X-2482300-W'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['54362315Z', 'X-2482300A'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$id.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Finnish Personal Identity Code (HETU)', function() {
        this.bv.updateOption('id', 'id', 'country', 'FI');

        // Valid samples
        var validSamples = ['311280-888Y', '131052-308T'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['131052-308U', '310252-308Y'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$id.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Croatian personal identification number (OIB)', function() {
        this.bv.updateOption('id', 'id', 'country', 'HR');

        // Valid samples
        var validSamples = ['33392005961'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['33392005962'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$id.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Irish Personal Public Service Number (PPS)', function() {
        this.bv.updateOption('id', 'id', 'country', 'IE');

        // Valid samples
        var validSamples = ['6433435F', '6433435FT', '6433435FW', '6433435OA', '6433435IH', '1234567TW', '1234567FA'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['6433435E', '6433435VH'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$id.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Iceland national identification number (Kennitala)', function() {
        this.bv.updateOption('id', 'id', 'country', 'IS');

        // Valid samples
        var validSamples = ['120174-3399', '1201743399', '0902862349'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }
    });

    it('Lithuanian Personal Code (Asmens kodas)', function() {
        this.bv.updateOption('id', 'id', 'country', 'LT');

        // Valid samples
        var validSamples = ['38703181745'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['38703181746', '78703181745', '38703421745'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$id.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Latvian Personal Code (Personas kods)', function() {
        this.bv.updateOption('id', 'id', 'country', 'LV');

        // Valid samples
        var validSamples = ['161175-19997', '16117519997'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['161375-19997'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$id.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Dutch national identification number (BSN)', function() {
        this.bv.updateOption('id', 'id', 'country', 'NL');

        // Valid samples
        var validSamples = ['111222333', '941331490', '9413.31.490'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['111252333'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$id.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Romanian numerical personal code (CNP)', function() {
        this.bv.updateOption('id', 'id', 'country', 'RO');

        // Valid samples
        var validSamples = ['1630615123457', '1800101221144'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['8800101221144', '1632215123457', '1630615123458'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$id.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Swedish personal identity number (personnummer)', function() {
        this.bv.updateOption('id', 'id', 'country', 'SE');

        // Valid samples
        var validSamples = ['8112289874', '811228-9874', '811228+9874'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['811228-9873'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$id.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Slovak national identifier number (RC)', function() {
        this.bv.updateOption('id', 'id', 'country', 'SK');

        // Valid samples
        var validSamples = ['7103192745', '991231123'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['7103192746', '1103492745'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$id.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('South African ID', function() {
        this.bv.updateOption('id', 'id', 'country', 'ZA');

        // Valid samples
        var validSamples = ['8001015009087'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['8001015009287', '8001015009086'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$id.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Thailand citizen number', function() {
        this.bv.updateOption('id', 'id', 'country', 'TH');

        // Valid samples
        var validSamples = ['7145620509547', '3688699975685', '2368719339716'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$id.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['1100800092310'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$id.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });
});

describe('imo', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="imoForm">',
                '<div class="form-group">',
                    '<input type="text" name="imo" data-bv-imo />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#imoForm').bootstrapValidator();

        this.bv   = $('#imoForm').data('bootstrapValidator');
        this.$imo = this.bv.getFieldElements('imo');
    });

    afterEach(function() {
        $('#imoForm').bootstrapValidator('destroy').remove();
    });

    it('Valid IMO (upper)', function() {
        this.bv.resetForm();
        this.$imo.val('IMO 9074729');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('Valid IMO (lower)', function() {
        this.bv.resetForm();
        this.$imo.val('imo 9074729');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('Invalid IMO (bad format)', function() {
        this.bv.resetForm();
        this.$imo.val('9074729');
        this.bv.validate();
        expect(this.bv.isValid()).toBeFalsy();
    });

    it('Invalid IMO (bad check digit)', function() {
        this.bv.resetForm();
        this.$imo.val('IMO 9074728');
        this.bv.validate();
        expect(this.bv.isValid()).toBeFalsy();
    });
});

describe('ip', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="ipForm">',
                '<div class="form-group">',
                    '<input type="text" name="ipv4" data-bv-ip data-bv-ip-ipv6="false" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" name="ipv6" data-bv-ip data-bv-ip-ipv4="false" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" name="both" data-bv-ip />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#ipForm').bootstrapValidator();

        this.bv    = $('#ipForm').data('bootstrapValidator');
        this.$ipv4 = this.bv.getFieldElements('ipv4');
        this.$ipv6 = this.bv.getFieldElements('ipv6');
        this.$both = this.bv.getFieldElements('both');
    });

    afterEach(function() {
        $('#ipForm').bootstrapValidator('destroy').remove();
    });

    it('Valid ipv4', function() {
        this.$ipv4.val('0.0.0.0');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
        
        this.bv.resetForm();
        this.$ipv4.val('192.168.1.1');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
        
        this.bv.resetForm();
        this.$ipv4.val('255.255.255.255');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });
    
    it('Invalid ipv4', function() {
        this.$ipv4.val('10.168.0001.100');         // extra 0 not allowed
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv4.val('0.0.0.256');               // 256 not allowed, max is 255
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv4.val('256.255.255.255');         // max is 255.255.255.255
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv4.val('192.168. 224.0');          // internal space
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv4.val('192.168.224.0 1');         // junk after valid address
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

    it('Valid ipv6', function() {
        this.$ipv6.val('0000:0000:0000:0000:0000:0000:0000:0000');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
        
        this.bv.resetForm();
        this.$ipv6.val('fe00::1');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
        
        this.bv.resetForm();
        this.$ipv6.val('fe80::217:f2ff:fe07:ed62');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
        
        this.bv.resetForm();
        this.$ipv6.val('ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });
    
    it('Invalid ipv6', function() {
        this.$ipv6.val('02001:0000:1234:0000:0000:C1C0:ABCD:0876');     // extra 0 not allowed
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv6.val('2001:0000:1234:0000:00001:C1C0:ABCD:0876');     // extra 0 not allowed
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv6.val('2001:0000:1234: 0000:0000:C1C0:ABCD:0876');    // internal space
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv6.val('2001:0000:1234:0000:0000:C1C0:ABCD:0876 0');    // junk after valid address
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv6.val('3ffe:0b00:0000:0001:0000:0000:000a');           // seven segment
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv6.val('FF02:0000:0000:0000:0000:0000:0000:0000:0001'); // nine segment
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv6.val('::1111:2222:3333:4444:5555:6666::');            // double "::"
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv6.val('3ffe:b00::1::a');                               // double "::"
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

    it('Both', function() {
        this.$both.val('255.255.255.255');                            // valid
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
        
        this.bv.resetForm();
        this.$both.val('256.0.0.0');                                  // 256 not allowed, max is 255
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$both.val('2001:0db8:0000:85a3:0000:0000:ac1f:8001');    // valid
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
        
        this.bv.resetForm();
        this.$both.val('2001:0000:1234:0000:0000:C1C0:ABCD:0876 0');  // junk after valid address
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

});
describe('isbn', function() {
    beforeEach(function() {
        var html = [
            '<div class="container">',
                '<form class="form-horizontal" id="isbnForm">',
                    '<div class="form-group">',
                        '<input type="text" name="isbn" data-bv-isbn />',
                    '</div>',
                '</form>',
            '</div>'
        ].join('\n');

        $(html).appendTo('body');
        $('#isbnForm').bootstrapValidator();

        this.bv    = $('#isbnForm').data('bootstrapValidator');
        this.$isbn = this.bv.getFieldElements('isbn');
    });

    afterEach(function() {
        $('#isbnForm').bootstrapValidator('destroy').parent().remove();
    });

    it('isbn10 hyphen', function() {
        var samples = ['99921-58-10-7', '9971-5-0210-0', '960-425-059-0', '80-902734-1-6'];

        for (var i in samples) {
            this.$isbn.val(samples[i]);
            this.bv.validate();
            expect(this.bv.isValidField('isbn')).toBeTruthy();
        }
    });

    it('isbn10 space', function() {
        var samples = ['85 359 0277 5', '1 84356 028 3', '0 684 84328 5', '0 85131 041 9', '0 943396 04 2'];

        for (var i in samples) {
            this.$isbn.val(samples[i]);
            this.bv.validate();
            expect(this.bv.isValidField('isbn')).toBeTruthy();
        }
    });

    it('isbn10 hyphen with X', function() {
        var samples = ['0-8044-2957-X', '0-9752298-0-X'];
        for (var i in samples) {
            this.$isbn.val(samples[i]);
            this.bv.validate();
            expect(this.bv.isValidField('isbn')).toBeTruthy();
        }
    });

    it('isbn10 invalid check digit', function() {
        this.$isbn.val('99921-58-10-6');
        this.bv.validate();
        expect(this.bv.isValidField('isbn')).toEqual(false);
    });

    it('isbn13', function() {
        this.$isbn.val('978-0-306-40615-7');
        this.bv.validate();
        expect(this.bv.isValidField('isbn')).toBeTruthy();
    });

    it('isbn13 invalid check digit', function() {
        this.$isbn.val('978-0-306-40615-6');
        this.bv.validate();
        expect(this.bv.isValidField('isbn')).toEqual(false);
    });
});

describe('isin', function() {
    beforeEach(function() {
        var html = [
            '<div class="container">',
                '<form class="form-horizontal" id="isinForm">',
                    '<div class="form-group">',
                        '<input type="text" name="isin" data-bv-isin />',
                    '</div>',
                '</form>',
            '</div>'
        ].join('\n');

        $(html).appendTo('body');
        $('#isinForm').bootstrapValidator();

        this.bv    = $('#isinForm').data('bootstrapValidator');
        this.$isin = this.bv.getFieldElements('isin');
    });

    afterEach(function() {
        $('#isinForm').bootstrapValidator('destroy').parent().remove();
    });

    it('valid', function() {
        var samples = ['US0378331005', 'AU0000XVGZA3', 'GB0002634946'];

        for (var i in samples) {
            this.$isin.val(samples[i]);
            this.bv.validate();
            expect(this.bv.isValidField('isin')).toBeTruthy();
        }
    });

    it('invalid country code', function() {
        this.$isin.val('AA0000XVGZA3');
        this.bv.validate();
        expect(this.bv.isValidField('isin')).toEqual(false);
    });

    it('contains only digits and alphabet', function() {
        this.$isin.val('US12345ABC@#$');
        this.bv.validate();
        expect(this.bv.isValidField('isin')).toEqual(false);
    });

    it('invalid length', function() {
        this.$isin.val('US1234567');
        this.bv.validate();
        expect(this.bv.isValidField('isin')).toEqual(false);
    });

    it('invalid check digit', function() {
        this.$isin.val('US0378331004');
        this.bv.validate();
        expect(this.bv.isValidField('isin')).toEqual(false);
    });
});

describe('ismn', function() {
    beforeEach(function() {
        var html = [
            '<div class="container">',
                '<form class="form-horizontal" id="ismnForm">',
                    '<div class="form-group">',
                        '<input type="text" name="ismn" data-bv-ismn />',
                    '</div>',
                '</form>',
            '</div>'
        ].join('\n');

        $(html).appendTo('body');
        $('#ismnForm').bootstrapValidator();

        this.bv    = $('#ismnForm').data('bootstrapValidator');
        this.$ismn = this.bv.getFieldElements('ismn');
    });

    afterEach(function() {
        $('#ismnForm').bootstrapValidator('destroy').parent().remove();
    });

    it('valid start with M', function() {
        this.$ismn.val('M230671187');
        this.bv.validate();
        expect(this.bv.isValidField('ismn')).toBeTruthy();
    });

    it('valid start with 979', function() {
        this.$ismn.val('9790060115615');
        this.bv.validate();
        expect(this.bv.isValidField('ismn')).toBeTruthy();
    });

    it('valid contains spaces', function() {
        this.$ismn.val('979 0 3452 4680 5');
        this.bv.validate();
        expect(this.bv.isValidField('ismn')).toBeTruthy();
    });

    it('valid contains dashes', function() {
        this.$ismn.val('979-0-0601-1561-5');
        this.bv.validate();
        expect(this.bv.isValidField('ismn')).toBeTruthy();
    });

    it('invalid format', function() {
        this.$ismn.val('N123456789');
        this.bv.validate();
        expect(this.bv.isValidField('ismn')).toEqual(false);
    });

    it('invalid check digit', function() {
        this.$ismn.val('9790060115614');
        this.bv.validate();
        expect(this.bv.isValidField('ismn')).toEqual(false);
    });
});

describe('issn', function() {
    beforeEach(function() {
        var html = [
            '<div class="container">',
                '<form class="form-horizontal" id="issnForm">',
                    '<div class="form-group">',
                        '<input type="text" name="issn" data-bv-issn />',
                    '</div>',
                '</form>',
            '</div>'
        ].join('\n');

        $(html).appendTo('body');
        $('#issnForm').bootstrapValidator();

        this.bv    = $('#issnForm').data('bootstrapValidator');
        this.$issn = this.bv.getFieldElements('issn');
    });

    afterEach(function() {
        $('#issnForm').bootstrapValidator('destroy').parent().remove();
    });

    it('valid', function() {
        var samples = ['0378-5955', '0024-9319', '0032-1478'];

        for (var i in samples) {
            this.$issn.val(samples[i]);
            this.bv.validate();
            expect(this.bv.isValidField('issn')).toBeTruthy();
        }
    });

    it('not contains hyphen', function() {
        this.$issn.val('03785955');
        this.bv.validate();
        expect(this.bv.isValidField('issn')).toEqual(false);
    });

    it('contains only digits, X', function() {
        this.$issn.val('1234-566A');
        this.bv.validate();
        expect(this.bv.isValidField('issn')).toEqual(false);
    });

    it('invalid check sum', function() {
        this.$issn.val('0032-147X');
        this.bv.validate();
        expect(this.bv.isValidField('issn')).toEqual(false);
    });
});

function lessThanCompare() {
    var compareTo = $('#lessThanForm').find('[name="maxAge"]').val();
    $('#msg').html('lessThanCompare() called; compare to ' + compareTo);
    return compareTo;
};

TestSuite = $.extend({}, TestSuite, {
    lessThan: {
        compareTo: function(value, validator, $field) {
            var compareTo = $('#lessThanForm').find('[name="maxAge"]').val();
            $('#msg').html('TestSuite.lessThan.compareTo() called; compare to ' + compareTo);
            return compareTo;
        }
    }
});

describe('lessThan', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="lessThanForm">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="maxAge" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" name="age" data-bv-lessthan data-bv-lessthan-value="100" />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#lessThanForm').bootstrapValidator();

        this.bv      = $('#lessThanForm').data('bootstrapValidator');
        this.$maxAge = this.bv.getFieldElements('maxAge');
        this.$age    = this.bv.getFieldElements('age');
    });

    afterEach(function() {
        $('#lessThanForm').bootstrapValidator('destroy').remove();
    });

    it('not a number', function() {
        this.$age.val('20abc');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

    it('compare to value', function() {
        this.$age.val(120);
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$age.val(30);
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('compare to other field', function() {
        this.$age.attr('data-bv-lessthan-value', 'maxAge');
        this.bv.destroy();
        this.bv = $('#lessThanForm').bootstrapValidator().data('bootstrapValidator');

        this.$maxAge.val(40);
        this.$age.val(20);
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$maxAge.val(20);
        this.$age.val(30);
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'lessThan')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.lessThan['default'], this.$maxAge.val()));
    });

    it('compare to return value of a function', function() {
        this.$age.attr('data-bv-lessthan-value', 'lessThanCompare');
        this.bv.destroy();
        this.bv = $('#lessThanForm').bootstrapValidator().data('bootstrapValidator');

        this.$maxAge.val(50);
        this.$age.val(60);
        this.bv.validate();
        expect($('#msg').html()).toEqual('lessThanCompare() called; compare to 50');
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'lessThan')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.lessThan['default'], this.$maxAge.val()));

        this.bv.resetForm();
        this.$maxAge.val(60);
        this.$age.val(30);
        this.bv.validate();
        expect($('#msg').html()).toEqual('lessThanCompare() called; compare to 60');
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('compare to return value of a namespace function', function() {
        this.$age.attr('data-bv-lessthan-value', 'TestSuite.lessThan.compareTo');
        this.bv.destroy();
        this.bv = $('#lessThanForm').bootstrapValidator().data('bootstrapValidator');

        this.$maxAge.val(50);
        this.$age.val(60);
        this.bv.validate();
        expect($('#msg').html()).toEqual('TestSuite.lessThan.compareTo() called; compare to 50');
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'lessThan')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.lessThan['default'], this.$maxAge.val()));

        this.bv.resetForm();
        this.$maxAge.val(60);
        this.$age.val(30);
        this.bv.validate();
        expect($('#msg').html()).toEqual('TestSuite.lessThan.compareTo() called; compare to 60');
        expect(this.bv.isValid()).toBeTruthy();
    });
});

describe('meid', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="meidForm">',
                '<div class="form-group">',
                    '<input type="text" name="meid" data-bv-meid />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#meidForm').bootstrapValidator();

        this.bv    = $('#meidForm').data('bootstrapValidator');
        this.$meid = this.bv.getFieldElements('meid');
    });

    afterEach(function() {
        $('#meidForm').bootstrapValidator('destroy').remove();
    });

    it('Valid MEID (14 hex, check digit)', function() {
        this.bv.resetForm();
        this.$meid.val('A00000049259B16');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('Valid MEID (14 hex, dashes, check digit)', function() {
        this.bv.resetForm();
        this.$meid.val('A0-000004-9259B1-6');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('Valid MEID (14 hex, spaces, check digit)', function() {
        this.bv.resetForm();
        this.$meid.val('A0 000004 9259B1 6');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('Valid MEID (18 dec, check digit)', function() {
        this.bv.resetForm();
        this.$meid.val('2936087365007037100');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('Valid MEID (18 dec, dashes, check digit)', function() {
        this.bv.resetForm();
        this.$meid.val('29360-87365-0070-3710-0');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('Valid MEID (18 dec, spaces, check digit)', function() {
        this.bv.resetForm();
        this.$meid.val('29360 87365 0070 3710 0');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('Valid MEID (14 hex)', function() {
        this.bv.resetForm();
        this.$meid.val('AF0123450ABCDE');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('Valid MEID (14 hex, dashes)', function() {
        this.bv.resetForm();
        this.$meid.val('AF-012345-0ABCDE');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('Valid MEID (14 hex, spaces)', function() {
        this.bv.resetForm();
        this.$meid.val('AF 012345 0ABCDE');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('Valid MEID (18 dec)', function() {
        this.bv.resetForm();
        this.$meid.val('293608736500703710');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('Valid MEID (18 dec, dashes)', function() {
        this.bv.resetForm();
        this.$meid.val('29360-87365-0070-3710');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('Valid MEID (18 dec, spaces)', function() {
        this.bv.resetForm();
        this.$meid.val('29360 87365 0070 3710');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('Invalid MEID (14 hex, bad check digit)', function() {
        this.bv.resetForm();
        this.$meid.val('A00000049259B15');
        this.bv.validate();
        expect(this.bv.isValid()).toBeFalsy();
    });

    it('Invalid MEID (13 hex)', function() {
        this.bv.resetForm();
        this.$meid.val('A00000049259B');
        this.bv.validate();
        expect(this.bv.isValid()).toBeFalsy();
    });

    it('Invalid MEID (18 dec, bad check digit)', function() {
        this.bv.resetForm();
        this.$meid.val('2936087365007037101');
        this.bv.validate();
        expect(this.bv.isValid()).toBeFalsy();
    });

    it('Invalid MEID (17 dec)', function() {
        this.bv.resetForm();
        this.$meid.val('29360873650070371');
        this.bv.validate();
        expect(this.bv.isValid()).toBeFalsy();
    });
});

describe('phone', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="phoneForm">',
                '<div class="form-group">',
                    '<select class="form-control" name="country">',
                        '<option value="BR">Brazil</option>',
                        '<option value="CN">China</option>',
                        '<option value="CZ">Czech Republic</option>',
                        '<option value="DK">Denmark</option>',
                        '<option value="ES">Spain</option>',
                        '<option value="FR">France</option>',
                        '<option value="GB">United Kingdom</option>',
                        '<option value="MA">Morocco</option>',
                        '<option value="PK">Pakistan</option>',
                        '<option value="RO">Romania</option>',
                        '<option value="RU">Russia</option>',
                        '<option value="SK">Slovakia</option>',
                        '<option value="TH">Thailand</option>',
                        '<option value="US">USA</option>',
                        '<option value="VE">Venezuela</option>',
                    '</select>',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" name="phone" data-bv-phone />',
                '</div>',
            '</form>',
        ].join('\n')).appendTo('body');

        $('#phoneForm').bootstrapValidator();

        /**
         * @type {BootstrapValidator}
         */
        this.bv       = $('#phoneForm').data('bootstrapValidator');
        this.$country = this.bv.getFieldElements('country');
        this.$phone   = this.bv.getFieldElements('phone');
    });

    afterEach(function() {
        $('#phoneForm').bootstrapValidator('destroy').remove();
    });

    it('dynamic country', function() {
        this.$phone.attr('data-bv-phone-country', 'country');
        this.bv.destroy();
        this.bv = $('#phoneForm').bootstrapValidator().data('bootstrapValidator');

        this.$country.val('BR');
        this.$phone.val('16920894635');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$country.val('FR');
        this.$phone.val('0644444444');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$country.val('GB');
        this.$phone.val('012345678900');
        this.bv.validate();
        expect(this.bv.isValid()).toBeFalsy();
    });

    it('Brazil phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'BR');

        // Valid samples
        var validSamples = [
            '0800.000.00.00', '0800-000-00-00', '0800 000 00 00', '0800-00-00-00', '0800.00.00.00', '0800 00 00 00',
            '0800-000-0000', '0800 000 0000', '0800.000.0000', '08000000000',
            '1692089-4635', '16920894635', '16992089-4635', '16 99202-4635', '(16)99202-4635', '(16)92089-4635',
            '(16) 92089-4635', '(15) 4343-4343', '+55 15 3702-7523', '(+55) 15 3702-7523', '(+55)1537027523',
            '(+55)(15)3702-7523', '(+55) 15 3702-7523', '(+55) 15 99202-7523', '99202-4635', '(16) 9208-4635'
        ];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }
    });

    it('China phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'CN');

        // Valid samples
        var validSamples = [
            '18911111111', '189 1111 1111', '189-1111-1111', '0086-18911111111', '+86-18911111111',
            '86-18911111111', '0086 18911111111', '+86 18911111111', '86 18911111111', '0086 189-1111-1111',
            '+86 189-1111-1111', '86 189-1111-1111', '02011111111', '020-11111111', '020 11111111',
            '020 1111 1111', '020-1111-1111', '0086 020 82803159', '0086-020-82803159', '0086-020-82803159',
            '+86 20 61302222-8866', '+86 20 6130-2222-8866', '+86 10 59081185'
        ];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }
    });

    it('Czech Republic phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'CZ');

        // Valid samples
        var validSamples = [
            '00420123456789', '00420 123456789', '00420 123 456 789', '00 420 123 456 789',
            '+420123456789', '+420 123456789', '+420 123 456 789', '123456789', '123 456 789'
        ];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = [
            '420123456789', '420 123456789', '420 123 456 789', '00421123456789', '00421 123456789',
            '00421 123 456 789', '00 421 123 456 789', '+421123456789', '+421 123456789',
            '+421 123 456 789'
        ];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$phone.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('France phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'FR');

        // Valid samples
        var validSamples = [
            // National formats
            '0644444444', '06 44 44 44 44', '06-44-44-44-44', '06.44.44.44.44',
            // International formats
            '+33644444444', '+336.44.44.44.44', '+33 6.44.44.44.44', '0033644444444', '00336.44.44.44.44',
            '0033 6.44.44.44.44',
            // Some times
            '+33(0)644444444', '+33 (0) 644444444'
        ];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = [
            // The separator between pairs of digits is not the same
            '06 44.44-44.44', '06 44 44-44.44', '06 44 44-4444', '06 44 44-4444',
            // Too many digits
            '06444444444444',
            // Missing leading 0
            '6644444444',
            // Too much non-numeric characters
            '06  44.44-44.44', '+33 (0)  644444444',
            // Bad parenthesis
            '(0)644444444',
            // Bad separator after the international prefix
            '+33-(0)-644444444', '+33 (0)-644444444', '+33-(0) 644444444',
            // Trailing separator
            '06.44.44.44.44.'
        ];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$phone.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('United Kingdom phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'GB');

        // Valid samples
        var validSamples = [
            // National formats
            '01611234567', '0161 123 4567', '(0161) 123 4567', '0161-123-4567',
            // International formats
            '+44 161 123 4567', '+441611234567', '+44(0)161234567', '00 44 161 1234567', '(011) 44 161 234567', '0161-158-5587',
            // Extensions
            '0161 123 4567 ext. 123', '01611234567x123', '+44161234567x123', '+44 (0) 161 1234567 ext 123'
        ];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = [
            '012345678900', // Too many digits
            '1611234567',   // Missing trunk
            '012345678',    // Not enough digits
            '123 4567',     // Missing area code
            '061 123 4567'  // Invalid area code
        ];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$phone.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Morocco phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'MA');

        // Valid samples
        var validSamples = [
            // National formats
            '0644444444', '0610245896', '0630548564', '06 44 44 44 44', '06-44-44-44-44', '06.44.44.44.44', '06 44.44-44.44',
            '0528254856', '0535484541', '05 28 44 44 44', '05-28-44.44.44', '05.28.44.44.44', '05 28.44-44.44',
            // International formats
            '+212644444444', '+2126.44.44.44.44', '+212 6.44.44.44.44', '00212644444444', '002126.44.44.44.44', '00212 6.44.44.44.44',
            // Some times
            '+212(0)644444444', '+212 (0) 644444444'
        ];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = [
            '0625468961', '0512548632', '0542564896',   // Not a valid phone numbers
            '06444444444444',                           // Too many digits
            '6644444444',                               // Missing leading 0
            '06  44.44-44.44', '+212 (0)  644444444',   // Too much non-numeric characters
            '(0)644444444'                              // Bad parenthesis
        ];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$phone.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Pakistan phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'PK');

        // Valid samples
        var validSamples = ['03336527366'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }
    });

    it('Romania phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'RO');

        // Valid samples
        var validSamples = [
            '+40213-564-864', '+40213.564.864', '+40213 564 864', '0213-564-864',
            '0213564864', '0313564864',
            '0720512346', '0730512346', '0740512346', '0750512346', '+40750512346', '+40750.512.346',
            '0760512346', '0770512346', '0780512346'
        ];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = [
            '0213/564/864', // Invalid separator
            '0413564864',   // Invalid land line number (The valid one should be +402, +403 or inside country 02 - 03)
            '0790512346'    // Invalid mobile phone number (The valid one is 072xxxxxxx - 078xxxxxxx)
        ];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$phone.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Russia phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'RU');

        // Valid samples
        var validSamples = ['+7(911)976-91-04'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }
    });

    it('Slovakia phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'SK');

        // Valid samples
        var validSamples = [
            '00420123456789', '00420 123456789', '00420 123 456 789', '00 420 123 456 789',
            '+420123456789', '+420 123456789', '+420 123 456 789', '123456789', '123 456 789'
        ];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = [
            '420123456789', '420 123456789', '420 123 456 789', '00421123456789', '00421 123456789',
            '00421 123 456 789', '00 421 123 456 789', '+421123456789', '+421 123456789',
            '+421 123 456 789'
        ];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$phone.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });
});

describe('uri', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="uriForm">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="uri" data-bv-uri />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#uriForm').bootstrapValidator();

        this.bv   = $('#uriForm').data('bootstrapValidator');
        this.$uri = this.bv.getFieldElements('uri');
    });

    afterEach(function() {
        $('#uriForm').bootstrapValidator('destroy').remove();
    });

    var validGlobalURIs = [
        'http://foo.com/blah_blah',
        'http://foo.com/blah_blah',
        'http://foo.com/blah_blah/',
        'http://foo.com/blah_blah_(wikipedia)',
        'http://foo.com/blah_blah_(wikipedia)_(again)',
        'http://www.example.com/wpstyle/?p=364',
        'https://www.example.com/foo/?bar=baz&inga=42&quux',
        'http://✪df.ws/123',
        'http://userid:password@example.com:8080',
        'http://userid:password@example.com:8080/',
        'http://userid@example.com',
        'http://userid@example.com/',
        'http://userid@example.com:8080',
        'http://userid@example.com:8080/',
        'http://userid:password@example.com',
        'http://userid:password@example.com/',
        'http://142.42.1.1/',
        'http://142.42.1.1:8080/',
        'http://➡.ws/䨹',
        'http://⌘.ws',
        'http://⌘.ws/',
        'http://foo.com/blah_(wikipedia)#cite-1',
        'http://foo.com/blah_(wikipedia)_blah#cite-1',
        'http://foo.com/unicode_(✪)_in_parens',
        'http://foo.com/(something)?after=parens',
        'http://☺.damowmow.com/',
        'http://code.google.com/events/#&product=browser',
        'http://j.mp',
        'ftp://foo.bar/baz',
        'http://foo.bar/?q=Test%20URL-encoded%20stuff',
        'http://مثال.إختبار',
        'http://例子.测试',
        'http://उदाहरण.परीक्षा',
        "http://-.~_!$&'()*+,;=:%40:80%2f::::::@example.com",
        'http://1337.net',
        'http://a.b-c.de',
        'http://223.255.255.254'
    ];

    var invalidGlobalURIs = [
        'http://',
        'http://.',
        'http://..',
        'http://../',
        'http://?',
        'http://??',
        'http://??/',
        'http://#',
        'http://##',
        'http://##/',
        'http://foo.bar?q=Spaces should be encoded',
        '//',
        '//a',
        '///a',
        '///',
        'http:///a',
        'foo.com',
        'rdar://1234',
        'h://test',
        'http:// shouldfail.com',
        ':// should fail',
        'http://foo.bar/foo(bar)baz quux',
        'ftps://foo.bar/',
        'http://-error-.invalid/',
        'http://a.b--c.de/',
        'http://-a.b.co',
        'http://a.b-.co',
        'http://.www.foo.bar/',
        'http://www.foo.bar./',
        'http://.www.foo.bar./'
    ];

    var localURIs = [
        'http://intranetsite',
        'http://intranetsite/test',
        'http://intranetsite:80',
        'http://intranetsite:80/test',
        'http://user:pass@intranetsite',
        'http://user:pass@intranetsite/test',
        'http://user:pass@intranetsite:80',
        'http://user:pass@intranetsite:80/test',
        'http://10.1.1.0',
        'http://10.1.1.255',
        'http://10.1.1.1',
        'http://10.1.1.254',
        'http://127.0.0.1',
        'http://192.168.0.1',
        'http://0.0.0.0',
        'http://224.1.1.1',
        'http://1.1.1.1.1',
        'http://123.123.123',
        'http://3628126748'
    ];

    it('Valid URIs (allowLocal=false)', function() {
        var me = this;
        $.each(validGlobalURIs, function(index, uri) {
            me.bv.resetForm();
            me.$uri.val(uri);
            me.bv.validate();
            expect(me.bv.isValid()).toBeTruthy();
        });
    });

    it('Invalid URIs (allowLocal=false)', function() {
        var me = this;
        $.each(invalidGlobalURIs.concat(localURIs), function(index, uri) {
            me.bv.resetForm();
            me.$uri.val(uri);
            me.bv.validate();
            expect(me.bv.isValid()).toEqual(false);
        });
    });

    it('Valid URIs (allowLocal=true)', function() {
        var me = this;
        me.bv.updateOption('uri', 'uri', 'allowLocal', true);
        $.each(validGlobalURIs.concat(localURIs), function(index, uri) {
            me.bv.resetForm();
            me.$uri.val(uri);
            me.bv.validate();
            expect(me.bv.isValid()).toBeTruthy();
        });
    });

    it('Invalid URIs (allowLocal=true)', function() {
        var me = this;
        me.bv.updateOption('uri', 'uri', 'allowLocal', true);
        $.each(invalidGlobalURIs, function(index, uri) {
            me.bv.resetForm();
            me.$uri.val(uri);
            me.bv.validate();
            expect(me.bv.isValid()).toEqual(false);
        });
    });
});

describe('vat', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="vatForm">',
                '<div class="form-group">',
                    '<select class="form-control" name="country">',
                        '<option value="AT">Austria</option>',
                        '<option value="BE">Belgium</option>',
                        '<option value="BG">Bulgaria</option>',
                        '<option value="HR">Croatia</option>',
                        '<option value="CY">Cyprus</option>',
                        '<option value="CZ">Czech Republic</option>',
                        '<option value="DK">Denmark</option>',
                        '<option value="EE">Estonia</option>',
                        '<option value="FI">Finland</option>',
                        '<option value="FR">France</option>',
                        '<option value="DE">Germany</option>',
                        '<option value="GR">Greece</option>',
                        '<option value="HU">Hungary</option>',
                        '<option value="IE">Ireland</option>',
                        '<option value="IS">Iceland</option>',
                        '<option value="IT">Italy</option>',
                        '<option value="LV">Latvia</option>',
                        '<option value="LT">Lithuania</option>',
                        '<option value="LU">Luxembourg</option>',
                        '<option value="MT">Malta</option>',
                        '<option value="NL">Netherlands</option>',
                        '<option value="NO">Norway</option>',
                        '<option value="PL">Poland</option>',
                        '<option value="PT">Portugal</option>',
                        '<option value="RO">Romania</option>',
                        '<option value="RU">Russia</option>',
                        '<option value="RS">Serbia</option>',
                        '<option value="SK">Slovakia</option>',
                        '<option value="SI">Slovenia</option>',
                        '<option value="ES">Spain</option>',
                        '<option value="SE">Sweden</option>',
                        '<option value="CH">Switzerland</option>',
                        '<option value="GB">United Kingdom</option>',
                        '<option value="VE">Venezuela</option>',
                        '<option value="ZA">South Africa</option>',
                    '</select>',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" name="vat" data-bv-vat />',
                '</div>',
            '</form>',
        ].join('\n')).appendTo('body');

        $('#vatForm').bootstrapValidator();

        /**
         * @type {BootstrapValidator}
         */
        this.bv       = $('#vatForm').data('bootstrapValidator');
        this.$country = this.bv.getFieldElements('country');
        this.$vat     = this.bv.getFieldElements('vat');
    });

    afterEach(function() {
        $('#vatForm').bootstrapValidator('destroy').remove();
    });

    it('dynamic country', function() {
        this.$vat.attr('data-bv-vat-country', 'country');
        this.bv.destroy();
        this.bv = $('#vatForm').bootstrapValidator().data('bootstrapValidator');

        this.$country.val('AT');
        this.$vat.val('ATU13585627');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$country.val('BG');
        this.$vat.val('BE0428759497');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$country.val('BE');
        this.$vat.val('BE431150351');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

    it('Austrian VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'AT');

        // Valid samples
        var validSamples = ['ATU13585627', 'U13585627'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['ATU13585626', 'U13585626'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Belgian VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'BE');

        // Valid samples
        var validSamples = ['BE0428759497', '0428759497'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['BE431150351', '431150351'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Bulgarian VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'BG');

        // Valid samples
        var validSamples = ['BG175074752', 'BG7523169263', 'BG8032056031', 'BG7542011030', 'BG7111042925', '175074752', '7523169263', '8032056031'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['BG175074753', 'BG7552A10004', 'BG7111042922', '175074753', '7552A10004'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Cypriot VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'CY');

        // Valid samples
        var validSamples = ['CY10259033P', '10259033P'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['CY10259033Z', '10259033Z'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Czech Republic VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'CZ');

        // Valid samples
        var validSamples = ['CZ25123891', 'CZ7103192745', 'CZ991231123', 'CZ640903926', '25123891', '7103192745'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['CZ25123890', 'CZ1103492745', 'CZ590312123', '25123890', '1103492745'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('German VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'DE');

        // Valid samples
        var validSamples = ['DE136695976', '136695976'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['DE136695978', '136695978'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Danish VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'DK');

        // Valid samples
        var validSamples = ['DK13585628', '13585628'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['DK13585627', '13585627'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Estonian VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'EE');

        // Valid samples
        var validSamples = ['EE100931558', 'EE100594102', '100931558', '100594102'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['EE100594103', '100594103'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Spanish VAT number (NIF)', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'ES');

        // Valid samples
        var validSamples = ['ES54362315K', 'ESX2482300W', 'ESX5253868R', 'ESM1234567L', 'ESJ99216582', 'ESB58378431', 'ESB64717838', '54362315K', 'X2482300W', 'X5253868R', 'M1234567L', 'J99216582'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['ES54362315Z', 'ESX2482300A', 'ESJ99216583', '54362315Z', 'X2482300A'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Finnish VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'FI');

        // Valid samples
        var validSamples = ['FI20774740', '20774740'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['FI20774741', '20774741'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('French VAT number (TVA)', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'FR');

        // Valid samples
        var validSamples = ['FR40303265045', 'FR23334175221', 'FRK7399859412', 'FR4Z123456782', '40303265045', '23334175221', 'K7399859412'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['FR84323140391', '84323140391'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('United Kingdom VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'GB');

        // Valid samples
        var validSamples = ['GB980780684', '980780684'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['GB802311781', '802311781'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Greek VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'GR');

        // Valid samples
        var validSamples = ['GR023456780', 'EL094259216', '023456780', '094259216'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['GR123456781', '123456781'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Hungarian VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'HU');

        // Valid samples
        var validSamples = ['HU12892312', '12892312'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['HU12892313', '12892313'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Croatian VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'HR');

        // Valid samples
        var validSamples = ['HR33392005961', '33392005961'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['HR33392005962', '33392005962'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Irish VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'IE');

        // Valid samples
        var validSamples = ['IE6433435F', 'IE6433435OA', 'IE8D79739I', '6433435F', '6433435OA', '8D79739I'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['IE8D79738J', '8D79738J'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Iceland VAT (VSK) number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'IS');

        // Valid samples
        var validSamples = ['IS11111', 'IS111111', '11111', '111111'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['IS1234567', 'IS123456ABC', '1234567', '123456ABC'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Italian VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'IT');

        // Valid samples
        var validSamples = ['IT00743110157', '00743110157'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['IT00743110158', '00743110158'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Lithuanian VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'LT');

        // Valid samples
        var validSamples = ['LT119511515', 'LT100001919017', 'LT100004801610', '119511515', '100001919017', '100004801610'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['LT100001919018', '100001919018'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Luxembourg VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'LU');

        // Valid samples
        var validSamples = ['LU15027442', '15027442'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['LU15027443', '15027443'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Latvian VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'LV');

        // Valid samples
        var validSamples = ['LV40003521600', 'LV16117519997', '40003521600', '16117519997'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['LV40003521601', 'LV16137519997', '40003521601', '16137519997'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Maltese VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'MT');

        // Valid samples
        var validSamples = ['MT11679112', '11679112'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['MT11679113', '11679113'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Dutch VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'NL');

        // Valid samples
        var validSamples = ['NL004495445B01', '004495445B01'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['NL123456789B90', '123456789B90'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Polish VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'PL');

        // Valid samples
        var validSamples = ['PL8567346215', '8567346215'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['PL8567346216', '8567346216'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Portuguese VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'PT');

        // Valid samples
        var validSamples = ['PT501964843', '501964843'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['PT501964842', '501964842'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Romanian VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'RO');

        // Valid samples
        var validSamples = ['RO18547290', '18547290'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['RO18547291', '18547291'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Russian VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'RU');

        // Valid samples
        var validSamples = ['RU7805145876', 'RU781300557475', '7805145876', '781300557475'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['RU7805145877', 'RU781300557474', '7805145877', '781300557474'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Swedish VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'SE');

        // Valid samples
        var validSamples = ['SE123456789701', '123456789701'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['SE123456789101', '123456789101'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Slovenian VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'SI');

        // Valid samples
        var validSamples = ['SI50223054', '50223054'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['SI50223055', '50223055'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Slovak VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'SK');

        // Valid samples
        var validSamples = ['SK2022749619', '2022749619'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['SK2022749618', '2022749618'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('South African VAT number', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'ZA');

        // Valid samples
        var validSamples = ['ZA4012345678', '4012345678'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['ZA40123456789', 'ZA0123456789', '40123456789', '0123456789'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Venezuelan VAT number (RIF)', function() {
        this.bv.updateOption('vat', 'vat', 'country', 'VE');

        // Valid samples
        var validSamples = ['VEJ309272292', 'VEV242818101', 'VEJ000126518', 'VEJ000458324', 'J309272292', 'V242818101', 'J000126518', 'J000458324'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$vat.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['VEJ309272293', 'VEV242818100', 'J000126519', 'J000458323'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$vat.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });
});

function getCountryCode(value, validator, $field) {
    $('#msg').html('getCountryCode() called');
    return validator.getFieldElements('country').val();
};

TestSuite = $.extend({}, TestSuite, {
    ZipCode: {
        getCountryCode: function(value, validator, $field) {
            $('#msg').html('TestSuite.ZipCode.getCountryCode() called');
            return validator.getFieldElements('country').val();
        }
    }
});

describe('zipCode', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="zipCodeForm">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<label class="col-md-3 control-label">Country:</label>',
                    '<div class="col-md-2">',
                        '<select class="form-control" name="country">',
                            '<option value="">Select a country</option>',
                            '<option value="US">United States</option>',
                            '<option value="CA">Canada</option>',
                            '<option value="CZ">Czech Republic</option>',
                            '<option value="DK">Denmark</option>',
                            '<option value="IT">Italy</option>',
                            '<option value="NL">Netherlands</option>',
                            '<option value="SE">Sweden</option>',
                            '<option value="SK">Slovakia</option>',
                            '<option value="GB">United Kingdom</option>',
                        '</select>',
                    '</div>',
                '</div>',
                '<div class="form-group">',
                    '<label class="col-md-3 control-label">Zipcode</label>',
                    '<div class="col-md-2">',
                        '<input type="text" class="form-control" name="zc" data-bv-zipcode data-bv-zipcode-country="US" />',
                    '</div>',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#zipCodeForm').bootstrapValidator();

        /**
         * @type {BootstrapValidator}
         */
        this.bv       = $('#zipCodeForm').data('bootstrapValidator');

        this.$country = this.bv.getFieldElements('country');
        this.$zipCode = this.bv.getFieldElements('zc');
    });

    afterEach(function() {
        $('#zipCodeForm').bootstrapValidator('destroy').remove();
    });

    it('country code updateOption()', function() {
        // Check IT postal code
        this.bv.updateOption('zc', 'zipCode', 'country', 'IT');
        this.$zipCode.val('1234');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$zipCode.val('IT-12345');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        // Check United Kingdom postal code
        this.bv.updateOption('zc', 'zipCode', 'country', 'GB');
        var validUkSamples = ['EC1A 1BB', 'W1A 1HQ', 'M1 1AA', 'B33 8TH', 'CR2 6XH', 'DN55 1PT', 'AI-2640', 'ASCN 1ZZ', 'GIR 0AA'];

        for (var i in validUkSamples) {
            this.bv.resetForm();
            this.$zipCode.val(validUkSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }
    });

    it('country code other field declarative', function() {
        this.$zipCode.attr('data-bv-zipcode-country', 'country');

        // Need to destroy the plugin instance ...
        $('#zipCodeForm').bootstrapValidator('destroy');

        // ... and re-create it
        this.bv = $('#zipCodeForm').bootstrapValidator().data('bootstrapValidator');
        this.$country.val('IT');

        this.bv.resetForm();
        this.$zipCode.val('1234');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$zipCode.val('I-12345');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('country code callback declarative function', function() {
        this.$zipCode.attr('data-bv-zipcode-country', 'getCountryCode');
        $('#zipCodeForm').bootstrapValidator('destroy');
        this.bv = $('#zipCodeForm').bootstrapValidator().data('bootstrapValidator');
        this.$country.val('NL');
        this.$zipCode.val('0123');
        this.bv.validate();
        expect($('#msg').html()).toEqual('getCountryCode() called');
        expect(this.bv.isValid()).toEqual(false);
    });

    it('country code callback declarative function()', function() {
        this.$zipCode.attr('data-bv-zipcode-country', 'getCountryCode()');
        $('#zipCodeForm').bootstrapValidator('destroy');
        this.bv = $('#zipCodeForm').bootstrapValidator().data('bootstrapValidator');
        this.$country.val('NL');
        this.$zipCode.val('1234 ab');
        this.bv.validate();
        expect($('#msg').html()).toEqual('getCountryCode() called');
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('country code callback declarative A.B.C', function() {
        this.$zipCode.attr('data-bv-zipcode-country', 'TestSuite.ZipCode.getCountryCode');
        $('#zipCodeForm').bootstrapValidator('destroy');
        this.bv = $('#zipCodeForm').bootstrapValidator().data('bootstrapValidator');
        this.$country.val('DK');
        this.$zipCode.val('DK 123');
        this.bv.validate();
        expect($('#msg').html()).toEqual('TestSuite.ZipCode.getCountryCode() called');
        expect(this.bv.isValid()).toEqual(false);
    });

    it('country code callback declarative A.B.C()', function() {
        this.$zipCode.attr('data-bv-zipcode-country', 'TestSuite.ZipCode.getCountryCode()');
        $('#zipCodeForm').bootstrapValidator('destroy');
        this.bv = $('#zipCodeForm').bootstrapValidator().data('bootstrapValidator');
        this.$country.val('DK');
        this.$zipCode.val('DK-1234');
        this.bv.validate();
        expect($('#msg').html()).toEqual('TestSuite.ZipCode.getCountryCode() called');
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('country code callback programmatically', function() {
        this.$zipCode.removeAttr('data-bv-zipcode-country');
        $('#zipCodeForm').bootstrapValidator('destroy');
        this.bv = $('#zipCodeForm')
                        .bootstrapValidator({
                            fields: {
                                zc: {
                                    validators: {
                                        zipCode: {
                                            country: function(value, validator, $field) {
                                                return getCountryCode(value, validator, $field);
                                            }
                                        }
                                    }
                                }
                            }
                        })
                        .data('bootstrapValidator');
        this.$country.val('SE');

        this.bv.resetForm();
        this.$zipCode.val('S-567 8');
        this.bv.validate();
        expect($('#msg').html()).toEqual('getCountryCode() called');
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$zipCode.val('S-12345');
        this.bv.validate();
        expect($('#msg').html()).toEqual('getCountryCode() called');
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('not supported country code', function() {
        this.$zipCode.attr('data-bv-zipcode-country', 'NOT_SUPPORTED');

        $('#zipCodeForm').bootstrapValidator('destroy');

        this.bv = $('#zipCodeForm').bootstrapValidator().data('bootstrapValidator');

        this.bv.resetForm();
        this.$zipCode.val('1234');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages(this.$zipCode, 'zipCode')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.zipCode.countryNotSupported, 'NOT_SUPPORTED'));
    });

    it('US zipcode', function() {
        this.$zipCode.val('12345');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$zipCode.val('123');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

    it('Czech Republic postal code', function() {
        this.bv.updateOption('zc', 'zipCode', 'country', 'CZ');

        // Valid samples
        var validSamples = ['12345', '123 45'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$zipCode.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['12 345', '123456', '1 2345', '1234 5', '12 3 45'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$zipCode.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Slovakia postal code', function() {
        this.bv.updateOption('zc', 'zipCode', 'country', 'SK');

        // Valid samples
        var validSamples = ['12345', '123 45'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$zipCode.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = ['12 345', '123456', '1 2345', '1234 5', '12 3 45'];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$zipCode.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });
});
