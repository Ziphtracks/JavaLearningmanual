(function($) {
    $.fn.bootstrapValidator.i18n.base64 = $.extend($.fn.bootstrapValidator.i18n.base64 || {}, {
        'default': 'Please enter a valid base 64 encoded'
    });

    $.fn.bootstrapValidator.validators.base64 = {
        /**
         * Return true if the input value is a base 64 encoded string.
         *
         * @param {BootstrapValidator} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = $field.val();
            if (value === '') {
                return true;
            }

            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(value);
        }
    };
}(window.jQuery));
