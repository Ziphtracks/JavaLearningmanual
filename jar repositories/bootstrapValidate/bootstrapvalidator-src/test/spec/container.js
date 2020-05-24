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
