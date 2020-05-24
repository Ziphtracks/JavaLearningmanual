function greaterThanCompare() {
    var compareTo = $('#greaterThanForm').find('[name="minAge"]').val();
    $('#msg').html('greaterThanCompare() called; compare to ' + compareTo);
    return compareTo;
};

TestSuite = $.extend({}, TestSuite, {
    greaterThan: {
        compareTo: function(value, validator, $field) {
            var compareTo = $('#greaterThanForm').find('[name="minAge"]').val();
            $('#msg').html('TestSuite.greaterThan.compareTo() called; compare to ' + compareTo);
            return compareTo;
        }
    }
});

describe('greaterThan', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="greaterThanForm">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="minAge" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" name="age" data-bv-greaterthan data-bv-greaterthan-value="18" />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#greaterThanForm').bootstrapValidator();

        this.bv      = $('#greaterThanForm').data('bootstrapValidator');
        this.$minAge = this.bv.getFieldElements('minAge');
        this.$age    = this.bv.getFieldElements('age');
    });

    afterEach(function() {
        $('#greaterThanForm').bootstrapValidator('destroy').remove();
    });

    it('not a number', function() {
        this.$age.val('20abc');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

    it('compare to value', function() {
        this.$age.val(10);
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$age.val(20);
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('compare to other field', function() {
        this.$age.attr('data-bv-greaterthan-value', 'minAge');
        this.bv.destroy();
        this.bv = $('#greaterThanForm').bootstrapValidator().data('bootstrapValidator');

        this.$minAge.val(10);
        this.$age.val(20);
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$minAge.val(20);
        this.$age.val(10);
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'greaterThan')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.greaterThan['default'], this.$minAge.val()));
    });

    it('compare to return value of a function', function() {
        this.$age.attr('data-bv-greaterthan-value', 'greaterThanCompare');
        this.bv.destroy();
        this.bv = $('#greaterThanForm').bootstrapValidator().data('bootstrapValidator');

        this.$minAge.val(20);
        this.$age.val(18);
        this.bv.validate();
        expect($('#msg').html()).toEqual('greaterThanCompare() called; compare to 20');
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'greaterThan')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.greaterThan['default'], this.$minAge.val()));

        this.bv.resetForm();
        this.$minAge.val(18);
        this.$age.val(20);
        this.bv.validate();
        expect($('#msg').html()).toEqual('greaterThanCompare() called; compare to 18');
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('compare to return value of a namespace function', function() {
        this.$age.attr('data-bv-greaterthan-value', 'TestSuite.greaterThan.compareTo');
        this.bv.destroy();
        this.bv = $('#greaterThanForm').bootstrapValidator().data('bootstrapValidator');

        this.$minAge.val(20);
        this.$age.val(18);
        this.bv.validate();
        expect($('#msg').html()).toEqual('TestSuite.greaterThan.compareTo() called; compare to 20');
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'greaterThan')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.greaterThan['default'], this.$minAge.val()));

        this.bv.resetForm();
        this.$minAge.val(18);
        this.$age.val(20);
        this.bv.validate();
        expect($('#msg').html()).toEqual('TestSuite.greaterThan.compareTo() called; compare to 18');
        expect(this.bv.isValid()).toBeTruthy();
    });
});
