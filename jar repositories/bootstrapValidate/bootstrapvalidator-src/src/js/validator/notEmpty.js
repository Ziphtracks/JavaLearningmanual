(function($) {
    $.fn.bootstrapValidator.i18n.notEmpty = $.extend($.fn.bootstrapValidator.i18n.notEmpty || {}, {
        'default': 'Please enter a value'
    });

    $.fn.bootstrapValidator.validators.notEmpty = {
        enableByHtml5: function($field) {
            var required = $field.attr('required') + '';
            return ('required' === required || 'true' === required);
        },

        /**
         * Check if input value is empty or not
         *
         * @param {BootstrapValidator} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var type = $field.attr('type');
            if ('radio' === type || 'checkbox' === type) {
                return validator
                            .getFieldElements($field.attr('data-bv-field'))
                            .filter(':checked')
                            .length > 0;
            }

            if ('number' === type && $field.get(0).validity && $field.get(0).validity.badInput === true) {
                return true;
            }

            return $.trim($field.val()) !== '';
        }
    };
}(window.jQuery));
