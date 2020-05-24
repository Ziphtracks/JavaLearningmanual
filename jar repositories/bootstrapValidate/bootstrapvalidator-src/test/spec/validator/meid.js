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
