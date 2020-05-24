(function($) {
    $.fn.bootstrapValidator.i18n.stringLength = $.extend($.fn.bootstrapValidator.i18n.stringLength || {}, {
        'default': 'Please enter a value with valid length',
        less: 'Please enter less than %s characters',
        more: 'Please enter more than %s characters',
        between: 'Please enter value between %s and %s characters long'
    });

    $.fn.bootstrapValidator.validators.stringLength = {
        html5Attributes: {
            message: 'message',
            min: 'min',
            max: 'max'
        },

        enableByHtml5: function($field) {
            var options   = {},
                maxLength = $field.attr('maxlength'),
                minLength = $field.attr('minlength');
            if (maxLength) {
                options.max = parseInt(maxLength, 10);
            }
            if (minLength) {
                options.min = parseInt(minLength, 10);
            }

            return $.isEmptyObject(options) ? false : options;
        },

        /**
         * Check if the length of element value is less or more than given number
         *
         * @param {BootstrapValidator} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of following keys:
         * - min
         * - max
         * At least one of two keys is required
         * The min, max keys define the number which the field value compares to. min, max can be
         *      - A number
         *      - Name of field which its value defines the number
         *      - Name of callback function that returns the number
         *      - A callback function that returns the number
         *
         * - message: The invalid message
         * @returns {Object}
         */
        validate: function(validator, $field, options) {
            var value = $field.val();
            if (value === '') {
                return true;
            }

            var min     = $.isNumeric(options.min) ? options.min : validator.getDynamicOption($field, options.min),
                max     = $.isNumeric(options.max) ? options.max : validator.getDynamicOption($field, options.max),
                length  = value.length,
                isValid = true,
                message = options.message || $.fn.bootstrapValidator.i18n.stringLength['default'];

            if ((min && length < parseInt(min, 10)) || (max && length > parseInt(max, 10))) {
                isValid = false;
            }

            switch (true) {
                case (!!min && !!max):
                    message = $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.stringLength.between, [parseInt(min, 10), parseInt(max, 10)]);
                    break;

                case (!!min):
                    message = $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.stringLength.more, parseInt(min, 10));
                    break;

                case (!!max):
                    message = $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.stringLength.less, parseInt(max, 10));
                    break;

                default:
                    break;
            }

            return { valid: isValid, message: message };
        }
    };
}(window.jQuery));
