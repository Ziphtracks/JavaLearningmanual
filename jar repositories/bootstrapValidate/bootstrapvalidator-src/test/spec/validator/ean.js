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
