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
