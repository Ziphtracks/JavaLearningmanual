(function($) {
    $.fn.bootstrapValidator.i18n.between = $.extend($.fn.bootstrapValidator.i18n.between || {}, {
        'default': 'Please enter a value between %s and %s',
        notInclusive: 'Please enter a value between %s and %s strictly'
    });

    $.fn.bootstrapValidator.validators.between = {
        html5Attributes: {
            message: 'message',
            min: 'min',
            max: 'max',
            inclusive: 'inclusive'
        },

        enableByHtml5: function($field) {
            if ('range' === $field.attr('type')) {
                return {
                    min: $field.attr('min'),
                    max: $field.attr('max')
                };
            }

            return false;
        },

        /**
         * Return true if the input value is between (strictly or not) two given numbers
         *
         * @param {BootstrapValidator} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - min
         * - max
         *
         * The min, max keys define the number which the field value compares to. min, max can be
         *      - A number
         *      - Name of field which its value defines the number
         *      - Name of callback function that returns the number
         *      - A callback function that returns the number
         *
         * - inclusive [optional]: Can be true or false. Default is true
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = $field.val();
            if (value === '') {
                return true;
            }
            if (!$.isNumeric(value)) {
                return false;
            }

            var min = $.isNumeric(options.min) ? options.min : validator.getDynamicOption($field, options.min),
                max = $.isNumeric(options.max) ? options.max : validator.getDynamicOption($field, options.max);
            value = parseFloat(value);
			return (options.inclusive === true || options.inclusive === undefined)
                    ? {
                        valid: value >= min && value <= max,
                        message: $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.between['default'], [min, max])
                    }
                    : {
                        valid: value > min  && value <  max,
                        message: $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.between.notInclusive, [min, max])
                    };
        }
    };
}(window.jQuery));
