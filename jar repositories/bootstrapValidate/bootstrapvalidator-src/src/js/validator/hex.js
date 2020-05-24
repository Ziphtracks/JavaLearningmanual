(function($) {
    $.fn.bootstrapValidator.i18n.hex = $.extend($.fn.bootstrapValidator.i18n.hex || {}, {
        'default': 'Please enter a valid hexadecimal number'
    });

    $.fn.bootstrapValidator.validators.hex = {
        /**
         * Return true if and only if the input value is a valid hexadecimal number
         *
         * @param {BootstrapValidator} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = $field.val();
            if (value === '') {
                return true;
            }

            return /^[0-9a-fA-F]+$/.test(value);
        }
    };
}(window.jQuery));
