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
