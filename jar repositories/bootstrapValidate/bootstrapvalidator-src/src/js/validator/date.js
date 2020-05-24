(function($) {
    $.fn.bootstrapValidator.i18n.date = $.extend($.fn.bootstrapValidator.i18n.date || {}, {
        'default': 'Please enter a valid date'
    });

    $.fn.bootstrapValidator.validators.date = {
        html5Attributes: {
            message: 'message',
            format: 'format',
            separator: 'separator'
        },

        /**
         * Return true if the input value is valid date
         *
         * @param {BootstrapValidator} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * - separator: Use to separate the date, month, and year.
         * By default, it is /
         * - format: The date format. Default is MM/DD/YYYY
         * The format can be:
         *
         * i) date: Consist of DD, MM, YYYY parts which are separated by the separator option
         * ii) date and time:
         * The time can consist of h, m, s parts which are separated by :
         * ii) date, time and A (indicating AM or PM)
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = $field.val();
            if (value === '') {
                return true;
            }

            options.format = options.format || 'MM/DD/YYYY';

            // #683: Force the format to YYYY-MM-DD as the default browser behaviour when using type="date" attribute
            if ($field.attr('type') === 'date') {
                options.format = 'YYYY-MM-DD';
            }

            var formats    = options.format.split(' '),
                dateFormat = formats[0],
                timeFormat = (formats.length > 1) ? formats[1] : null,
                amOrPm     = (formats.length > 2) ? formats[2] : null,
                sections   = value.split(' '),
                date       = sections[0],
                time       = (sections.length > 1) ? sections[1] : null;

            if (formats.length !== sections.length) {
                return false;
            }

            // Determine the separator
            var separator = options.separator;
            if (!separator) {
                separator = (date.indexOf('/') !== -1) ? '/' : ((date.indexOf('-') !== -1) ? '-' : null);
            }
            if (separator === null || date.indexOf(separator) === -1) {
                return false;
            }

            // Determine the date
            date       = date.split(separator);
            dateFormat = dateFormat.split(separator);
            if (date.length !== dateFormat.length) {
                return false;
            }

            var year  = date[$.inArray('YYYY', dateFormat)],
                month = date[$.inArray('MM', dateFormat)],
                day   = date[$.inArray('DD', dateFormat)];

            if (!year || !month || !day || year.length !== 4) {
                return false;
            }

            // Determine the time
            var minutes = null, hours = null, seconds = null;
            if (timeFormat) {
                timeFormat = timeFormat.split(':');
                time       = time.split(':');

                if (timeFormat.length !== time.length) {
                    return false;
                }

                hours   = time.length > 0 ? time[0] : null;
                minutes = time.length > 1 ? time[1] : null;
                seconds = time.length > 2 ? time[2] : null;

                // Validate seconds
                if (seconds) {
                    if (isNaN(seconds) || seconds.length > 2) {
                        return false;
                    }
                    seconds = parseInt(seconds, 10);
                    if (seconds < 0 || seconds > 60) {
                        return false;
                    }
                }

                // Validate hours
                if (hours) {
                    if (isNaN(hours) || hours.length > 2) {
                        return false;
                    }
                    hours = parseInt(hours, 10);
                    if (hours < 0 || hours >= 24 || (amOrPm && hours > 12)) {
                        return false;
                    }
                }

                // Validate minutes
                if (minutes) {
                    if (isNaN(minutes) || minutes.length > 2) {
                        return false;
                    }
                    minutes = parseInt(minutes, 10);
                    if (minutes < 0 || minutes > 59) {
                        return false;
                    }
                }
            }

            // Validate day, month, and year
            return $.fn.bootstrapValidator.helpers.date(year, month, day);
        }
    };
}(window.jQuery));
