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
