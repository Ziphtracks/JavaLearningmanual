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
