describe('phone', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="phoneForm">',
                '<div class="form-group">',
                    '<select class="form-control" name="country">',
                        '<option value="BR">Brazil</option>',
                        '<option value="CN">China</option>',
                        '<option value="CZ">Czech Republic</option>',
                        '<option value="DK">Denmark</option>',
                        '<option value="ES">Spain</option>',
                        '<option value="FR">France</option>',
                        '<option value="GB">United Kingdom</option>',
                        '<option value="MA">Morocco</option>',
                        '<option value="PK">Pakistan</option>',
                        '<option value="RO">Romania</option>',
                        '<option value="RU">Russia</option>',
                        '<option value="SK">Slovakia</option>',
                        '<option value="TH">Thailand</option>',
                        '<option value="US">USA</option>',
                        '<option value="VE">Venezuela</option>',
                    '</select>',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" name="phone" data-bv-phone />',
                '</div>',
            '</form>',
        ].join('\n')).appendTo('body');

        $('#phoneForm').bootstrapValidator();

        /**
         * @type {BootstrapValidator}
         */
        this.bv       = $('#phoneForm').data('bootstrapValidator');
        this.$country = this.bv.getFieldElements('country');
        this.$phone   = this.bv.getFieldElements('phone');
    });

    afterEach(function() {
        $('#phoneForm').bootstrapValidator('destroy').remove();
    });

    it('dynamic country', function() {
        this.$phone.attr('data-bv-phone-country', 'country');
        this.bv.destroy();
        this.bv = $('#phoneForm').bootstrapValidator().data('bootstrapValidator');

        this.$country.val('BR');
        this.$phone.val('16920894635');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$country.val('FR');
        this.$phone.val('0644444444');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();

        this.bv.resetForm();
        this.$country.val('GB');
        this.$phone.val('012345678900');
        this.bv.validate();
        expect(this.bv.isValid()).toBeFalsy();
    });

    it('Brazil phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'BR');

        // Valid samples
        var validSamples = [
            '0800.000.00.00', '0800-000-00-00', '0800 000 00 00', '0800-00-00-00', '0800.00.00.00', '0800 00 00 00',
            '0800-000-0000', '0800 000 0000', '0800.000.0000', '08000000000',
            '1692089-4635', '16920894635', '16992089-4635', '16 99202-4635', '(16)99202-4635', '(16)92089-4635',
            '(16) 92089-4635', '(15) 4343-4343', '+55 15 3702-7523', '(+55) 15 3702-7523', '(+55)1537027523',
            '(+55)(15)3702-7523', '(+55) 15 3702-7523', '(+55) 15 99202-7523', '99202-4635', '(16) 9208-4635'
        ];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }
    });

    it('China phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'CN');

        // Valid samples
        var validSamples = [
            '18911111111', '189 1111 1111', '189-1111-1111', '0086-18911111111', '+86-18911111111',
            '86-18911111111', '0086 18911111111', '+86 18911111111', '86 18911111111', '0086 189-1111-1111',
            '+86 189-1111-1111', '86 189-1111-1111', '02011111111', '020-11111111', '020 11111111',
            '020 1111 1111', '020-1111-1111', '0086 020 82803159', '0086-020-82803159', '0086-020-82803159',
            '+86 20 61302222-8866', '+86 20 6130-2222-8866', '+86 10 59081185'
        ];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }
    });

    it('Czech Republic phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'CZ');

        // Valid samples
        var validSamples = [
            '00420123456789', '00420 123456789', '00420 123 456 789', '00 420 123 456 789',
            '+420123456789', '+420 123456789', '+420 123 456 789', '123456789', '123 456 789'
        ];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = [
            '420123456789', '420 123456789', '420 123 456 789', '00421123456789', '00421 123456789',
            '00421 123 456 789', '00 421 123 456 789', '+421123456789', '+421 123456789',
            '+421 123 456 789'
        ];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$phone.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('France phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'FR');

        // Valid samples
        var validSamples = [
            // National formats
            '0644444444', '06 44 44 44 44', '06-44-44-44-44', '06.44.44.44.44',
            // International formats
            '+33644444444', '+336.44.44.44.44', '+33 6.44.44.44.44', '0033644444444', '00336.44.44.44.44',
            '0033 6.44.44.44.44',
            // Some times
            '+33(0)644444444', '+33 (0) 644444444'
        ];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = [
            // The separator between pairs of digits is not the same
            '06 44.44-44.44', '06 44 44-44.44', '06 44 44-4444', '06 44 44-4444',
            // Too many digits
            '06444444444444',
            // Missing leading 0
            '6644444444',
            // Too much non-numeric characters
            '06  44.44-44.44', '+33 (0)  644444444',
            // Bad parenthesis
            '(0)644444444',
            // Bad separator after the international prefix
            '+33-(0)-644444444', '+33 (0)-644444444', '+33-(0) 644444444',
            // Trailing separator
            '06.44.44.44.44.'
        ];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$phone.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('United Kingdom phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'GB');

        // Valid samples
        var validSamples = [
            // National formats
            '01611234567', '0161 123 4567', '(0161) 123 4567', '0161-123-4567',
            // International formats
            '+44 161 123 4567', '+441611234567', '+44(0)161234567', '00 44 161 1234567', '(011) 44 161 234567', '0161-158-5587',
            // Extensions
            '0161 123 4567 ext. 123', '01611234567x123', '+44161234567x123', '+44 (0) 161 1234567 ext 123'
        ];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = [
            '012345678900', // Too many digits
            '1611234567',   // Missing trunk
            '012345678',    // Not enough digits
            '123 4567',     // Missing area code
            '061 123 4567'  // Invalid area code
        ];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$phone.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Morocco phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'MA');

        // Valid samples
        var validSamples = [
            // National formats
            '0644444444', '0610245896', '0630548564', '06 44 44 44 44', '06-44-44-44-44', '06.44.44.44.44', '06 44.44-44.44',
            '0528254856', '0535484541', '05 28 44 44 44', '05-28-44.44.44', '05.28.44.44.44', '05 28.44-44.44',
            // International formats
            '+212644444444', '+2126.44.44.44.44', '+212 6.44.44.44.44', '00212644444444', '002126.44.44.44.44', '00212 6.44.44.44.44',
            // Some times
            '+212(0)644444444', '+212 (0) 644444444'
        ];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = [
            '0625468961', '0512548632', '0542564896',   // Not a valid phone numbers
            '06444444444444',                           // Too many digits
            '6644444444',                               // Missing leading 0
            '06  44.44-44.44', '+212 (0)  644444444',   // Too much non-numeric characters
            '(0)644444444'                              // Bad parenthesis
        ];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$phone.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Pakistan phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'PK');

        // Valid samples
        var validSamples = ['03336527366'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }
    });

    it('Romania phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'RO');

        // Valid samples
        var validSamples = [
            '+40213-564-864', '+40213.564.864', '+40213 564 864', '0213-564-864',
            '0213564864', '0313564864',
            '0720512346', '0730512346', '0740512346', '0750512346', '+40750512346', '+40750.512.346',
            '0760512346', '0770512346', '0780512346'
        ];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = [
            '0213/564/864', // Invalid separator
            '0413564864',   // Invalid land line number (The valid one should be +402, +403 or inside country 02 - 03)
            '0790512346'    // Invalid mobile phone number (The valid one is 072xxxxxxx - 078xxxxxxx)
        ];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$phone.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });

    it('Russia phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'RU');

        // Valid samples
        var validSamples = ['+7(911)976-91-04'];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }
    });

    it('Slovakia phone number', function() {
        this.bv.updateOption('phone', 'phone', 'country', 'SK');

        // Valid samples
        var validSamples = [
            '00420123456789', '00420 123456789', '00420 123 456 789', '00 420 123 456 789',
            '+420123456789', '+420 123456789', '+420 123 456 789', '123456789', '123 456 789'
        ];
        for (var i in validSamples) {
            this.bv.resetForm();
            this.$phone.val(validSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toBeTruthy();
        }

        // Invalid samples
        var invalidSamples = [
            '420123456789', '420 123456789', '420 123 456 789', '00421123456789', '00421 123456789',
            '00421 123 456 789', '00 421 123 456 789', '+421123456789', '+421 123456789',
            '+421 123 456 789'
        ];
        for (i in invalidSamples) {
            this.bv.resetForm();
            this.$phone.val(invalidSamples[i]);
            this.bv.validate();
            expect(this.bv.isValid()).toEqual(false);
        }
    });
});
