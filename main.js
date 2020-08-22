(function ($) {
    'use strict';

    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn()
        message.html(response);
        setTimeout(function () {
            message.fadeOut();
        }, 5000);

        form.find('input:not([type="submit"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        message.fadeIn()
        message.html(data.responseText);
        setTimeout(function () {
            message.fadeOut(5000);
        }, 5000);
    }

    form.submit(function (e) {
        e.preventDefault();
        console.log(this)
        form_data = new FormData(this)
        fetch(form.attr('action'), {
            method: 'POST',
            body: form_data
        })
            .then(async response => {
                const responseText = await response.text();
                if (response.ok) return responseText;
                else throw {
                    responseText
                }
            })
            .then(done_func)
            .catch(fail_func);
    });

    $(window).resize(function () {
        // This will execute whenever the window is resized
        let lebar = $(window).width(); // New width
        if (lebar < 600) {
            $("#select").html('<div class="select-wraper"><div class="row" id="select"><div class="col-12 form-group" dir="rtl"><label class="float-right"><strong> ހައިޡިއްޔަތު</strong></label><select id="" class="form-control select1" name="haisiyyathu"><option selected hidden="true" disabled>  ހައިޡިއްޔަތު ނަންގަވާ</option><option>އަމިއްލަގޮތުން</option><option>މޯލްޑިވިއަން ޑިމޮކްރެޓިކް ޕާޓީ</option><option>ދިވެހި ރައްޔިތުންގެ ޕާޓީ</option><option>އަދާލަތު ޕާޓީ</option><option>ޖުމްހޫރީ ޕާޓީ</option><option>ޕްރޮގްރެސިވް ޕާޓީ އޮފް މޯލްޑިވްސް</option><option>މޯލްޑިވްސް ޑިވެލޮޕްމެންޓް އެލަޔަންސް</option><option>މޯލްޑިވްސް ތާޑްވޭ ޑިމޮކްރެޓްސް</option><option>މޯލްޑިވްސް ލޭބަރ އެންޑް ސޯޝަލް ޑިމޮކްރެޓިކް ޕާޓީ</option><option>ޕީޕަލްސް ނޭޝަނަލް ކޮންގްރެސް</option><option>މޯލްޑިވްސް ރިފޯމް މޫވްމަންޓް</option></select></div></div><div class="row"><div class="col-12 form-group" dir="rtl"><label class="float-right"><strong>ކުރިމަތިލައްވާފައިވާ އިންތިޚާބު</strong></label><select id="" class="form-control select1" name="election" onchange="inthikhaabu(this)"><option selected hidden="true" disabled> ކުރިމަތިލައްވާފައިވާ އިންތިޚާބު ނަންގަވާ</option><option>ލޯކަލް ކައުންސިލްތަކުގެ އިންތިޚާބު</option><option>އަންހެނުންގެ ތަރައްޤީއަށް މަސައްކަތްކުރާ ކޮމިޓީގެ އިންތިޚާބު</option></select></div><div class="col-12 form-group" dir="rtl"><label class="float-right"><strong>ކުރިމަތިލި މަޤާމް</strong></label><input name="designation" id="designation" type="text" class="form-control" placeholder="ކުރިމަތިލި މަޤާމް"></textarea></div><div class="col-12 form-group" dir="rtl"><label class="float-right"><strong>ކުރިމަތިލި ދާއިރާ</strong></label><input name="dhaairaa" id="dhaairaa" type="text" class="form-control" placeholder="ކުރިމަތިލި ދާއިރާ" required></textarea></div></div></div>');
        }
        if (lebar > 600) {
            $("#select").html('<div class="select-wraper"><div class="row" id="select"><div class="col-5 form-group" dir="rtl"><label class="float-right"><strong> ހައިޡިއްޔަތު</strong></label><select id="" class="form-control select1" name="haisiyyathu"><option selected hidden="true" disabled>  ހައިޡިއްޔަތު ނަންގަވާ</option><option>އަމިއްލަގޮތުން</option><option>މޯލްޑިވިއަން ޑިމޮކްރެޓިކް ޕާޓީ</option><option>ދިވެހި ރައްޔިތުންގެ ޕާޓީ</option><option>އަދާލަތު ޕާޓީ</option><option>ޖުމްހޫރީ ޕާޓީ</option><option>ޕްރޮގްރެސިވް ޕާޓީ އޮފް މޯލްޑިވްސް</option><option>މޯލްޑިވްސް ޑިވެލޮޕްމެންޓް އެލަޔަންސް</option><option>މޯލްޑިވްސް ތާޑްވޭ ޑިމޮކްރެޓްސް</option><option>މޯލްޑިވްސް ލޭބަރ އެންޑް ސޯޝަލް ޑިމޮކްރެޓިކް ޕާޓީ</option><option>ޕީޕަލްސް ނޭޝަނަލް ކޮންގްރެސް</option><option>މޯލްޑިވްސް ރިފޯމް މޫވްމަންޓް</option></select></div><div class="col-7 form-group" dir="rtl"><label class="float-right"><strong>ކުރިމަތިލައްވާފައިވާ އިންތިޚާބު</strong></label><select id="" class="form-control select1" name="election" onchange="inthikhaabu(this)"><option selected hidden="true" disabled> ކުރިމަތިލައްވާފައިވާ އިންތިޚާބު ނަންގަވާ</option><option>ލޯކަލް ކައުންސިލްތަކުގެ އިންތިޚާބު</option><option>އަންހެނުންގެ ތަރައްޤީއަށް މަސައްކަތްކުރާ ކޮމިޓީގެ އިންތިޚާބު</option></select></div><div class="col-6 form-group" dir="rtl"><label class="float-right"><strong>ކުރިމަތިލި މަޤާމް</strong></label><input name="designation" id="designation" type="text" class="form-control" placeholder="ކުރިމަތިލި މަޤާމް"></textarea></div><div class="col-6 form-group" dir="rtl"><label class="float-right"><strong>ކުރިމަތިލި ދާއިރާ</strong></label><input name="dhaairaa" id="dhaairaa" type="text" class="form-control" placeholder="ކުރިމަތިލި ދާއިރާ" required></textarea></div></div></div>')
        }
    });
    $(window).on("load", function () {
        // This will execute whenever the window is reload
        let lebar = $(window).width(); // New width
        if (lebar < 600) {
            $("#select").html('<div class="select-wraper"><div class="row" id="select"><div class="col-12 form-group" dir="rtl"><label class="float-right"><strong> ހައިޡިއްޔަތު</strong></label><select id="" class="form-control select1" name="haisiyyathu"><option selected hidden="true" disabled>  ހައިޡިއްޔަތު ނަންގަވާ</option><option>އަމިއްލަގޮތުން</option><option>މޯލްޑިވިއަން ޑިމޮކްރެޓިކް ޕާޓީ</option><option>ދިވެހި ރައްޔިތުންގެ ޕާޓީ</option><option>އަދާލަތު ޕާޓީ</option><option>ޖުމްހޫރީ ޕާޓީ</option><option>ޕްރޮގްރެސިވް ޕާޓީ އޮފް މޯލްޑިވްސް</option><option>މޯލްޑިވްސް ޑިވެލޮޕްމެންޓް އެލަޔަންސް</option><option>މޯލްޑިވްސް ތާޑްވޭ ޑިމޮކްރެޓްސް</option><option>މޯލްޑިވްސް ލޭބަރ އެންޑް ސޯޝަލް ޑިމޮކްރެޓިކް ޕާޓީ</option><option>ޕީޕަލްސް ނޭޝަނަލް ކޮންގްރެސް</option><option>މޯލްޑިވްސް ރިފޯމް މޫވްމަންޓް</option></select></div></div><div class="row"><div class="col-12 form-group" dir="rtl"><label class="float-right"><strong>ކުރިމަތިލައްވާފައިވާ އިންތިޚާބު</strong></label><select id="" class="form-control select1" name="election" onchange="inthikhaabu(this)"><option selected hidden="true" disabled> ކުރިމަތިލައްވާފައިވާ އިންތިޚާބު ނަންގަވާ</option><option>ލޯކަލް ކައުންސިލްތަކުގެ އިންތިޚާބު</option><option>އަންހެނުންގެ ތަރައްޤީއަށް މަސައްކަތްކުރާ ކޮމިޓީގެ އިންތިޚާބު</option></select></div><div class="col-12 form-group" dir="rtl"><label class="float-right"><strong>ކުރިމަތިލި މަޤާމް</strong></label><input name="designation" id="designation" type="text" class="form-control" placeholder="ކުރިމަތިލި މަޤާމް"></textarea></div><div class="col-12 form-group" dir="rtl"><label class="float-right"><strong>ކުރިމަތިލި ދާއިރާ</strong></label><input name="dhaairaa" id="dhaairaa" type="text" class="form-control" placeholder="ކުރިމަތިލި ދާއިރާ" required></textarea></div></div></div>');
        }
        if (lebar > 600) {
            $("#select").html('<div class="select-wraper"><div class="row" id="select"><div class="col-5 form-group" dir="rtl"><label class="float-right"><strong> ހައިޡިއްޔަތު</strong></label><select id="" class="form-control select1" name="haisiyyathu"><option selected hidden="true" disabled>  ހައިޡިއްޔަތު ނަންގަވާ</option><option>އަމިއްލަގޮތުން</option><option>މޯލްޑިވިއަން ޑިމޮކްރެޓިކް ޕާޓީ</option><option>ދިވެހި ރައްޔިތުންގެ ޕާޓީ</option><option>އަދާލަތު ޕާޓީ</option><option>ޖުމްހޫރީ ޕާޓީ</option><option>ޕްރޮގްރެސިވް ޕާޓީ އޮފް މޯލްޑިވްސް</option><option>މޯލްޑިވްސް ޑިވެލޮޕްމެންޓް އެލަޔަންސް</option><option>މޯލްޑިވްސް ތާޑްވޭ ޑިމޮކްރެޓްސް</option><option>މޯލްޑިވްސް ލޭބަރ އެންޑް ސޯޝަލް ޑިމޮކްރެޓިކް ޕާޓީ</option><option>ޕީޕަލްސް ނޭޝަނަލް ކޮންގްރެސް</option><option>މޯލްޑިވްސް ރިފޯމް މޫވްމަންޓް</option></select></div><div class="col-7 form-group" dir="rtl"><label class="float-right"><strong>ކުރިމަތިލައްވާފައިވާ އިންތިޚާބު</strong></label><select id="" class="form-control select1" name="election" onchange="inthikhaabu(this)"><option selected hidden="true" disabled> ކުރިމަތިލައްވާފައިވާ އިންތިޚާބު ނަންގަވާ</option><option>ލޯކަލް ކައުންސިލްތަކުގެ އިންތިޚާބު</option><option>އަންހެނުންގެ ތަރައްޤީއަށް މަސައްކަތްކުރާ ކޮމިޓީގެ އިންތިޚާބު</option></select></div><div class="col-6 form-group" dir="rtl"><label class="float-right"><strong>ކުރިމަތިލި މަޤާމް</strong></label><input name="designation" id="designation" type="text" class="form-control" placeholder="ކުރިމަތިލި މަޤާމް"></textarea></div><div class="col-6 form-group" dir="rtl"><label class="float-right"><strong>ކުރިމަތިލި ދާއިރާ</strong></label><input name="dhaairaa" id="dhaairaa" type="text" class="form-control" placeholder="ކުރިމަތިލި ދާއިރާ" required></textarea></div></div></div>')
        }
    });
})(jQuery);