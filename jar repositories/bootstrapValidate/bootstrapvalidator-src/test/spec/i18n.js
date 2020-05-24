describe('i18n', function() {
    beforeEach(function() {
        $([
            '<form id="i18nForm" class="form-horizontal">',
                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Full name</label>',
                    '<div class="col-lg-5">',
                        '<input type="text" class="form-control" name="fullName" />',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Username</label>',
                    '<div class="col-lg-5">',
                        '<input type="text" class="form-control" name="username" />',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Email address</label>',
                    '<div class="col-lg-5">',
                        '<input type="text" class="form-control" name="email" />',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Password</label>',
                    '<div class="col-lg-5">',
                        '<input type="password" class="form-control" name="password" />',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Retype password</label>',
                    '<div class="col-lg-5">',
                        '<input type="password" class="form-control" name="confirmPassword" />',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Gender</label>',
                    '<div class="col-lg-5">',
                        '<div class="radio">',
                            '<label><input type="radio" name="gender" value="male" /> Male</label>',
                        '</div>',
                        '<div class="radio">',
                            '<label><input type="radio" name="gender" value="female" /> Female</label>',
                        '</div>',
                        '<div class="radio">',
                            '<label><input type="radio" name="gender" value="other" /> Other</label>',
                        '</div>',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Age</label>',
                    '<div class="col-lg-3">',
                        '<input type="text" class="form-control" name="age" />',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Website</label>',
                    '<div class="col-lg-5">',
                        '<input type="text" class="form-control" name="website" />',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Phone number</label>',
                    '<div class="col-lg-5">',
                        '<input type="text" class="form-control" name="phoneNumber" />',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Languages</label>',
                    '<div class="col-lg-5">',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="languages[]" value="english" /> English</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="languages[]" value="french" /> French</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="languages[]" value="german" /> German</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="languages[]" value="russian" /> Russian</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="languages[]" value="other" /> Other</label>',
                        '</div>',
                    '</div>',
                '</div>',

                '<div class="form-group">',
                    '<label class="col-lg-3 control-label">Programming Languages</label>',
                    '<div class="col-lg-5">',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="programs[]" value="net" /> .Net</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="programs[]" value="java" /> Java</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="programs[]" value="c" /> C/C++</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="programs[]" value="php" /> PHP</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="programs[]" value="perl" /> Perl</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="programs[]" value="ruby" /> Ruby</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="programs[]" value="python" /> Python</label>',
                        '</div>',
                        '<div class="checkbox">',
                            '<label><input type="checkbox" name="programs[]" value="javascript" /> Javascript</label>',
                        '</div>',
                    '</div>',
                '</div>',
            '</form>'
        ].join('')).appendTo('body');

        $('#i18nForm').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                fullName: {
                    validators: {
                        notEmpty: {},
                        stringCase: {
                            'case': 'upper'
                        }
                    }
                },
                username: {
                    validators: {
                        notEmpty: {},
                        stringLength: {
                            min: 6,
                            max: 20
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_\.]+$/
                        },
                        different: {
                            field: 'password'
                        }
                    }
                },
                email: {
                    validators: {
                        emailAddress: {}
                    }
                },
                password: {
                    validators: {
                        notEmpty: {},
                        identical: {
                            field: 'confirmPassword'
                        },
                        different: {
                            field: 'username'
                        }
                    }
                },
                confirmPassword: {
                    validators: {
                        notEmpty: {},
                        identical: {
                            field: 'password'
                        },
                        different: {
                            field: 'username'
                        }
                    }
                },
                age: {
                    validators: {
                        notEmpty: {},
                        digits: {},
                        greaterThan: {
                            value: 18
                        },
                        lessThan: {
                            value: 100
                        }
                    }
                },
                website: {
                    validators: {
                        notEmpty: {},
                        uri: {}
                    }
                },
                phoneNumber: {
                    validators: {
                        notEmpty: {},
                        digits: {},
                        phone: {
                            country: 'US'
                        }
                    }
                },
                gender: {
                    validators: {
                        notEmpty: {}
                    }
                },
                'languages[]': {
                    validators: {
                        notEmpty: {}
                    }
                },
                'programs[]': {
                    validators: {
                        choice: {
                            min: 2,
                            max: 4
                        }
                    }
                }
            }
        });

        this.bv        = $('#i18nForm').data('bootstrapValidator');
        this.$fullName = this.bv.getFieldElements('fullName');
        this.$email    = this.bv.getFieldElements('email');
        this.$userName = this.bv.getFieldElements('username');
        this.$password = this.bv.getFieldElements('password');
        this.$confirm  = this.bv.getFieldElements('confirmPassword');
        this.$age      = this.bv.getFieldElements('age');
        this.$website  = this.bv.getFieldElements('website');
        this.$phone    = this.bv.getFieldElements('phoneNumber');
        this.$program  = this.bv.getFieldElements('programs[]');
    });

    afterEach(function() {
        $('#i18nForm').bootstrapValidator('destroy').remove();
    });

    it('default message', function() {
        var format = $.fn.bootstrapValidator.helpers.format,
            i18n   = $.fn.bootstrapValidator.i18n;

        this.bv.validate();
        expect(this.bv.getMessages(this.$fullName, 'notEmpty')[0]).toEqual(i18n.notEmpty['default']);

        this.$fullName.val('lowerName');
        this.bv.revalidateField('fullName');
        expect(this.bv.getMessages('fullName', 'stringCase')[0]).toEqual(i18n.stringCase.upper);

        this.bv.resetForm();
        this.$userName.val('123');
        this.bv.validate();
        expect(this.bv.getMessages('username', 'stringLength')[0]).toEqual(format(i18n.stringLength.between, [6, 20]));

        this.bv.resetForm();
        this.$userName.val('contain@#$');
        this.bv.validate();
        expect(this.bv.getMessages(this.$userName, 'regexp')[0]).toEqual(i18n.regexp['default']);

        this.bv.resetForm();
        this.$userName.val('validUserName');
        this.$password.val('validUserName');
        this.bv.validate();
        expect(this.bv.getMessages('username', 'different')[0]).toEqual(i18n.different['default']);

        this.bv.resetForm();
        this.$email.val('A@b@c@example.com');
        this.bv.validate();
        expect(this.bv.getMessages(this.$email, 'emailAddress')[0]).toEqual(i18n.emailAddress['default']);

        this.bv.resetForm();
        this.$password.val('@S3cur3P@@w0rd');
        this.$confirm.val('notMatch');
        this.bv.validate();
        expect(this.bv.getMessages('password', 'identical')[0]).toEqual(i18n.identical['default']);

        this.bv.resetForm();
        this.$age.val('notDigit');
        this.bv.validate();
        expect(this.bv.getMessages('age', 'digits')[0]).toEqual(i18n.digits['default']);

        this.bv.resetForm();
        this.$age.val(10);
        this.bv.validate();
        expect(this.bv.getMessages(this.$age, 'greaterThan')[0]).toEqual(format(i18n.greaterThan['default'], 18));

        this.bv.resetForm();
        this.$age.val(120);
        this.bv.validate();
        expect(this.bv.getMessages('age', 'lessThan')[0]).toEqual(format(i18n.lessThan['default'], 100));

        this.bv.resetForm();
        this.$website.val('http://invalidWebsite');
        this.bv.validate();
        expect(this.bv.getMessages('website', 'uri')[0]).toEqual(i18n.uri['default']);

        this.bv.resetForm();
        this.$phone.val('123456');
        this.bv.validate();
        expect(this.bv.getMessages('phoneNumber', 'phone')[0]).toEqual(format(i18n.phone.country, i18n.phone.countries['US']));

        this.bv.resetForm();
        this.$program.eq(0).prop('checked', 'checked');
        this.bv.validate();
        expect(this.bv.getMessages(this.$program, 'choice')[0]).toEqual(format(i18n.choice.between, [2, 4]));

        this.bv.resetForm();
        this.$program.prop('checked', 'checked');
        this.bv.validate();
        expect(this.bv.getMessages('programs[]', 'choice')[0]).toEqual(format(i18n.choice.between, [2, 4]));
    });
});
