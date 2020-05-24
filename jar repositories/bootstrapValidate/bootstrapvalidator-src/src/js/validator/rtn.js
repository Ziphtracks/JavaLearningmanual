(function($) {
    $.fn.bootstrapValidator.i18n.rtn = $.extend($.fn.bootstrapValidator.i18n.rtn || {}, {
        'default': 'Please enter a valid RTN number'
    });

    $.fn.bootstrapValidator.validators.rtn = {
        /**
         * Validate a RTN (Routing transit number)
         * Examples:
         * - Valid: 021200025, 789456124
         *
         * @see http://en.wikipedia.org/wiki/Routing_transit_number
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

            if (!/^\d{9}$/.test(value)) {
                return false;
            }

            var sum = 0;
            for (var i = 0; i < value.length; i += 3) {
                sum += parseInt(value.charAt(i),     10) * 3
                    +  parseInt(value.charAt(i + 1), 10) * 7
                    +  parseInt(value.charAt(i + 2), 10);
            }
            return (sum !== 0 && sum % 10 === 0);
        }
    };
}(window.jQuery));
