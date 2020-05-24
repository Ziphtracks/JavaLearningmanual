(function($) {
    $.fn.bootstrapValidator.i18n.zipCode = $.extend($.fn.bootstrapValidator.i18n.zipCode || {}, {
        'default': 'Please enter a valid postal code',
        countryNotSupported: 'The country code %s is not supported',
        country: 'Please enter a valid postal code in %s',
        countries: {
            BR: 'Brazil',
            CA: 'Canada',
            CZ: 'Czech Republic',
            DK: 'Denmark',
            GB: 'United Kingdom',
            IT: 'Italy',
            MA: 'Morocco',
            NL: 'Netherlands',
            RO: 'Romania',
            RU: 'Russia',
            SE: 'Sweden',
            SG: 'Singapore',
            SK: 'Slovakia',
            US: 'USA'
        }
    });

    $.fn.bootstrapValidator.validators.zipCode = {
        html5Attributes: {
            message: 'message',
            country: 'country'
        },

        COUNTRY_CODES: ['BR', 'CA', 'CZ', 'DK', 'GB', 'IT', 'MA', 'NL', 'RO', 'RU', 'SE', 'SG', 'SK', 'US'],

        /**
         * Return true if and only if the input value is a valid country zip code
         *
         * @param {BootstrapValidator} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - country: The country
         *
         * The country can be defined by:
         * - An ISO 3166 country code
         * - Name of field which its value defines the country code
         * - Name of callback function that returns the country code
         * - A callback function that returns the country code
         *
         * callback: function(value, validator, $field) {
         *      // value is the value of field
         *      // validator is the BootstrapValidator instance
         *      // $field is jQuery element representing the field
         * }
         *
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = $field.val();
            if (value === '' || !options.country) {
                return true;
            }

            var country = options.country;
            if (typeof country !== 'string' || $.inArray(country, this.COUNTRY_CODES) === -1) {
                // Try to determine the country
                country = validator.getDynamicOption($field, country);
            }

            if (!country || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
                return { valid: false, message: $.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.zipCode.countryNotSupported, country) };
            }

            var isValid = false;
            country = country.toUpperCase();
            switch (country) {
                case 'BR':
                    isValid = /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(value);
                    break;

                case 'CA':
                    isValid = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(value);
                    break;

                case 'CZ':
                    // Test: http://regexr.com/39hhr
                    isValid = /^(\d{3})([ ]?)(\d{2})$/.test(value);
                    break;

                case 'DK':
                    isValid = /^(DK(-|\s)?)?\d{4}$/i.test(value);
                    break;

                case 'GB':
                    isValid = this._gb(value);
                    break;

                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Italy
                case 'IT':
                    isValid = /^(I-|IT-)?\d{5}$/i.test(value);
                    break;

                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Morocco
                case 'MA':
                    isValid = /^[1-9][0-9]{4}$/i.test(value);
                    break;

                // http://en.wikipedia.org/wiki/Postal_codes_in_the_Netherlands
                case 'NL':
                    isValid = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(value);
                    break;
                    
                case 'RO':
                    isValid = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(value);
                    break;

                case 'RU':
                    isValid = /^[0-9]{6}$/i.test(value);
                    break;

                case 'SE':
                    isValid = /^(S-)?\d{3}\s?\d{2}$/i.test(value);
                    break;

                case 'SG':
                    isValid = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(value);
                    break;                

                case 'SK':
                    // Test: http://regexr.com/39hhr
                    isValid = /^(\d{3})([ ]?)(\d{2})$/.test(value);
                    break;

                case 'US':
                /* falls through */
                default:
                    isValid = /^\d{4,5}([\-]?\d{4})?$/.test(value);
                    break;
            }

            return {
                valid: isValid,
                message: $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.zipCode.country, $.fn.bootstrapValidator.i18n.zipCode.countries[country])
            };
        },

        /**
         * Validate United Kingdom postcode
         * Examples:
         * - Standard: EC1A 1BB, W1A 1HQ, M1 1AA, B33 8TH, CR2 6XH, DN55 1PT
         * - Special cases:
         * AI-2640, ASCN 1ZZ, GIR 0AA
         *
         * @see http://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom
         * @param {String} value The postcode
         * @returns {Boolean}
         */
        _gb: function(value) {
            var firstChar  = '[ABCDEFGHIJKLMNOPRSTUWYZ]',     // Does not accept QVX
                secondChar = '[ABCDEFGHKLMNOPQRSTUVWXY]',     // Does not accept IJZ
                thirdChar  = '[ABCDEFGHJKPMNRSTUVWXY]',
                fourthChar = '[ABEHMNPRVWXY]',
                fifthChar  = '[ABDEFGHJLNPQRSTUWXYZ]',
                regexps    = [
                    // AN NAA, ANN NAA, AAN NAA, AANN NAA format
                    new RegExp('^(' + firstChar + '{1}' + secondChar + '?[0-9]{1,2})(\\s*)([0-9]{1}' + fifthChar + '{2})$', 'i'),
                    // ANA NAA
                    new RegExp('^(' + firstChar + '{1}[0-9]{1}' + thirdChar + '{1})(\\s*)([0-9]{1}' + fifthChar + '{2})$', 'i'),
                    // AANA NAA
                    new RegExp('^(' + firstChar + '{1}' + secondChar + '{1}?[0-9]{1}' + fourthChar + '{1})(\\s*)([0-9]{1}' + fifthChar + '{2})$', 'i'),

                    new RegExp('^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$', 'i'),        // BFPO postcodes
                    /^(GIR)(\s*)(0AA)$/i,                       // Special postcode GIR 0AA
                    /^(BFPO)(\s*)([0-9]{1,4})$/i,               // Standard BFPO numbers
                    /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,        // c/o BFPO numbers
                    /^([A-Z]{4})(\s*)(1ZZ)$/i,                  // Overseas Territories
                    /^(AI-2640)$/i                              // Anguilla
                ];
            for (var i = 0; i < regexps.length; i++) {
                if (regexps[i].test(value)) {
                    return true;
                }
            }

            return false;
        }
    };
}(window.jQuery));
