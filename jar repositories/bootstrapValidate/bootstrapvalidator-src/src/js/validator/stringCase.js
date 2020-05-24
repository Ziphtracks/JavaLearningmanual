(function($) {
    $.fn.bootstrapValidator.i18n.stringCase = $.extend($.fn.bootstrapValidator.i18n.stringCase || {}, {
        'default': 'Please enter only lowercase characters',
        upper: 'Please enter only uppercase characters'
    });

    $.fn.bootstrapValidator.validators.stringCase = {
        html5Attributes: {
            message: 'message',
            'case': 'case'
        },

        /**
         * Check if a string is a lower or upper case one
         *
         * @param {BootstrapValidator} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - case: Can be 'lower' (default) or 'upper'
         * @returns {Object}
         */
        validate: function(validator, $field, options) {
            var value = $field.val();
            if (value === '') {
                return true;
            }

            var stringCase = (options['case'] || 'lower').toLowerCase();
            return {
                valid: ('upper' === stringCase) ? value === value.toUpperCase() : value === value.toLowerCase(),
                message: options.message || (('upper' === stringCase) ? $.fn.bootstrapValidator.i18n.stringCase.upper : $.fn.bootstrapValidator.i18n.stringCase['default'])
            };
        }
    };
}(window.jQuery));
