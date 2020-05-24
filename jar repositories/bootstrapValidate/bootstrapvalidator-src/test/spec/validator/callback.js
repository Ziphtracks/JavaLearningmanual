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
