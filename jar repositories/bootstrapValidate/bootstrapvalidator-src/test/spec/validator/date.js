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
