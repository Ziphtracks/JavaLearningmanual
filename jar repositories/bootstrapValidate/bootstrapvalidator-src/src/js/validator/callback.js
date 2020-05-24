(function($) {
    $.fn.bootstrapValidator.i18n.callback = $.extend($.fn.bootstrapValidator.i18n.callback || {}, {
        'default': 'Please enter a valid value'
    });

    $.fn.bootstrapValidator.validators.callback = {
        html5Attributes: {
            message: 'message',
            callback: 'callback'
        },

        /**
         * Return result from the callback method
         *
         * @param {BootstrapValidator} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - callback: The callback method that passes 2 parameters:
         *      callback: function(fieldValue, validator, $field) {
         *          // fieldValue is the value of field
         *          // validator is instance of BootstrapValidator
         *          // $field is the field element
         *      }
         * - message: The invalid message
         * @returns {Deferred}
         */
        validate: function(validator, $field, options) {
            var value  = $field.val(),
                dfd    = new $.Deferred(),
                result = { valid: true };

            if (options.callback) {
                var response = $.fn.bootstrapValidator.helpers.call(options.callback, [value, validator, $field]);
                result = ('boolean' === typeof response) ? { valid: response } :  response;
            }

            dfd.resolve($field, 'callback', result);
            return dfd;
        }
    };
}(window.jQuery));
