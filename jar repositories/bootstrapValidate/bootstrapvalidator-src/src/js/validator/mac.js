(function($) {
    $.fn.bootstrapValidator.i18n.mac = $.extend($.fn.bootstrapValidator.i18n.mac || {}, {
        'default': 'Please enter a valid MAC address'
    });

    $.fn.bootstrapValidator.validators.mac = {
        /**
         * Return true if the input value is a MAC address.
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

            return /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(value);
        }
    };
}(window.jQuery));
