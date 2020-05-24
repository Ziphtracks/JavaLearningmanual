describe('ip', function() {
    beforeEach(function() {
        $([
            '<form class="form-horizontal" id="ipForm">',
                '<div class="form-group">',
                    '<input type="text" name="ipv4" data-bv-ip data-bv-ip-ipv6="false" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" name="ipv6" data-bv-ip data-bv-ip-ipv4="false" />',
                '</div>',
                '<div class="form-group">',
                    '<input type="text" name="both" data-bv-ip />',
                '</div>',
            '</form>'
        ].join('\n')).appendTo('body');

        $('#ipForm').bootstrapValidator();

        this.bv    = $('#ipForm').data('bootstrapValidator');
        this.$ipv4 = this.bv.getFieldElements('ipv4');
        this.$ipv6 = this.bv.getFieldElements('ipv6');
        this.$both = this.bv.getFieldElements('both');
    });

    afterEach(function() {
        $('#ipForm').bootstrapValidator('destroy').remove();
    });

    it('Valid ipv4', function() {
        this.$ipv4.val('0.0.0.0');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
        
        this.bv.resetForm();
        this.$ipv4.val('192.168.1.1');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
        
        this.bv.resetForm();
        this.$ipv4.val('255.255.255.255');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });
    
    it('Invalid ipv4', function() {
        this.$ipv4.val('10.168.0001.100');         // extra 0 not allowed
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv4.val('0.0.0.256');               // 256 not allowed, max is 255
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv4.val('256.255.255.255');         // max is 255.255.255.255
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv4.val('192.168. 224.0');          // internal space
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv4.val('192.168.224.0 1');         // junk after valid address
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

    it('Valid ipv6', function() {
        this.$ipv6.val('0000:0000:0000:0000:0000:0000:0000:0000');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
        
        this.bv.resetForm();
        this.$ipv6.val('fe00::1');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
        
        this.bv.resetForm();
        this.$ipv6.val('fe80::217:f2ff:fe07:ed62');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
        
        this.bv.resetForm();
        this.$ipv6.val('ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff');
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
    });
    
    it('Invalid ipv6', function() {
        this.$ipv6.val('02001:0000:1234:0000:0000:C1C0:ABCD:0876');     // extra 0 not allowed
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv6.val('2001:0000:1234:0000:00001:C1C0:ABCD:0876');     // extra 0 not allowed
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv6.val('2001:0000:1234: 0000:0000:C1C0:ABCD:0876');    // internal space
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv6.val('2001:0000:1234:0000:0000:C1C0:ABCD:0876 0');    // junk after valid address
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv6.val('3ffe:0b00:0000:0001:0000:0000:000a');           // seven segment
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv6.val('FF02:0000:0000:0000:0000:0000:0000:0000:0001'); // nine segment
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv6.val('::1111:2222:3333:4444:5555:6666::');            // double "::"
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
        
        this.bv.resetForm();
        this.$ipv6.val('3ffe:b00::1::a');                               // double "::"
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

    it('Both', function() {
        this.$both.val('255.255.255.255');                            // valid
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
        
        this.bv.resetForm();
        this.$both.val('256.0.0.0');                                  // 256 not allowed, max is 255
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);

        this.bv.resetForm();
        this.$both.val('2001:0db8:0000:85a3:0000:0000:ac1f:8001');    // valid
        this.bv.validate();
        expect(this.bv.isValid()).toBeTruthy();
        
        this.bv.resetForm();
        this.$both.val('2001:0000:1234:0000:0000:C1C0:ABCD:0876 0');  // junk after valid address
        this.bv.validate();
        expect(this.bv.isValid()).toEqual(false);
    });

});