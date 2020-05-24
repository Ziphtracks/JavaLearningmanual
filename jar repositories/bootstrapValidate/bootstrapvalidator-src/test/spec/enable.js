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
