function lessThanCompare() {
    var compareTo = $('#lessThanForm').find('[name="maxAge"]').val();
    $('#msg').html('lessThanCompare() called; compare to ' + compareTo);
    return compareTo;
};

TestSuite = $.extend({}, TestSuite, {
    lessThan: {
        compareTo: function(value, validator, $field) {
            var compareTo = $('#lessThanForm').find('[name="maxAge"]').val();
            $('#msg').html('TestSuite.lessThan.compareTo() called; compare to ' + compareTo);
            return compareTo;
        }
    }
});

describe('lessThan', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="lessThanForm">',
                '<div id="msg"></div>',
                '<div class="form-group">',
                    '<input type="text" name="maxAge" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" name="age" data-bv-lessthan data-bv-lessthan-value="100" />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#lessThanForm').bootstrapValidator();

        this.bv      = $('#lessThanForm').data('bootstrapValidator');
        this.$maxAge = this.bv.getFieldElements('maxAge');
        this.$age    = this.bv.getFieldElements('age');
    });

    afterEach(function() {
        $('#lessThanForm').bootstrapValidator('destroy').remove();
    });

    it('not a number', function() {
        this.$age.val('20abc');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

    it('compare to value', function() {
        this.$age.val(120);
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$age.val(30);
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('compare to other field', function() {
        this.$age.attr('data-bv-lessthan-value', 'maxAge');
        this.bv.destroy();
        this.bv = $('#lessThanForm').bootstrapValidator().data('bootstrapValidator');

        this.$maxAge.val(40);
        this.$age.val(20);
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$maxAge.val(20);
        this.$age.val(30);
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'lessThan')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.lessThan['default'], this.$maxAge.val()));
    });

    it('compare to return value of a function', function() {
        this.$age.attr('data-bv-lessthan-value', 'lessThanCompare');
        this.bv.destroy();
        this.bv = $('#lessThanForm').bootstrapValidator().data('bootstrapValidator');

        this.$maxAge.val(50);
        this.$age.val(60);
        this.bv.validate();
        expect($('#msg').html()).toEqual('lessThanCompare() called; compare to 50');
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'lessThan')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.lessThan['default'], this.$maxAge.val()));

        this.bv.resetForm();
        this.$maxAge.val(60);
        this.$age.val(30);
        this.bv.validate();
        expect($('#msg').html()).toEqual('lessThanCompare() called; compare to 60');
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('compare to return value of a namespace function', function() {
        this.$age.attr('data-bv-lessthan-value', 'TestSuite.lessThan.compareTo');
        this.bv.destroy();
        this.bv = $('#lessThanForm').bootstrapValidator().data('bootstrapValidator');

        this.$maxAge.val(50);
        this.$age.val(60);
        this.bv.validate();
        expect($('#msg').html()).toEqual('TestSuite.lessThan.compareTo() called; compare to 50');
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'lessThan')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.lessThan['default'], this.$maxAge.val()));

        this.bv.resetForm();
        this.$maxAge.val(60);
        this.$age.val(30);
        this.bv.validate();
        expect($('#msg').html()).toEqual('TestSuite.lessThan.compareTo() called; compare to 60');
        expect(this.bv.isValid()).toBeTruthy();
    });
});
