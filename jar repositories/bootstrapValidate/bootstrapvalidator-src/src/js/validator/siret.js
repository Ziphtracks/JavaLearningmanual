(function($) {
    $.fn.bootstrapValidator.i18n.siret = $.extend($.fn.bootstrapValidator.i18n.siret || {}, {
        'default': 'Please enter a valid SIRET number'
    });

	$.fn.bootstrapValidator.validators.siret = {
        /**
         * Check if a string is a siret number
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

			var sum    = 0,
                length = value.length,
                tmp;
			for (var i = 0; i < length; i++) {
                tmp = parseInt(value.charAt(i), 10);
				if ((i % 2) === 0) {
					tmp = tmp * 2;
					if (tmp > 9) {
						tmp -= 9;
					}
				}
				sum += tmp;
			}
			return (sum % 10 === 0);
		}
	};
}(window.jQuery));
