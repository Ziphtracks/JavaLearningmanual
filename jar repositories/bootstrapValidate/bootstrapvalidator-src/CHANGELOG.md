# Change Log

## v0.5.2 (2014-09-25)

__New Features__
* [#480](https://github.com/nghuuphuoc/bootstrapvalidator/pull/480): Add ```verbose``` option, thanks to [@mbezhanov](https://github.com/mbezhanov)
* [#542](https://github.com/nghuuphuoc/bootstrapvalidator/issues/542), [#666](https://github.com/nghuuphuoc/bootstrapvalidator/pull/666): Add blank validator, thanks to [@bermo](https://github.com/bermo)
* [#617](https://github.com/nghuuphuoc/bootstrapvalidator/issues/617): Add ```init``` and ```destroy``` methods to validator
* [#724](https://github.com/nghuuphuoc/bootstrapvalidator/pull/724): Add Venezuelan VAT number (RIF) validator, thanks to [@paquitodev](https://github.com/paquitodev)
* [#739](https://github.com/nghuuphuoc/bootstrapvalidator/pull/739): Add China phone number validator, thanks to [@caijh](https://github.com/caijh)
* [#743](https://github.com/nghuuphuoc/bootstrapvalidator/pull/743): Add Venezuela phone number validator, thanks to [@paquitodev](https://github.com/paquitodev)
* [#760](https://github.com/nghuuphuoc/bootstrapvalidator/pull/760): Add Romania phone number validator, thanks to [@adrian-dks](https://github.com/adrian-dks)
* [#761](https://github.com/nghuuphuoc/bootstrapvalidator/pull/761): Add Romania postal code validator, thanks to [@adrian-dks](https://github.com/adrian-dks)
* [#785](https://github.com/nghuuphuoc/bootstrapvalidator/pull/785): Add Denmark phone number validator, thanks to [@emilchristensen](https://github.com/emilchristensen)
* [#787](https://github.com/nghuuphuoc/bootstrapvalidator/pull/787): Add Thailand phone number and ID validator, thanks to [@figgaro](https://github.com/figgaro)
* [#793](https://github.com/nghuuphuoc/bootstrapvalidator/pull/793), [#798](https://github.com/nghuuphuoc/bootstrapvalidator/pull/798): Add Chinese citizen ID validator, thanks to [@shamiao](https://github.com/shamiao)
* [#802](https://github.com/nghuuphuoc/bootstrapvalidator/pull/802): Add Russia phone number validator, thanks to [@cylon-v](https://github.com/cylon-v). [#816](https://github.com/nghuuphuoc/bootstrapvalidator/pull/816): Improved by [@stepin](https://github.com/stepin)
* [#816](https://github.com/nghuuphuoc/bootstrapvalidator/pull/816): Add Russian postal code validator, thanks to [@stepin](https://github.com/stepin)
* [#867](https://github.com/nghuuphuoc/bootstrapvalidator/pull/867): Add Czech and Slovakia phone number and postal code validators, thanks to [@cuchac](https://github.com/cuchac)

__Changes__
* [#753](https://github.com/nghuuphuoc/bootstrapvalidator/issues/753): Change the default type of [remote](http://bootstrapvalidator.com/validators/remote/) validator to GET

__Improvements__
* [#249](https://github.com/nghuuphuoc/bootstrapvalidator/pull/249), [#574](https://github.com/nghuuphuoc/bootstrapvalidator/issues/574), [#669](https://github.com/nghuuphuoc/bootstrapvalidator/issues/669): Add ```delay``` option to the [remote](http://bootstrapvalidator.com/validators/remote/) validator, thanks to [@q-state](https://github.com/q-state)
* [#345](https://github.com/nghuuphuoc/bootstrapvalidator/issues/345), [#454](https://github.com/nghuuphuoc/bootstrapvalidator/pull/454): The [different](http://bootstrapvalidator.com/validators/different/) validator allows more than a 2-way comparison, thanks to [@AlaskanShade](https://github.com/AlaskanShade)
* [#557](https://github.com/nghuuphuoc/bootstrapvalidator/issues/557), [#569](https://github.com/nghuuphuoc/bootstrapvalidator/pull/569): The [container](http://bootstrapvalidator.com/settings/#form-container) option can be defined by a callback, thanks to [@mattrick](https://github.com/mattrick)
* [#570](https://github.com/nghuuphuoc/bootstrapvalidator/issues/570): Use CSS classes instead of inline styling to fix icons with ```input-group```, thanks to [@dlcrush](https://github.com/dlcrush)
* [#578](https://github.com/nghuuphuoc/bootstrapvalidator/issues/578), [#813](https://github.com/nghuuphuoc/bootstrapvalidator/pull/813): The [stringLength](http://bootstrapvalidator.com/validators/stringLength/) validator supports HTML 5 ```minlength``` attribute, thanks to [@emilchristensen](https://github.com/emilchristensen)
* [#675](https://github.com/nghuuphuoc/bootstrapvalidator/pull/675): The [emailAddress](http://bootstrapvalidator.com/validators/emailAddress/) validator accepts multiple email addresses, thanks to [@kenny-evitt](https://github.com/kenny-evitt)
* [#716](https://github.com/nghuuphuoc/bootstrapvalidator/issues/716), [#765](https://github.com/nghuuphuoc/bootstrapvalidator/issues/765): Reuse data returned by [callback](http://bootstrapvalidator.com/validators/callback/), [remote](http://bootstrapvalidator.com/validators/remote/), custom validators
* [#734](https://github.com/nghuuphuoc/bootstrapvalidator/pull/734): The [uri](http://bootstrapvalidator.com/validators/uri/) validator adds support for custom protocol, thanks to [@bcamarneiro](https://github.com/bcamarneiro)
* [#737](https://github.com/nghuuphuoc/bootstrapvalidator/issues/737): Support VAT number without prefixing by country code
* [#754](https://github.com/nghuuphuoc/bootstrapvalidator/issues/754): Support latest Bootstrap when using tooltip/popover to show the message
* [#783](https://github.com/nghuuphuoc/bootstrapvalidator/issues/783): Improve behaviour of the [different](http://bootstrapvalidator.com/validators/different/) validator
* [#792](https://github.com/nghuuphuoc/bootstrapvalidator/pull/792): Add "BootstrapValidator's JavaScript requires jQuery" warning, thanks to [@Arkni](https://github.com/Arkni)
* [#803](https://github.com/nghuuphuoc/bootstrapvalidator/pull/803): Add ```minSize``` option for the [file](http://bootstrapvalidator.com/validators/file/) validator, thanks to [@Arkni](https://github.com/Arkni)
* [#824](https://github.com/nghuuphuoc/bootstrapvalidator/issues/824): Add [phone](http://bootstrapvalidator.com/validators/phone/) number validator test suite

__Bug Fixes__
* [#611](https://github.com/nghuuphuoc/bootstrapvalidator/issues/611), [#703](https://github.com/nghuuphuoc/bootstrapvalidator/issues/703): Tabs get red even form is valid
* [#612](https://github.com/nghuuphuoc/bootstrapvalidator/issues/612), [#740](https://github.com/nghuuphuoc/bootstrapvalidator/pull/740), [#741](https://github.com/nghuuphuoc/bootstrapvalidator/pull/741): Fix the [emailAddress](http://bootstrapvalidator.com/validators/emailAddress/) issue which email@server is not valid email address, thanks to [@kromit](https://github.com/kromit)
* [#687](https://github.com/nghuuphuoc/bootstrapvalidator/issues/687), [#711](https://github.com/nghuuphuoc/bootstrapvalidator/pull/711): Keep disabled validators VALID, thanks to [@talberti](https://github.com/talberti)
* [#725](https://github.com/nghuuphuoc/bootstrapvalidator/pull/725): Fix the issue when adding field which does not exist but is already set in "fields" option
* [#732](https://github.com/nghuuphuoc/bootstrapvalidator/issues/732): Fix the issue when removing the radio or checkbox field
* [#746](https://github.com/nghuuphuoc/bootstrapvalidator/issues/746): The form is still submitted when clicking on submit button which is set ```onclick="return false;"```
* [#758](https://github.com/nghuuphuoc/bootstrapvalidator/issues/758): Using [notEmpty](http://bootstrapvalidator.com/validators/notEmpty/) validator with ```type="number"```
* [#759](https://github.com/nghuuphuoc/bootstrapvalidator/issues/759), [#764](https://github.com/nghuuphuoc/bootstrapvalidator/pull/764): The tooltip/popover isn't shown if there is disabled validator.
The tooltip/popover is shown automatically when the field gets the focus, thanks to [@leedorian](https://github.com/leedorian)
* [#797](https://github.com/nghuuphuoc/bootstrapvalidator/issues/797), [#799](https://github.com/nghuuphuoc/bootstrapvalidator/pull/799): Can't validate ipv4 and ipv6 at the same time. Add ip validator test suite, thanks to [@Arkni](https://github.com/Arkni)
* [#816](https://github.com/nghuuphuoc/bootstrapvalidator/pull/816): Fix Russian [VAT](http://bootstrapvalidator.com/validators/vat/) number validator, thanks to [@stepin](https://github.com/stepin)
* [#832](https://github.com/nghuuphuoc/bootstrapvalidator/issues/832): The form won't be validated if the submit button contains a HTML tag

__Document__
* [#709](https://github.com/nghuuphuoc/bootstrapvalidator/issues/709), [#715](https://github.com/nghuuphuoc/bootstrapvalidator/pull/715): Add [Bootstrap Select](http://bootstrapvalidator.com/examples/bootstrap-select/) and [Select2](http://bootstrapvalidator.com/examples/select2/) examples, thanks to [@Arkni](https://github.com/Arkni)
* [#855](https://github.com/nghuuphuoc/bootstrapvalidator/issues/855), [#858](https://github.com/nghuuphuoc/bootstrapvalidator/pull/858): Add [TinyMCE](http://bootstrapvalidator.com/examples/tinymce/) example, thanks to [@Arkni](https://github.com/Arkni)
* [#859](https://github.com/nghuuphuoc/bootstrapvalidator/issues/859), [#862](https://github.com/nghuuphuoc/bootstrapvalidator/issues/862), [#865](https://github.com/nghuuphuoc/bootstrapvalidator/pull/865): Add [Changing tooltip/popover position](http://bootstrapvalidator.com/examples/tooltip-popover-position/) example, thanks to [@Arkni](https://github.com/Arkni)

__Language Packages__
* [#706](https://github.com/nghuuphuoc/bootstrapvalidator/pull/706): Japanese language package, thanks to [@tsuyoshifujii](https://github.com/tsuyoshifujii)
* [#712](https://github.com/nghuuphuoc/bootstrapvalidator/pull/712): Swedish language package, thanks to [@ulsa](https://github.com/ulsa)
* [#727](https://github.com/nghuuphuoc/bootstrapvalidator/pull/727): Belgium (French) language package, thanks to [@neilime](https://github.com/neilime)
* [#729](https://github.com/nghuuphuoc/bootstrapvalidator/pull/729): Persian (Farsi) language package, thanks to [@i0](https://github.com/i0)
* [#779](https://github.com/nghuuphuoc/bootstrapvalidator/pull/779): Romanian language package, thanks to [@filipac](https://github.com/filipac)
* [#787](https://github.com/nghuuphuoc/bootstrapvalidator/pull/787): Thai language package, thanks to [@figgaro](https://github.com/figgaro)
* [#788](https://github.com/nghuuphuoc/bootstrapvalidator/pull/788): Fully re-translated Simplified Chinese language package, thanks to [@shamiao](https://github.com/shamiao)
* [#795](https://github.com/nghuuphuoc/bootstrapvalidator/pull/795): Re-translated traditional Chinese language package, thanks to [@tureki](https://github.com/tureki)
* [#802](https://github.com/nghuuphuoc/bootstrapvalidator/pull/802): Russian language package, thanks to [@cylon-v](https://github.com/cylon-v). [#816](https://github.com/nghuuphuoc/bootstrapvalidator/pull/816): Improved by [@stepin](https://github.com/stepin)
* [#806](https://github.com/nghuuphuoc/bootstrapvalidator/pull/806): Ukrainian language package, thanks to [@oleg-voloshyn](https://github.com/oleg-voloshyn)
* [#840](https://github.com/nghuuphuoc/bootstrapvalidator/pull/840): Serbian language package, thanks to [@markocrni](https://github.com/markocrni)
* [#856](https://github.com/nghuuphuoc/bootstrapvalidator/pull/856): Norwegian language package, thanks to [@trondulseth](https://github.com/trondulseth)
* [#868](https://github.com/nghuuphuoc/bootstrapvalidator/pull/868): Indonesian language package, thanks to [@egig](https://github.com/egig)

## v0.5.1 (2014-08-22)

__New Features__
* [#218](https://github.com/nghuuphuoc/bootstrapvalidator/issues/218), [#531](https://github.com/nghuuphuoc/bootstrapvalidator/pull/531): Add meid validator, thanks to [@troymccabe](https://github.com/troymccabe)
* [#267](https://github.com/nghuuphuoc/bootstrapvalidator/issues/267), [#532](https://github.com/nghuuphuoc/bootstrapvalidator/pull/532): Add imo validator, thanks to [@troymccabe](https://github.com/troymccabe)
* [#510](https://github.com/nghuuphuoc/bootstrapvalidator/pull/510), [#646](https://github.com/nghuuphuoc/bootstrapvalidator/pull/646): Add French [phone number](http://bootstrapvalidator.com/validators/phone/) validator, thanks to [@dlucazeau](https://github.com/dlucazeau)
* [#536](https://github.com/nghuuphuoc/bootstrapvalidator/pull/536): Add Spanish [phone number](http://bootstrapvalidator.com/validators/phone/) validator, thanks to [@vadail](https://github.com/vadail)
* [#519](https://github.com/nghuuphuoc/bootstrapvalidator/pull/519): Add Iceland [VAT](http://bootstrapvalidator.com/validators/vat/) number validator, thanks to [@evilchili](https://github.com/evilchili)
* [#620](https://github.com/nghuuphuoc/bootstrapvalidator/issues/620), [#621](https://github.com/nghuuphuoc/bootstrapvalidator/pull/621): Add Pakistan [phone number](http://bootstrapvalidator.com/validators/phone/) validator, thanks to [@abuzer](https://github.com/abuzer)
* [#630](https://github.com/nghuuphuoc/bootstrapvalidator/issues/630), [#640](https://github.com/nghuuphuoc/bootstrapvalidator/pull/640): Add event name options to avoid window.onerror being invoked by jQuery, thanks to [@roryprimrose](https://github.com/roryprimrose). Thanks to [@stephengreentree](https://github.com/stephengreentree) for creating the test suite ([#657](https://github.com/nghuuphuoc/bootstrapvalidator/pull/657))
* [#637](https://github.com/nghuuphuoc/bootstrapvalidator/pull/637): Add South African [VAT](http://bootstrapvalidator.com/validators/vat/) number validator, thanks to [@evilchili](https://github.com/evilchili)
* [#638](https://github.com/nghuuphuoc/bootstrapvalidator/pull/638), [#647](https://github.com/nghuuphuoc/bootstrapvalidator/pull/647): Add Brazilian [phone number](http://bootstrapvalidator.com/validators/phone/) and [postal code](http://bootstrapvalidator.com/validators/zipCode/) validator, thanks to [@fhferreira](https://github.com/fhferreira)
* [#643](https://github.com/nghuuphuoc/bootstrapvalidator/pull/643): Add [zipCode](http://bootstrapvalidator.com/validators/zipCode/) and [phone number](http://bootstrapvalidator.com/validators/phone/) validators for Morocco, thanks to [@Arkni](https://github.com/Arkni)
* [#650](https://github.com/nghuuphuoc/bootstrapvalidator/pull/650): Add Brazilian [VAT](http://bootstrapvalidator.com/validators/vat/) number validator, thanks to [@fhferreira](https://github.com/fhferreira)

__Improvements__
* [#502](https://github.com/nghuuphuoc/bootstrapvalidator/pull/502): Allowing sites without TLD to pass URI validation, thanks to [@troymccabe](https://github.com/troymccabe)
* [#549](https://github.com/nghuuphuoc/bootstrapvalidator/pull/549), [#600](https://github.com/nghuuphuoc/bootstrapvalidator/pull/600): Change the CSS/JS path in ```demo/remote.html``` and ```demo/message.html```, thanks to [@leegtang](https://github.com/leegtang), [@Arkni](https://github.com/Arkni)
* [#604](https://github.com/nghuuphuoc/bootstrapvalidator/pull/604): Fix the ```demo/date.html``` and ```demo/tab.html``` examples, thanks to [@Arkni](https://github.com/Arkni)
* [#609](https://github.com/nghuuphuoc/bootstrapvalidator/pull/609): Add content-type header for ```demo/remote.php```, thanks to [@etorres](https://github.com/etorres)
* [#661](https://github.com/nghuuphuoc/bootstrapvalidator/pull/661): Add ```headers``` option to the [remote](http://bootstrapvalidator.com/validators/remote/) validator, thanks to [@ryan2049](https://github.com/ryan2049)
* [#664](https://github.com/nghuuphuoc/bootstrapvalidator/issues/664): Fix the feedback icon position for Bootstrap 3.2
* [#683](https://github.com/nghuuphuoc/bootstrapvalidator/issues/683): Force the format option to be ```YYYY-MM-DD``` when using ```<input type="date" />```
* [#698](https://github.com/nghuuphuoc/bootstrapvalidator/issues/698): Ignore type checking if the file type is empty

__Bug Fixes__
* [#284](https://github.com/nghuuphuoc/bootstrapvalidator/issues/284), [#294](https://github.com/nghuuphuoc/bootstrapvalidator/issues/294), [#441](https://github.com/nghuuphuoc/bootstrapvalidator/issues/441), [#516](https://github.com/nghuuphuoc/bootstrapvalidator/issues/516), [#580](https://github.com/nghuuphuoc/bootstrapvalidator/issues/580): The HTML 5 ```<input type="number" />``` input allows to input non-digits characters
* [#548](https://github.com/nghuuphuoc/bootstrapvalidator/issues/548): Fix the issue when using [different](http://bootstrapvalidator.com/validators/different/) validator to compare with not existing field
* [#550](https://github.com/nghuuphuoc/bootstrapvalidator/issues/550), [#551](https://github.com/nghuuphuoc/bootstrapvalidator/pull/551): Cannot validate against both ipv4 and ipv6 at the same time, thanks to [@beeglebug](https://github.com/beeglebug)
* [#588](https://github.com/nghuuphuoc/bootstrapvalidator/issues/588): Don't use min, max attributes (greaterThan, lessThan validators) for ```<input type="date" />```
* [#665](https://github.com/nghuuphuoc/bootstrapvalidator/issues/665): The [submitButtons](http://bootstrapvalidator.com/settings/#form-submit-buttons) option doesn't work correctly
* [#672](https://github.com/nghuuphuoc/bootstrapvalidator/issues/672): The [zipCode](http://bootstrapvalidator.com/validators/zipCode/) validator throw an exception when passing not supported country code
* [#681](https://github.com/nghuuphuoc/bootstrapvalidator/issues/681): Fix the [date](http://bootstrapvalidator.com/validators/date/) validator issue where one of date/month/year or hours/minutes/seconds is prefixed by zero
* [#692](https://github.com/nghuuphuoc/bootstrapvalidator/issues/692): The [remote](http://bootstrapvalidator.com/validators/remote/) validator can't set the type option via HTML attribute
* [#700](https://github.com/nghuuphuoc/bootstrapvalidator/issues/700): The [between](http://bootstrapvalidator.com/validators/between/), [greaterThan](http://bootstrapvalidator.com/validators/greaterThan/), [lessThan](http://bootstrapvalidator.com/validators/lessThan/) validators accept param which isn't number

__Language Packages__
* [#400](https://github.com/nghuuphuoc/bootstrapvalidator/pull/400): Italian language package, thanks to [@maramazza](https://github.com/maramazza)
* [#503](https://github.com/nghuuphuoc/bootstrapvalidator/pull/503): French language package, thanks to [@dlucazeau](https://github.com/dlucazeau)
* [#505](https://github.com/nghuuphuoc/bootstrapvalidator/pull/505): Czech language package, thanks to [@AdwinTrave](https://github.com/AdwinTrave)
* [#507](https://github.com/nghuuphuoc/bootstrapvalidator/pull/507): Polish language package, thanks to [@grzesiek](https://github.com/grzesiek). [#624](https://github.com/nghuuphuoc/bootstrapvalidator/pull/624): Typos fixed by [@lukaszbanasiak](https://github.com/lukaszbanasiak)
* [#517](https://github.com/nghuuphuoc/bootstrapvalidator/pull/517): Belgium (Dutch) language package, thanks to [@dokterpasta](https://github.com/dokterpasta)
* [#527](https://github.com/nghuuphuoc/bootstrapvalidator/pull/527): Bulgarian language package, thanks to [@mraiur](https://github.com/mraiur)
* [#534](https://github.com/nghuuphuoc/bootstrapvalidator/pull/534): Turkish language package, thanks to [@CeRBeR666](https://github.com/CeRBeR666)
* [#536](https://github.com/nghuuphuoc/bootstrapvalidator/pull/536): Spanish language package, thanks to [@vadail](https://github.com/vadail)
* [#544](https://github.com/nghuuphuoc/bootstrapvalidator/pull/544): Greek language package, thanks to [@pRieStaKos](https://github.com/pRieStaKos)
* [#545](https://github.com/nghuuphuoc/bootstrapvalidator/pull/545): Portuguese (Brazil) language package, thanks to [@marcuscarvalho6](https://github.com/marcuscarvalho6)
* [#598](https://github.com/nghuuphuoc/bootstrapvalidator/pull/598): Danish language package, thanks to [@Djarnis](https://github.com/Djarnis)
* [#674](https://github.com/nghuuphuoc/bootstrapvalidator/pull/674), [#677](https://github.com/nghuuphuoc/bootstrapvalidator/pull/677): Dutch language package, thanks to [@jvanderheide](https://github.com/jvanderheide)
* [#679](https://github.com/nghuuphuoc/bootstrapvalidator/pull/679): Add Arabic language package, thanks to [@Arkni](https://github.com/Arkni)

## v0.5.0 (2014-07-14)

__New Features__
* [#2](https://github.com/nghuuphuoc/bootstrapvalidator/issues/2), [#387](https://github.com/nghuuphuoc/bootstrapvalidator/issues/387): Provide the default error messages
* [#93](https://github.com/nghuuphuoc/bootstrapvalidator/issues/93), [#385](https://github.com/nghuuphuoc/bootstrapvalidator/issues/385): Support translating error messages. Provide the Vietnamese language file
* [#121](https://github.com/nghuuphuoc/bootstrapvalidator/issues/121): Add events for form validate successfully or not
* [#125](https://github.com/nghuuphuoc/bootstrapvalidator/issues/125): Support dynamic fields
* [#130](https://github.com/nghuuphuoc/bootstrapvalidator/pull/130): Add ```addField()``` and ```removeField()``` methods for managing dynamic fields, thanks to [@jcnmulio](https://github.com/jcnmulio)
* [#164](https://github.com/nghuuphuoc/bootstrapvalidator/issues/164): Add ```container``` option for indicating the element showing all errors
* [#175](https://github.com/nghuuphuoc/bootstrapvalidator/issues/175): Showing errors in tooltip or popover
* [#195](https://github.com/nghuuphuoc/bootstrapvalidator/issues/195): Add events for field validation
* [#211](https://github.com/nghuuphuoc/bootstrapvalidator/issues/211), [#235](https://github.com/nghuuphuoc/bootstrapvalidator/issues/235): Add new method ```getInvalidFields()``` that returns all invalid fields
* [#275](https://github.com/nghuuphuoc/bootstrapvalidator/issues/275): Add ```destroy()``` method
* [#282](https://github.com/nghuuphuoc/bootstrapvalidator/issues/282), [#347](https://github.com/nghuuphuoc/bootstrapvalidator/issues/347): Use error message that is returned from [callback](http://bootstrapvalidator.com/validators/callback/), [remote](http://bootstrapvalidator.com/validators/remote/) validators
* Add ```status.field.bv``` event which is triggered after updating the field status. It can be used to solve [#300](https://github.com/nghuuphuoc/bootstrapvalidator/issues/300), [#301](https://github.com/nghuuphuoc/bootstrapvalidator/issues/301)
* [#316](https://github.com/nghuuphuoc/bootstrapvalidator/issues/316): Add ```isValidContainer(container)``` method
* [#320](https://github.com/nghuuphuoc/bootstrapvalidator/issues/320): Add ```separator``` option to the [date validator](http://bootstrapvalidator.com/validators/date/)
* [#323](https://github.com/nghuuphuoc/bootstrapvalidator/issues/323): Add ```isValidField(field)``` method
* [#324](https://github.com/nghuuphuoc/bootstrapvalidator/issues/324): Add ```success.validator.bv``` and ```error.validator.bv``` events triggered after a validator completes
* [#332](https://github.com/nghuuphuoc/bootstrapvalidator/pull/332): Add UK phone number support for the [phone validator](http://bootstrapvalidator.com/validators/phone/), thanks to [@aca02djr](https://github.com/aca02djr)
* [#336](https://github.com/nghuuphuoc/bootstrapvalidator/issues/336): Add ```$field``` instance to the [callback validator](http://bootstrapvalidator.com/validators/callback/)
* [#356](https://github.com/nghuuphuoc/bootstrapvalidator/issues/356): Add ```group``` option
* [#374](https://github.com/nghuuphuoc/bootstrapvalidator/pull/374): Add Singapore postal code to the [zipCode validator](http://bootstrapvalidator.com/validators/zipCode/), thanks to [@thisisclement](https://github.com/thisisclement)
* [#406](https://github.com/nghuuphuoc/bootstrapvalidator/issues/406): Add ```revalidateField(field)``` method
* [#433](https://github.com/nghuuphuoc/bootstrapvalidator/issues/433): Add ```resetField(field, resetValue)``` method
* [#434](https://github.com/nghuuphuoc/bootstrapvalidator/issues/434): Add ```updateMessage(field, validator, message)``` method

__Changes__
* [#42](https://github.com/nghuuphuoc/bootstrapvalidator/issues/42): Remove the submit button from ```submitHandler()```. You can use new ```getSubmitButton()``` method to get the clicked submit button
* [#109](https://github.com/nghuuphuoc/bootstrapvalidator/issues/109): Remove the ```setLiveMode()``` method
* ```$.fn.bootstrapValidator.helpers``` renames ```mod_11_10``` to ```mod11And10```, ```mod_37_36``` to ```mod37And36```
* Remove ```submitHandler()``` option. Use ```success.form.bv``` event instead:

_v0.4.5 and earlier versions_
```javascript
$(form).bootstrapValidator({
    submitHandler: function(form, validator, submitButton) {
        ...
    }
});
```

_v0.5.0_
Using ```success.form.bv``` event:

```javascript
$(form)
    .bootstrapValidator(options)
    .on('success.form.bv', function(e) {
        // Prevent form submission
        e.preventDefault();

        var $form        = $(e.target),
            validator    = $form.data('bootstrapValidator'),
            submitButton = validator.getSubmitButton();

        // Do whatever you want here ...
    });
```

__Improvements__
* [#244](https://github.com/nghuuphuoc/bootstrapvalidator/pull/244): Only enable the submit buttons if all fields are valid, thanks to [@smeagol74](https://github.com/smeagol74)
* [#262](https://github.com/nghuuphuoc/bootstrapvalidator/issues/262): Improve the [```updateStatus()``` method](http://bootstrapvalidator.com/api/#update-status). The plugin now doesn't show the errors, feedback icons of given field if there are uncompleted validators
* [#274](https://github.com/nghuuphuoc/bootstrapvalidator/pull/274): Fix feedback icons in ```input-group```, thanks to [@tiagofontella](https://github.com/tiagofontella)
* [#287](https://github.com/nghuuphuoc/bootstrapvalidator/issues/287), [#291](https://github.com/nghuuphuoc/bootstrapvalidator/issues/291): Only send the submit button which is clicked. It's an enhancement for [#238](https://github.com/nghuuphuoc/bootstrapvalidator/issues/238)
* [#297](https://github.com/nghuuphuoc/bootstrapvalidator/issues/297): Disable feedback icons for particular fields
* [#348](https://github.com/nghuuphuoc/bootstrapvalidator/issues/348): The [uri validator](http://bootstrapvalidator.com/validators/uri/) now provides an option to support private/local network address
* [#364](https://github.com/nghuuphuoc/bootstrapvalidator/issues/364): Clicking the feedback icon also effect to the checkbox, radio fields
* [#366](https://github.com/nghuuphuoc/bootstrapvalidator/issues/366): Don't change the enable setting when the new one is the same
* [#371](https://github.com/nghuuphuoc/bootstrapvalidator/pull/371): Add H character to the Canadian postcode, thanks to [@jzhang6](https://github.com/jzhang6)
* [#382](https://github.com/nghuuphuoc/bootstrapvalidator/issues/382): Add JSHint to Grunt build
* [#388](https://github.com/nghuuphuoc/bootstrapvalidator/issues/388): Allow to override the default options. Useful for using multiple forms in the same page
* [#393](https://github.com/nghuuphuoc/bootstrapvalidator/pull/393): The [remote validator](http://bootstrapvalidator.com/validators/remote/) adds support for dynamic ```url``` and method type (GET/POST), thanks to [@ericnakagawa](https://github.com/ericnakagawa)
* [#416](https://github.com/nghuuphuoc/bootstrapvalidator/issues/416), [#448](https://github.com/nghuuphuoc/bootstrapvalidator/pull/448): Add ```updateOption()``` method for updating the particular validator option, thanks to [@AlaskanShade](https://github.com/AlaskanShade)
* [#420](https://github.com/nghuuphuoc/bootstrapvalidator/issues/420): Enable/disable particular validator
* [#422](https://github.com/nghuuphuoc/bootstrapvalidator/issues/422): Exclude particular field by ```excluded``` option or ```data-bv-excluded``` attribute
* [#426](https://github.com/nghuuphuoc/bootstrapvalidator/issues/426): Add test suite
* [#430](https://github.com/nghuuphuoc/bootstrapvalidator/issues/430): [between](http://bootstrapvalidator.com/validators/between/), [greaterThan](http://bootstrapvalidator.com/validators/greaterThan/), [lessThan](http://bootstrapvalidator.com/validators/lessThan/) add support for comparing to other field, return value of a callback function
* [#431](https://github.com/nghuuphuoc/bootstrapvalidator/issues/431): Add built time to the build file
* [#432](https://github.com/nghuuphuoc/bootstrapvalidator/issues/432): Define the callback via ```data-bv-callback-callback``` attribute
* [#447](https://github.com/nghuuphuoc/bootstrapvalidator/pull/447): [zipCode validator](http://bootstrapvalidator.com/validators/zipCode/) allow to set the country code via another field or callback, thanks to [@AlaskanShade](https://github.com/AlaskanShade)
* [#451](https://github.com/nghuuphuoc/bootstrapvalidator/pull/451): Validation of numeric fields with decimal steps, thanks to [@Azuka](https://github.com/Azuka)
* [#456](https://github.com/nghuuphuoc/bootstrapvalidator/issues/456): Adjust the feedback icon position for ```.input-group``` element
* [#465](https://github.com/nghuuphuoc/bootstrapvalidator/issues/465): Support dynamic message

__Bug Fixes__
* [#288](https://github.com/nghuuphuoc/bootstrapvalidator/issues/288): Fix [date validator](http://bootstrapvalidator.com/validators/date/) issue on IE8
* [#292](https://github.com/nghuuphuoc/bootstrapvalidator/pull/292): Fix identical validator issue with not clearing ```has-error``` class, thanks to [@alavers](https://github.com/alavers)
* [#305](https://github.com/nghuuphuoc/bootstrapvalidator/pull/305), [#306](https://github.com/nghuuphuoc/bootstrapvalidator/pull/306), [#307](https://github.com/nghuuphuoc/bootstrapvalidator/pull/307): Fix ```inclusive``` option in the [between](http://bootstrapvalidator.com/validators/between/), [greaterThan](http://bootstrapvalidator.com/validators/greaterThan/) and [lessThan](http://bootstrapvalidator.com/validators/lessThan/) validators, thanks to [@johanronn77](https://github.com/johanronn77)
* [#310](https://github.com/nghuuphuoc/bootstrapvalidator/issues/310), [#475](https://github.com/nghuuphuoc/bootstrapvalidator/issues/475): The [date validator](http://bootstrapvalidator.com/validators/date/) still return valid if the value doesn't contain digits
* [#311](https://github.com/nghuuphuoc/bootstrapvalidator/issues/311): file validation extension is case sensitive
* [#312](https://github.com/nghuuphuoc/bootstrapvalidator/pull/312): Fix broacast typo in the [uri validator](http://bootstrapvalidator.com/validators/uri/), thanks to [@mrpollo](https://github.com/mrpollo)
* [#313](https://github.com/nghuuphuoc/bootstrapvalidator/issues/313): Fix the [file validator](http://bootstrapvalidator.com/validators/file/) issue on IE 8
* [#314](https://github.com/nghuuphuoc/bootstrapvalidator/issues/314): The [creditCard validator](http://bootstrapvalidator.com/validators/creditCard/) doesn't work on IE 8
* [#315](https://github.com/nghuuphuoc/bootstrapvalidator/issues/315): The [cvv validator](http://bootstrapvalidator.com/validators/cvv/) doesn't work on IE 8
* [#325](https://github.com/nghuuphuoc/bootstrapvalidator/issues/325): The [```threshold``` option](http://bootstrapvalidator.com/settings/#threshold) doesn't work on IE 8
* [#358](https://github.com/nghuuphuoc/bootstrapvalidator/issues/358): The [zipCode validator](http://bootstrapvalidator.com/validators/zipCode/) doesn't work for Canadian zip code
* [#375](https://github.com/nghuuphuoc/bootstrapvalidator/issues/375): Don't submit form when the [callback validator](http://bootstrapvalidator.com/validators/callback/) completes and the submit button isn't clicked
* [#377](https://github.com/nghuuphuoc/bootstrapvalidator/issues/377): The [id](http://bootstrapvalidator.com/validators/id/), [vat](http://bootstrapvalidator.com/validators/vat/) validators should return ```false``` if the country code is not supported
* [#389](https://github.com/nghuuphuoc/bootstrapvalidator/issues/389): When using multiple forms with HTML attributes on the same page, the plugin options will be the same as the last one
* [#401](https://github.com/nghuuphuoc/bootstrapvalidator/issues/401): [stringLength validator](http://bootstrapvalidator.com/validators/stringLength/) allows spaces after max length
* [#411](https://github.com/nghuuphuoc/bootstrapvalidator/pull/411): Fix the [ean validator](http://bootstrapvalidator.com/validators/ean/) when the check digit is zero, thanks to [@manish-in-java](https://github.com/manish-in-java)
* [#417](https://github.com/nghuuphuoc/bootstrapvalidator/issues/417): IPv6 validator doesn't work
* [#425](https://github.com/nghuuphuoc/bootstrapvalidator/issues/425): Custom trigger event is ignored by field validators
* [#447](https://github.com/nghuuphuoc/bootstrapvalidator/pull/447): Skip the ```_isExcluded()``` when initializing the form. This fixes [#269](https://github.com/nghuuphuoc/bootstrapvalidator/issues/269), [#273](https://github.com/nghuuphuoc/bootstrapvalidator/issues/273). Thanks to [@AlaskanShade](https://github.com/AlaskanShade)
* [#483](https://github.com/nghuuphuoc/bootstrapvalidator/issues/483), [#487](https://github.com/nghuuphuoc/bootstrapvalidator/pull/487): Added the letters 'W' and 'Z' in the second and third letter list for Canada postal code, thanks to [@jzhang6](https://github.com/jzhang6)
* [#492](https://github.com/nghuuphuoc/bootstrapvalidator/issues/492), [#493](https://github.com/nghuuphuoc/bootstrapvalidator/pull/493): Fixed Chilean ID (RUT/RUN) finished in 'K' or 'k', thanks to [@marceloampuerop6](https://github.com/marceloampuerop6)

__Document__
* [#259](https://github.com/nghuuphuoc/bootstrapvalidator/issues/259): Typo "Support almost Bootstrap forms", thanks to [@lloydde](https://github.com/lloydde)
* [#261](https://github.com/nghuuphuoc/bootstrapvalidator/pull/261): English fix to 'amazing contributors' section, thanks to [@lloydde](https://github.com/lloydde)
* [#278](https://github.com/nghuuphuoc/bootstrapvalidator/pull/278): Update the [choice validator](http://bootstrapvalidator.com/validators/choice/) document, thanks to [@MrC0mm0n](https://github.com/MrC0mm0n)
* [#303](https://github.com/nghuuphuoc/bootstrapvalidator/pull/303): Fix typo in [remote validator](http://bootstrapvalidator.com/validators/remote/) document, thanks to [@MartinDevillers](https://github.com/MartinDevillers)
* [#334](https://github.com/nghuuphuoc/bootstrapvalidator/pull/334): No ID is specified on the form object for registration, thanks to [@jjshoe](https://github.com/jjshoe)
* [#423](https://github.com/nghuuphuoc/bootstrapvalidator/pull/423): Add default column to settings table, thanks to [@MartinDevillers](https://github.com/MartinDevillers)
* [#452](https://github.com/nghuuphuoc/bootstrapvalidator/pull/452): Update 'United State' to 'United States', thanks to [@mike1e](https://github.com/mike1e)

__Language Packages__
* [#396](https://github.com/nghuuphuoc/bootstrapvalidator/pull/396): German language package, thanks to [@logemann](https://github.com/logemann)
* [#474](https://github.com/nghuuphuoc/bootstrapvalidator/pull/474): Hungarian language package, thanks to [@blackfyre](https://github.com/blackfyre)
* [#478](https://github.com/nghuuphuoc/bootstrapvalidator/pull/478): Simplified and traditional Chinese language package, thanks to [@tureki](https://github.com/tureki)
* [#494](https://github.com/nghuuphuoc/bootstrapvalidator/pull/494): Chilean Spanish language package, thanks to [@marceloampuerop6](https://github.com/marceloampuerop6)

## v0.4.5 (2014-05-15)

* Add ```$.fn.bootstrapValidator.helpers.date``` for validating a date, re-used in [date](http://bootstrapvalidator.com/validators/date/), [id](http://bootstrapvalidator.com/validators/id/), [vat](http://bootstrapvalidator.com/validators/vat/) validators
* [#233](https://github.com/nghuuphuoc/bootstrapvalidator/issues/233): Add ```threshold``` option
* [#232](https://github.com/nghuuphuoc/bootstrapvalidator/issues/232): Add [id validator](http://bootstrapvalidator.com/validators/id/)
* [#242](https://github.com/nghuuphuoc/bootstrapvalidator/issues/242): Add ```separator``` option to the [numeric validator](http://bootstrapvalidator.com/validators/numeric/)
* [#248](https://github.com/nghuuphuoc/bootstrapvalidator/issues/248): Add [isin (International Securities Identification Number) validator](http://bootstrapvalidator.com/validators/issn/)
* [#250](https://github.com/nghuuphuoc/bootstrapvalidator/issues/250): Add [rtn (Routing transit number) validator](http://bootstrapvalidator.com/validators/rtn/)
* [#251](https://github.com/nghuuphuoc/bootstrapvalidator/issues/251): Add [cusip (North American Securities) validator](http://bootstrapvalidator.com/validators/cusip/)
* [#252](https://github.com/nghuuphuoc/bootstrapvalidator/issues/252): Add [sedol (Stock Exchange Daily Official List) validator](http://bootstrapvalidator.com/validators/sedol/)
* The [zipCode validator](http://bootstrapvalidator.com/validators/zipCode/) adds support for Italian, Dutch postcodes
* [#245](https://github.com/nghuuphuoc/bootstrapvalidator/pull/245): The [cvv validator](http://bootstrapvalidator.com/validators/cvv/) should support spaces in credit card, thanks to [@evilchili](https://github.com/evilchili)
* Change default ```submitButtons``` to ```[type="submit"]``` to support ```input type="submit"```
* [#226](https://github.com/nghuuphuoc/bootstrapvalidator/issues/226): Fix the conflict issue with MooTools
* [#238](https://github.com/nghuuphuoc/bootstrapvalidator/issues/238): The submit buttons are not sent
* [#253](https://github.com/nghuuphuoc/bootstrapvalidator/issues/253): The [iban validator](http://bootstrapvalidator.com/validators/iban/) does not work on IE8
* [#257](https://github.com/nghuuphuoc/bootstrapvalidator/issues/257): Plugin method invocation don't work
* Fix the issue that the hidden fields generated by other plugins might not be validated
* When parsing options from HTML attributes, don't add the field which hasn't validators. It improves fixes for [#191](https://github.com/nghuuphuoc/bootstrapvalidator/issues/191), [#223](https://github.com/nghuuphuoc/bootstrapvalidator/issues/223)

## v0.4.4 (2014-05-05)

* Add ```$.fn.bootstrapValidator.helpers.mod_11_10``` method that implements modulus 11, 10 (ISO 7064) algorithm. The helper is then reused in validating [German and Croatian VAT](http://bootstrapvalidator.com/validators/vat/) numbers
* Add ```$.fn.bootstrapValidator.helpers.mod_37_36``` method that implements modulus 37, 36 (ISO 7064) algorithm, used in [GRid validator](http://bootstrapvalidator.com/validators/grid/)
* [#213](https://github.com/nghuuphuoc/bootstrapvalidator/issues/213): Add [EAN (International Article Number) validator](http://bootstrapvalidator.com/validators/ean/)
* [#214](https://github.com/nghuuphuoc/bootstrapvalidator/issues/214): Add [GRId (Global Release Identifier) validator](http://bootstrapvalidator.com/validators/grid/)
* [#215](https://github.com/nghuuphuoc/bootstrapvalidator/issues/215): Add [IMEI (International Mobile Station Equipment Identity) validator](http://bootstrapvalidator.com/validators/imei/)
* [#216](https://github.com/nghuuphuoc/bootstrapvalidator/issues/216): Add [ISMN (International Standard Music Number) validator](http://bootstrapvalidator.com/validators/ismn/)
* [#217](https://github.com/nghuuphuoc/bootstrapvalidator/issues/217): Add [ISSN (International Standard Serial Number) validator](http://bootstrapvalidator.com/validators/issn/)
* [#191](https://github.com/nghuuphuoc/bootstrapvalidator/issues/191), [#223](https://github.com/nghuuphuoc/bootstrapvalidator/issues/223): Support using both the ```name``` attribute and ```selector``` option for field
* [#206](https://github.com/nghuuphuoc/bootstrapvalidator/issues/206): Indicate success/error tab
* [#220](https://github.com/nghuuphuoc/bootstrapvalidator/issues/220): Add UK postcode support for the [zipCode validator](http://bootstrapvalidator.com/validators/zipCode/)
* [#229](https://github.com/nghuuphuoc/bootstrapvalidator/issues/229): The [date validator](http://bootstrapvalidator.com/validators/date/) supports seconds
* [#231](https://github.com/nghuuphuoc/bootstrapvalidator/issues/231): Wrong prefix of Laser [credit card](http://bootstrapvalidator.com/validators/creditCard/) number

## v0.4.3 (2014-04-26)

* Add ```$.fn.bootstrapValidator.helpers.luhn``` method that implements the Luhn algorithm
* [#77](https://github.com/nghuuphuoc/bootstrapvalidator/issues/77): Add [file validator](http://bootstrapvalidator.com/validators/file/)
* [#179](https://github.com/nghuuphuoc/bootstrapvalidator/issues/179): Add [vat validator](http://bootstrapvalidator.com/validators/vat/), support 32 countries
* [#198](https://github.com/nghuuphuoc/bootstrapvalidator/pull/198), [#199](https://github.com/nghuuphuoc/bootstrapvalidator/pull/199): Add Canadian Postal Code support for the [zipCode validator](http://bootstrapvalidator.com/validators/zipCode/), thanks to [@Francismori7](https://github.com/Francismori7)
* [#201](https://github.com/nghuuphuoc/bootstrapvalidator/issues/201): The [choice validator](http://bootstrapvalidator.com/validators/choice/) supports ```select``` element
* [#202](https://github.com/nghuuphuoc/bootstrapvalidator/issues/202): Activate tab containing the first invalid field
* [#205](https://github.com/nghuuphuoc/bootstrapvalidator/issues/205): Plugin method invocation
* [#207](https://github.com/nghuuphuoc/bootstrapvalidator/issues/207): IE8 error. The field is only validated when its value is changed. It also fixes [#153](https://github.com/nghuuphuoc/bootstrapvalidator/issues/153), [#193](https://github.com/nghuuphuoc/bootstrapvalidator/issues/193), [#197](https://github.com/nghuuphuoc/bootstrapvalidator/issues/197)
* [#209](https://github.com/nghuuphuoc/bootstrapvalidator/issues/209): The [```excluded: ':disabled'``` setting](http://bootstrapvalidator.com/settings/#excluded) does not work on IE 8, thanks to [@adgrafik](https://github.com/adgrafik)
* [#210](https://github.com/nghuuphuoc/bootstrapvalidator/issues/210): The [isbn validator](http://bootstrapvalidator.com/validators/isbn/) accepts letters and special characters

## v0.4.2 (2014-04-19)

* [#168](https://github.com/nghuuphuoc/bootstrapvalidator/pull/168): Add [siren](http://bootstrapvalidator.com/validators/siren/) and [siret](http://bootstrapvalidator.com/validators/siret/) validators, thanks to [@jswale](https://github.com/jswale)
* [#177](https://github.com/nghuuphuoc/bootstrapvalidator/issues/177): Add [Vehicle Identification Number (VIN) validator](http://bootstrapvalidator.com/validators/vin/)
* [#184](https://github.com/nghuuphuoc/bootstrapvalidator/issues/184): Add [```excluded``` option](http://bootstrapvalidator.com/settings/#excluded)
* [#171](https://github.com/nghuuphuoc/bootstrapvalidator/pull/171): The [phone validator](http://bootstrapvalidator.com/validators/phone/) now supports +1 country code and area code for US phone number, thanks to [@tomByrer](https://github.com/tomByrer)
* [#173](https://github.com/nghuuphuoc/bootstrapvalidator/pull/173): The [remote validator](http://bootstrapvalidator.com/validators/remote/) allows to override ```name``` option, thanks to [@jswale](https://github.com/jswale)
* [#178](https://github.com/nghuuphuoc/bootstrapvalidator/pull/178): Do not validate fields that ```enabled``` is set to ```false```, thanks to [@henningda](https://github.com/henningda)
* [#182](https://github.com/nghuuphuoc/bootstrapvalidator/pull/182): Improve [zipCode validator](http://bootstrapvalidator.com/validators/zipCode/), thanks to [@gercheq](https://github.com/gercheq)
* [#169](https://github.com/nghuuphuoc/bootstrapvalidator/pull/169): Better to say: ```{validatorname}``` and ```{validatoroption}``` must be lowercase, thanks to [@tomByrer](https://github.com/tomByrer)

## v0.4.1 (2014-04-12)

* [#144](https://github.com/nghuuphuoc/bootstrapvalidator/issues/144), [#158](https://github.com/nghuuphuoc/bootstrapvalidator/issues/158): Fixed an issue that the custom submit handler is not fired from the second time
* [#106](https://github.com/nghuuphuoc/bootstrapvalidator/issues/106): Prevent the [```validate()```](http://bootstrapvalidator.com/api/#validate) method from submit the form automatically. So we can call ```validate()``` to validate the form
* [#131](https://github.com/nghuuphuoc/bootstrapvalidator/issues/131): Doesn't trigger validation on the first focus
* [#145](https://github.com/nghuuphuoc/bootstrapvalidator/issues/145): The row state is now only marked as success if all fields on it are valid
* [#157](https://github.com/nghuuphuoc/bootstrapvalidator/issues/157): Added support for element outside of form using the [```selector```](http://bootstrapvalidator.com/settings/#fields) option
* [#159](https://github.com/nghuuphuoc/bootstrapvalidator/issues/159), [#163](https://github.com/nghuuphuoc/bootstrapvalidator/pull/163): User doesn't need to submit the form twice when remote validator complete, thanks to [@jswale](https://github.com/jswale)
* [#162](https://github.com/nghuuphuoc/bootstrapvalidator/pull/162): Fix errors in IE 8, thanks to [@adgrafik](https://github.com/adgrafik)
* [#166](https://github.com/nghuuphuoc/bootstrapvalidator/issues/166), [#167](https://github.com/nghuuphuoc/bootstrapvalidator/pull/167): The [phone validator](http://bootstrapvalidator.com/validators/phone/) now also checks the length of US phone number, thanks to [@gercheq](https://github.com/gercheq)

## v0.4.0 (2014-04-03)

* [#14](https://github.com/nghuuphuoc/bootstrapvalidator/issues/14), [#57](https://github.com/nghuuphuoc/bootstrapvalidator/issues/57): Set validator option by using [HTML 5 attributes](http://bootstrapvalidator.com/examples/#attribute)

Form attributes:

```html
<form
    data-bv-message="This value is not valid"
    data-bv-feedbackicons-valid="glyphicon glyphicon-ok"
    data-bv-feedbackicons-invalid="glyphicon glyphicon-remove"
    data-bv-feedbackicons-validating="glyphicon glyphicon-refresh"
    >
```

Field attributes:

```html
<input type="text" class="form-control" name="username"
    data-bv-message="The username is not valid"
    data-bv-notempty data-bv-notempty-message="The username is required and cannot be empty"
    data-bv-stringlength="true" data-bv-stringlength-min="6" data-bv-stringlength-max="30" data-bv-stringlength-message="The username must be more than 6 and less than 30 characters long"
    data-bv-different="true" data-bv-different-field="password" data-bv-different-message="The username and password cannot be the same as each other"
    data-bv-remote="true" data-bv-remote-url="remote.php" data-bv-remote-message="The username is not available"
    />
```

* Support [HTML 5 input types](http://bootstrapvalidator.com/examples/#html5):

HTML 5 attribute      | Validator
----------------------|----------
```min="..."```       | [greaterThan validator](http://bootstrapvalidator.com/validators/greaterThan/)
```max="..."```       | [lessThan validator](http://bootstrapvalidator.com/validators/lessThan/)
```maxlength="..."``` | [stringLength validator](http://bootstrapvalidator.com/validators/stringLength/)
```pattern="..."```   | [regexp validator](http://bootstrapvalidator.com/validators/regexp/)
```required```        | [notEmpty validator](http://bootstrapvalidator.com/validators/notEmpty/)
```type="color"```    | [hexColor validator](http://bootstrapvalidator.com/validators/hexColor/)
```type="email"```    | [emailAddress validator](http://bootstrapvalidator.com/validators/emailAddress/)
```type="range"```    | [between validator](http://bootstrapvalidator.com/validators/between/)
```type="url"```      | [uri validator](http://bootstrapvalidator.com/validators/uri/)

* [#74](https://github.com/nghuuphuoc/bootstrapvalidator/issues/74), [#103](https://github.com/nghuuphuoc/bootstrapvalidator/issues/103), [#122](https://github.com/nghuuphuoc/bootstrapvalidator/issues/122): Set the custom [trigger event](http://bootstrapvalidator.com/settings/#trigger)

It's possible to use ```data-bv-trigger``` attribute:

```html
<form data-bv-trigger="keyup">
    <input type="text" class="form-control" name="firstName" placeholder="First name"
           data-bv-trigger="keyup" />
    ...
    <input type="text" class="form-control" name="lastName" placeholder="First name"
           data-bv-trigger="blur" />
</form>
```

or ```trigger``` option:

```javascript
$(form).bootstrapValidator({
    trigger: 'blur',            // Set for all fields
    fields: {
        firstName: {
            trigger: 'keyup',   // Custom for each field. Can be 'event1 event2 event3'
            validators: {
                ...
            }
        },
        lastName: {
            trigger: 'blur',
            validators: {
                ...
            }
        }
    }
});
```

* [#136](https://github.com/nghuuphuoc/bootstrapvalidator/issues/136): Support multiple elements with the [same name](http://bootstrapvalidator.com/examples/#fields-with-same-name)

```html
<div class="form-group">
    <input class="form-control" type="text" name="surveyAnswer[]" />
</div>
<div class="form-group">
    <input class="form-control" type="text" name="surveyAnswer[]" />
</div>
<div class="form-group">
    <input class="form-control" type="text" name="surveyAnswer[]" />
</div>
```

* [#109](https://github.com/nghuuphuoc/bootstrapvalidator/issues/109): Add [```setLiveMode()``` method](http://bootstrapvalidator.com/api/#set-live-mode) to turn on/off the live validating mode
* [#114](https://github.com/nghuuphuoc/bootstrapvalidator/issues/114): Add [iban validator](http://bootstrapvalidator.com/validators/iban/) for validating IBAN (International Bank Account Number)
* [#116](https://github.com/nghuuphuoc/bootstrapvalidator/issues/116): Add [uuid validator](http://bootstrapvalidator.com/validators/uuid/), support UUID v3, v4, v5
* [#128](https://github.com/nghuuphuoc/bootstrapvalidator/issues/128): Add [numeric validator](http://bootstrapvalidator.com/validators/numeric/)
* [#135](https://github.com/nghuuphuoc/bootstrapvalidator/issues/135): Add [integer validator](http://bootstrapvalidator.com/validators/integer/)
* [#138](https://github.com/nghuuphuoc/bootstrapvalidator/issues/138): Add [hex validator](http://bootstrapvalidator.com/validators/hex/)
* [#139](https://github.com/nghuuphuoc/bootstrapvalidator/issues/139): Add [stringCase validator](http://bootstrapvalidator.com/validators/stringCase/) to check a string is lower or upper case
* [#137](https://github.com/nghuuphuoc/bootstrapvalidator/issues/137): Register the plugin with [jQuery plugins site](http://plugins.jquery.com/)
* [#133](https://github.com/nghuuphuoc/bootstrapvalidator/issues/133): The [regexp validator](http://bootstrapvalidator.com/validators/regexp/) allows to pass a string
* [#140](https://github.com/nghuuphuoc/bootstrapvalidator/pull/140): Do not validate hidden (```type="hidden"```) and invisible element, thanks to [@easonhan007](https://github.com/easonhan007)
* [```disableSubmitButtons()```](http://bootstrapvalidator.com/api/#disable-submit-buttons) is now marked as a public API
* The first parameter of [```updateStatus()``` method](http://bootstrapvalidator.com/api/#update-status) now accepts the field name only
* [#126](https://github.com/nghuuphuoc/bootstrapvalidator/issues/126): Submit button remains disabled after calling custom ```submitHandler``` and the form is valid
* [#132](https://github.com/nghuuphuoc/bootstrapvalidator/issues/132): The ```fields.[fieldName].message``` option is not used when showing the error message

## v0.3.3 (2014-03-27)

* [#50](https://github.com/nghuuphuoc/bootstrapvalidator/issues/50): Don't validate disabled element
* [#34](https://github.com/nghuuphuoc/bootstrapvalidator/issues/34), [#105](https://github.com/nghuuphuoc/bootstrapvalidator/issues/105): Cannot call ```form.submit()``` inside [```submitHandler```](http://bootstrapvalidator.com/settings/#submit-handler)
* [#77](https://github.com/nghuuphuoc/bootstrapvalidator/issues/77), [#117](https://github.com/nghuuphuoc/bootstrapvalidator/issues/117): The [notEmpty validator](http://bootstrapvalidator.com/validators/notEmpty/) doesn't work on file input
* [#120](https://github.com/nghuuphuoc/bootstrapvalidator/pull/120): Handle case where a field is removed after the bootstrap validation, thanks to [@patmoore](https://github.com/patmoore)

## v0.3.2 (2014-03-21)

* [#56](https://github.com/nghuuphuoc/bootstrapvalidator/issues/56): Add [```selector``` option](http://bootstrapvalidator.com/settings/#fields) for each field. The field can be defined by CSS validator instead of the ```name``` attribute
* [#107](https://github.com/nghuuphuoc/bootstrapvalidator/issues/107): Add [```container``` option](http://bootstrapvalidator.com/settings/#fields) for each field to indicate where the error messages are shown
* [#5](https://github.com/nghuuphuoc/bootstrapvalidator/issues/5): Add [ip validator](http://bootstrapvalidator.com/validators/ip/). Support both IPv4 and IPv6
* [#6](https://github.com/nghuuphuoc/bootstrapvalidator/issues/6): Add [isbn validator](http://bootstrapvalidator.com/validators/isbn/), support both ISBN 10 and ISBN 13
* [#7](https://github.com/nghuuphuoc/bootstrapvalidator/issues/7): Add [step validator](http://bootstrapvalidator.com/validators/step/)
* [#95](https://github.com/nghuuphuoc/bootstrapvalidator/issues/95): Add [mac validator](http://bootstrapvalidator.com/validators/mac/)
* [#96](https://github.com/nghuuphuoc/bootstrapvalidator/issues/96): Add [base64 validator](http://bootstrapvalidator.com/validators/base64/)
* [#97](https://github.com/nghuuphuoc/bootstrapvalidator/issues/97): Add [cvv validator](http://bootstrapvalidator.com/validators/cvv/)
* [#99](https://github.com/nghuuphuoc/bootstrapvalidator/issues/99), [#100](https://github.com/nghuuphuoc/bootstrapvalidator/pull/100): Add [phone validator](http://bootstrapvalidator.com/validators/phone/). Support US phone number only, thanks to [@gercheq](https://github.com/gercheq)
* [#112](https://github.com/nghuuphuoc/bootstrapvalidator/issues/112): [creditCard validator](http://bootstrapvalidator.com/validators/creditCard/) now validates both IIN ranges and length

## v0.3.1 (2014-03-17)

* [#4](https://github.com/nghuuphuoc/bootstrapvalidator/issues/4): Add [date validator](http://bootstrapvalidator.com/validators/date/)
* [#72](https://github.com/nghuuphuoc/bootstrapvalidator/issues/72), [#79](https://github.com/nghuuphuoc/bootstrapvalidator/issues/79): Improve [```updateStatus()``` method](http://bootstrapvalidator.com/api/#update-status) to make the plugin play well with another
* [#80](https://github.com/nghuuphuoc/bootstrapvalidator/issues/80): Add [```enabled``` option](http://bootstrapvalidator.com/settings/#fields) and [```enableFieldValidators()``` method](http://bootstrapvalidator.com/api/#enable-field-validators) to enable/disable all validators to given field
* [#90](https://github.com/nghuuphuoc/bootstrapvalidator/pull/90): Add ```bower.json``` file, thanks to [@ikanedo](https://github.com/ikanedo)
* [#3](https://github.com/nghuuphuoc/bootstrapvalidator/issues/3), [#92](https://github.com/nghuuphuoc/bootstrapvalidator/issues/92): Support more form controls on the same row
* Remove the ```columns``` option. Now the plugin works normally no matter how many columns the form uses
* [#102](https://github.com/nghuuphuoc/bootstrapvalidator/issues/102): The [```resetForm``` method](http://bootstrapvalidator.com/api/#reset-form) now only resets fields with validator rules
* [#82](https://github.com/nghuuphuoc/bootstrapvalidator/issues/82), [#84](https://github.com/nghuuphuoc/bootstrapvalidator/issues/84): The error messages aren't shown if the form field doesn't have label
* [#89](https://github.com/nghuuphuoc/bootstrapvalidator/issues/89): [```submitHandler```](http://bootstrapvalidator.com/settings/#submit-handler) or default submission isn't called after [remote validation](http://bootstrapvalidator.com/validators/remote/) completes

## v0.3.0 (2014-03-10)

* [#44](https://github.com/nghuuphuoc/bootstrapvalidator/issues/44): Rewrite entirely using Deferred
* [#26](https://github.com/nghuuphuoc/bootstrapvalidator/issues/26), [#27](https://github.com/nghuuphuoc/bootstrapvalidator/issues/27), [#67](https://github.com/nghuuphuoc/bootstrapvalidator/pull/67): Add [choice validator](http://bootstrapvalidator.com/validators/choice/), thanks to [@emilchristensen](https://github.com/emilchristensen)
* [#31](https://github.com/nghuuphuoc/bootstrapvalidator/issues/31): The [remote validator](http://bootstrapvalidator.com/validators/remote/) supports dynamic data
* [#36](https://github.com/nghuuphuoc/bootstrapvalidator/issues/36), [#58](https://github.com/nghuuphuoc/bootstrapvalidator/issues/58): Add method to [validate form](http://bootstrapvalidator.com/api/#validate) manually
* [#41](https://github.com/nghuuphuoc/bootstrapvalidator/issues/41): Disable submit button on successful form submit
* [#42](https://github.com/nghuuphuoc/bootstrapvalidator/issues/42): Add submit button to [```submitHandler()```](http://bootstrapvalidator.com/settings/#submit-handler) parameter
* [#48](https://github.com/nghuuphuoc/bootstrapvalidator/issues/48): Add optional [feedback icons](http://bootstrapvalidator.com/settings/#feedback-icons)
* [#64](https://github.com/nghuuphuoc/bootstrapvalidator/pull/64): Support [Danish zip code](http://bootstrapvalidator.com/validators/zipCode/), thanks to [@emilchristensen](https://github.com/emilchristensen)
* [#65](https://github.com/nghuuphuoc/bootstrapvalidator/pull/65): Support [Sweden zip code](http://bootstrapvalidator.com/validators/zipCode/), thanks to [@emilchristensen](https://github.com/emilchristensen)
* [#70](https://github.com/nghuuphuoc/bootstrapvalidator/issues/70): Support custom grid columns
* [#71](https://github.com/nghuuphuoc/bootstrapvalidator/issues/71): Show all errors
* [#76](https://github.com/nghuuphuoc/bootstrapvalidator/issues/76): Add [```resetForm()``` method](http://bootstrapvalidator.com/api/#reset-form)
* [#50](https://github.com/nghuuphuoc/bootstrapvalidator/issues/50): Don't validate disabled element
* [#51](https://github.com/nghuuphuoc/bootstrapvalidator/issues/51): Submit after submit doesn't work
* [#53](https://github.com/nghuuphuoc/bootstrapvalidator/issues/53), [#54](https://github.com/nghuuphuoc/bootstrapvalidator/pull/54): Fix [notEmpty validator](http://bootstrapvalidator.com/validators/notEmpty/) for radios and checkboxes, thanks to [@kristian-puccio](https://github.com/kristian-puccio)
* [#55](https://github.com/nghuuphuoc/bootstrapvalidator/issues/55): The plugin doesn't validate other fields if the [remote validator](http://bootstrapvalidator.com/validators/remote/) returns ```true```
* [#62](https://github.com/nghuuphuoc/bootstrapvalidator/pull/62): The [callback validator](http://bootstrapvalidator.com/validators/callback/) passes wrong parameter, thanks to [@iplus](https://github.com/iplus)
* [#59](https://github.com/nghuuphuoc/bootstrapvalidator/pull/59): Add example for Rail field convention, thanks to [@narutosanjiv](https://github.com/narutosanjiv)
* [#60](https://github.com/nghuuphuoc/bootstrapvalidator/pull/60): Update the installation guide, thanks to [@vaz](https://github.com/vaz)
* [#73](https://github.com/nghuuphuoc/bootstrapvalidator/issues/73): Describe which version should be [included](http://bootstrapvalidator.com/getting-started/#including-library) in the Usage section

## v0.2.2 (2014-01-07)

* [#15](https://github.com/nghuuphuoc/bootstrapvalidator/issues/15): Focus to the first invalid element
* [#31](https://github.com/nghuuphuoc/bootstrapvalidator/issues/31): [remote validator](http://bootstrapvalidator.com/validators/remote/): Allow to set additional data to remote URL
* [#32](https://github.com/nghuuphuoc/bootstrapvalidator/issues/32), [#43](https://github.com/nghuuphuoc/bootstrapvalidator/issues/43), [#47](https://github.com/nghuuphuoc/bootstrapvalidator/issues/47): Only validate not empty field
* [#39](https://github.com/nghuuphuoc/bootstrapvalidator/issues/39): Validate existing fields only
* [#34](https://github.com/nghuuphuoc/bootstrapvalidator/issues/34): Avoid from calling form submit recursively
* [#40](https://github.com/nghuuphuoc/bootstrapvalidator/issues/40): Fix the issue when the form label doesn't have class

## v0.2.1 (2013-11-08)

* [#29](https://github.com/nghuuphuoc/bootstrapvalidator/issues/29): Upgrade Bootstrap to v3.0.2
* [#30](https://github.com/nghuuphuoc/bootstrapvalidator/issues/30): Hide the error block containers before validating

## v0.2.0 (2013-10-21)

* [#24](https://github.com/nghuuphuoc/bootstrapvalidator/issues/24): Add [```live``` option](http://bootstrapvalidator.com/settings/#live)
* [#20](https://github.com/nghuuphuoc/bootstrapvalidator/issues/20): Add custom submit handler using [```submitHandler``` option](http://bootstrapvalidator.com/settings/#submit-handler)
* [#9](https://github.com/nghuuphuoc/bootstrapvalidator/issues/9): Add [creditCard validator](http://bootstrapvalidator.com/validators/creditCard/)
* [#18](https://github.com/nghuuphuoc/bootstrapvalidator/issues/18): Add [different validator](http://bootstrapvalidator.com/validators/different/)
* [#21](https://github.com/nghuuphuoc/bootstrapvalidator/issues/21): Add [callback validator](http://bootstrapvalidator.com/validators/callback/)
* [#22](https://github.com/nghuuphuoc/bootstrapvalidator/issues/22): Support form that labels are placed in extra small (```col-xs-```), small (```col-sm-```), medium (```col-md-```) elements
* [#25](https://github.com/nghuuphuoc/bootstrapvalidator/issues/25): The [regexp validator](http://bootstrapvalidator.com/validators/regexp/) does not work

## v0.1.1 (2013-10-17)

* Added [```submitButtons``` option](http://bootstrapvalidator.com/settings/#submit-buttons)
* [#16](https://github.com/nghuuphuoc/bootstrapvalidator/issues/16): Added disabling client side validation in HTML 5
* [#17](https://github.com/nghuuphuoc/bootstrapvalidator/issues/17): Added support for default Bootstrap form without labels
* [#19](https://github.com/nghuuphuoc/bootstrapvalidator/issues/19): Added support for select box validator

## v0.1.0 (2013-10-14)

* First release
* Provide various validators:
    - [between validator](http://bootstrapvalidator.com/validators/between/)
    - [digits validator](http://bootstrapvalidator.com/validators/digits/)
    - [emailAddress validator](http://bootstrapvalidator.com/validators/emailAddress/)
    - [greaterThan validator](http://bootstrapvalidator.com/validators/greaterThan/)
    - [hexColor validator](http://bootstrapvalidator.com/validators/hexColor/)
    - [identical validator](http://bootstrapvalidator.com/validators/identical/)
    - [lessThan validator](http://bootstrapvalidator.com/validators/lessThan/)
    - [notEmpty validator](http://bootstrapvalidator.com/validators/notEmpty/)
    - [regexp validator](http://bootstrapvalidator.com/validators/regexp/)
    - [remote validator](http://bootstrapvalidator.com/validators/remote/)
    - [stringLength validator](http://bootstrapvalidator.com/validators/stringLength/)
    - [uri validator](http://bootstrapvalidator.com/validators/uri/)
    - [zipCode validator](http://bootstrapvalidator.com/validators/zipCode/)