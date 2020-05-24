function betweenCompareMin() {
    var compareTo = $('#betweenForm').find('[name="minAge"]').val();
    $('#msgMin').html('betweenCompareMin() called; compare to ' + compareTo);
    return compareTo;
};

function betweenCompareMax() {
    var compareTo = $('#betweenForm').find('[name="maxAge"]').val();
    $('#msgMax').html('betweenCompareMax() called; compare to ' + compareTo);
    return compareTo;
};

TestSuite = $.extend({}, TestSuite, {
    between: {
        compareToMin: function(value, validator, $field) {
            var compareTo = $('#betweenForm').find('[name="minAge"]').val();
            $('#msgMin').html('TestSuite.between.compareToMin() called; compare to ' + compareTo);
            return compareTo;
        },

        compareToMax: function(value, validator, $field) {
            var compareTo = $('#betweenForm').find('[name="maxAge"]').val();
            $('#msgMax').html('TestSuite.between.compareToMax() called; compare to ' + compareTo);
            return compareTo;
        }
    }
});

describe('between', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="betweenForm">',
                '<div id="msgMin"></div>',
                '<div id="msgMax"></div>',
                '<div class="form-group">',
                    '<input type="text" name="minAge" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" name="maxAge" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" name="age" data-bv-between data-bv-between-min="18" data-bv-between-max="100" />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#betweenForm').bootstrapValidator();

        this.bv      = $('#betweenForm').data('bootstrapValidator');
        this.$minAge = this.bv.getFieldElements('minAge');
        this.$maxAge = this.bv.getFieldElements('maxAge');
        this.$age    = this.bv.getFieldElements('age');
    });

    afterEach(function() {
        $('#betweenForm').bootstrapValidator('destroy').remove();
    });

    it('not a number', function() {
        this.$age.val('50abc');
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

    it('compare to value', function() {
        this.$age.val(10);
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$age.val(120);
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$age.val(30);
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('compare to other field', function() {
        this.$age.attr('data-bv-between-min', 'minAge')
                 .attr('data-bv-between-max', 'maxAge');
        this.bv.destroy();
        this.bv = $('#betweenForm').bootstrapValidator().data('bootstrapValidator');

        this.$minAge.val(2);
        this.$maxAge.val(10);
        this.$age.val(5);
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$minAge.val(20);
        this.$maxAge.val(40);
        this.$age.val(50);
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'between')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.between['default'], [this.$minAge.val(), this.$maxAge.val()]));
    });

    it('compare to return value of a function', function() {
        this.$age.attr('data-bv-between-min', 'betweenCompareMin')
                 .attr('data-bv-between-max', 'betweenCompareMax');
        this.bv.destroy();
        this.bv = $('#betweenForm').bootstrapValidator().data('bootstrapValidator');

        this.$minAge.val(20);
        this.$maxAge.val(30);
        this.$age.val(18);
        this.bv.validate();
        expect($('#msgMin').html()).toEqual('betweenCompareMin() called; compare to 20');
        expect($('#msgMax').html()).toEqual('betweenCompareMax() called; compare to 30');
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'between')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.between['default'], [this.$minAge.val(), this.$maxAge.val()]));

        this.bv.resetForm();
        this.$minAge.val(2);
        this.$maxAge.val(10);
        this.$age.val(6);
        this.bv.validate();
        expect($('#msgMin').html()).toEqual('betweenCompareMin() called; compare to 2');
        expect($('#msgMax').html()).toEqual('betweenCompareMax() called; compare to 10');
        expect(this.bv.isValid()).toBeTruthy();
    });

    it('compare to return value of a namespace function', function() {
        this.$age.attr('data-bv-between-min', 'TestSuite.between.compareToMin')
                 .attr('data-bv-between-max', 'TestSuite.between.compareToMax');
        this.bv.destroy();
        this.bv = $('#betweenForm').bootstrapValidator().data('bootstrapValidator');

        this.$minAge.val(20);
        this.$maxAge.val(30);
        this.$age.val(40);
        this.bv.validate();
        expect($('#msgMin').html()).toEqual('TestSuite.between.compareToMin() called; compare to 20');
        expect($('#msgMax').html()).toEqual('TestSuite.between.compareToMax() called; compare to 30');
        expect(this.bv.isValid()).toEqual(false);
        expect(this.bv.getMessages('age', 'between')[0]).toEqual($.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.between['default'], [this.$minAge.val(), this.$maxAge.val()]));

        this.bv.resetForm();
        this.$minAge.val(2);
        this.$maxAge.val(10);
        this.$age.val(5);
        this.bv.validate();
        expect($('#msgMin').html()).toEqual('TestSuite.between.compareToMin() called; compare to 2');
        expect($('#msgMax').html()).toEqual('TestSuite.between.compareToMax() called; compare to 10');
        expect(this.bv.isValid()).toBeTruthy();
    });
});
