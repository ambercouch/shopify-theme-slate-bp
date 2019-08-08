var pSettings = {
    progressBg: '#187CAC',
    progressBg2: '#d9e3f7',
    discountText: "Enter your discount code here",
    whyUsImg1: 'https://cdn.shopify.com/s/files/1/0024/6346/5541/files/FDA_Cleared_ab6e16b4-7d72-4f02-8239-c23c916c618e.png?5850330908858140871',
    whyUsTitle1: "Effective and Safe",
    whyUsText1: "FDA cleared and made in the USA of approved medical grade materials.",
    whyUsImg2: 'https://cdn.shopify.com/s/files/1/0024/6346/5541/files/Guarantte_1.png?5850330908858140871',
    whyUsTitle2: "100% Money Back Guarantee",
    whyUsText2: "Weâ€™re sure youâ€™ll love it, or weâ€™ll refund 100% of your money.",
};
function crC(e, t, s) {
    if (s) {
        var n = new Date;
        n.setTime(n.getTime() + 60 * s * 1e3);
        var i = "; expires=" + n.toUTCString()
    } else i = "";
    document.cookie = e + "=" + t + i + "; path=/"
}

function rdC(e) {
    for (var t = e + "=", s = document.cookie.split(";"), n = 0; n < s.length; n++) {
        for (var i = s[n];
             " " == i.charAt(0);) i = i.substring(1, i.length);
        if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
    }
    return null
}
function freeshippingimg(e){

    var shippingc = document.getElementsByClassName("section--shipping-method");
    if(shippingc.length > 0){

        document.getElementsByClassName("section--shipping-method")[0].getElementsByClassName("section__content")[0].getElementsByClassName("content-box")[0].getElementsByClassName("content-box__row")[0].insertAdjacentHTML("afterend", '<img src="https://cdn.shopify.com/s/files/1/2140/8113/files/freeshipping_2018_V2.png?15496249122145468780">');

    }

}
function eSC(e) {
    crC(e, "", -1)
}

function stTM(e, t, s) {
    var n, i, d;

    function a() {
        n = t - ((Date.now() - e) / 1e3 | 0), d = n % 60 | 0, i = (i = n / 60 | 0) < 10 ? "0" + i : i, d = d < 10 ? "0" + d : d, s.textContent = i + ":" + d, n <= 0 && (clearInterval(c), document.getElementById("countdown").innerHTML = '<div class="flame-img" style="vertical-align: middle; display: inline-block; position: relative; top: 2px;"><img src="https://cdn.shopify.com/s/files/1/2140/8113/files/flame-in-cart_2018.png?16403329985979793544"></div><div style="font-weight: 700; display: inline-block; padding:0 0 0 5px">' + pSettings.highDemandText + '</div> <div>Order reservation ended.</div>', e = Date.now() + 1e3)
    }
    a();
    var c = setInterval(a, 1e3)
}
var wnd = window.location.href,
    chsg = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#fff"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>';
chsg = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#fff"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>';
wnd.indexOf("checkout") > -1 && (window.onload = function() {
    var div1 = document.getElementsByClassName("step");
    var align = div1[0].getAttribute("data-step");
    if (wnd.indexOf("checkout") > -1 && (dsXt = document.getElementById("checkout_reduction_code"), -1 === wnd.indexOf("thank_you"))) {
        if (screen.width > 999) {
            if(align == 'contact_information'){/*document.getElementsByClassName("keep_me")[0].insertAdjacentHTML("beforeend",'<div class="fieldset-description emailclass" data-buyer-accepts-marketing=""><div class="section__content"><div class="checkbox-wrapper"><div class="checkbox__input"><input name="checkout[buyer_accepts_marketing]" type="hidden" value="0"><input class="input-checkbox" data-backup="buyer_accepts_marketing" type="checkbox" value="1" checked="checked" name="checkout[buyer_accepts_marketing]" id="checkout_buyer_accepts_marketing"></div><label class="checkbox__label" for="checkout_buyer_accepts_marketing">Receive New Product Info and Special Offers</label></div></div></div>')*/}
            document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("afterend", '<div class="mobile-pay-logo" style="width: 100%; display: block; padding-top: 10px; float: left; text-align: right;"><img class="payment_logo" src="https://cdn.shopify.com/s/files/1/0024/6346/5541/files/paymenticon.png?19784"></div>'), document.getElementsByClassName("order-summary__sections")[0].insertAdjacentHTML("beforeend", '<div style="position: relative; padding: 10px 0px; clear: both;"><div class="wyustit" style="position:relative;z-index:1;text-align:center;margin-bottom:5px"><span style="background:#fafafa;padding:0 15px">Why buy from VitalSleep<span class="reg">&reg;</span> ?</span></div><div style="display:block;vertical-align:middle;width:100%;border-spacing:0px 20px"><div class="wyuscs"><div class="wyuscs1"><img src="' + pSettings.whyUsImg1 + '"></div><div class="wyuscs2"><span>' + pSettings.whyUsTitle1 + "</span><p>" + pSettings.whyUsText1 + '</p></div></div><div class="wyuscs"><div class="wyuscs1"><img src="' + pSettings.whyUsImg2 + '"></div><div class="wyuscs2"><span>' + pSettings.whyUsTitle2 + "</span><p>" + pSettings.whyUsText2 + "</p></div></div></div></div>"), document.getElementsByClassName("order-summary__sections")[0].insertAdjacentHTML("beforeend", '<div style="position:relative;padding:10px 0px;clear: both;"><div class="wyustit" style="position:relative;z-index:1;text-align:center; margin:0 0 10px 0;"><span style="background:#fafafa;padding:0 15px">Real customer reviews</span></div><div class="reviews"><div class="left_img"><img src="https://cdn.shopify.com/s/files/1/0024/6346/5541/files/1.png?16715675073283093526"></div><div class="right_txt"><div class="title_sect">Matt Altland<span class="verified_purchase">Verified Buyer</span></div><div class="star_rating"><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span></div><div class="desc_sect"><!--div style="font-weight:bold">Awesome</div--><div>This new model is awesome. I do not even know I have it in my mouth anymore at night. My body does not ache like it used to either after getting a restful sleep.</div></div></div></div><div class="reviews"><div class="left_img"><img src="https://cdn.shopify.com/s/files/1/0024/6346/5541/files/screenshot-www.sportsnutritionsupply.com-2018.10.06-13-56-10.png?16715675073283093526"></div><div class="right_txt"><div class="title_sect">Cody Lewis<span class="verified_purchase">Verified Buyer</span></div><div class="star_rating"><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span></div><div class="desc_sect"><!--div style="font-weight:bold">Love it!</div--><div>I suffered from snoring and terrible nights sleep for years. The VitalSleep mouthguard is the ONLY product that has allowed me to get the best sleep I have had in years and also allows my fiance to sleep comfortably without suffering through loud snoring.</div></div></div></div><div class="reviews"><div class="left_img"><img src="https://cdn.shopify.com/s/files/1/0024/6346/5541/files/screenshot-www.sportsnutritionsupply.com-2018.09.10-10-32-15.png?16715675073283093526"></div><div class="right_txt"><div class="title_sect">LaVerne B.<span class="verified_purchase">Verified Buyer</span></div><div class="star_rating"><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span></div><div class="desc_sect"><!--div style="font-weight:bold">Oxy lean Elite</div--><div>Thank you very much! I love my device. It works and I get better rest. My husband says I sleep â€œas quiet as a mouseâ€! It is an amazing device.</div></div></div></div>')
        } else {
            if(align == 'contact_information'){document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("afterend", '<button aria-busy="false" class="step__footer__continue-btn btn " type="submit" name="button"><span class="btn__content">Continue to shipping method</span></button>'),document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("beforeend",'<div class="fieldset-description emailclass" data-buyer-accepts-marketing=""><div class="section__content"><div class="checkbox-wrapper"><div class="checkbox__input"><input name="checkout[buyer_accepts_marketing]" type="hidden" value="0"><input class="input-checkbox" data-backup="buyer_accepts_marketing" type="checkbox" value="1" checked="checked" name="checkout[buyer_accepts_marketing]" id="checkout_buyer_accepts_marketing"></div><label class="checkbox__label" for="checkout_buyer_accepts_marketing">Keep me up to date on news and exclusive offers</label></div></div></div>')}
            if(align == 'shipping_method'){document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("afterend", '<button aria-busy="false" class="step__footer__continue-btn btn " type="submit" name="button"><span class="btn__content">Continue to payment method</span></button>')}
            if(align == 'payment_method'){document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("afterend", '<button aria-busy="false" class="step__footer__continue-btn btn " type="submit" name="button"><span class="btn__content">Complete order</span></button>')}
            "" != pSettings.discountText&& dsXt.setAttribute("placeholder", pSettings.discountText), document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("afterend", '<div style="position:relative;padding:10px 0px;clear: both;"><div class="wyustit" style="position:relative;z-index:1;text-align:center; margin:0 0 10px 0;"><span style="background:#fafafa;padding:0 15px">Real customer reviews</span></div><div class="reviews"><div class="left_img"><img src="https://cdn.shopify.com/s/files/1/0024/6346/5541/files/1.png?16715675073283093526"></div><div class="right_txt"><div class="title_sect">Matt Altland<span class="verified_purchase">Verified Buyer</span></div><div class="star_rating"><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span></div><div class="desc_sect"><!--div style="font-weight:bold">Awesome</div--><div>This new model is awesome. I do not even know I have it in my mouth anymore at night. My body does not ache like it used to either after getting a restful sleep.</div></div></div></div><div class="reviews"><div class="left_img"><img src="https://cdn.shopify.com/s/files/1/0024/6346/5541/files/screenshot-www.sportsnutritionsupply.com-2018.10.06-13-56-10.png?16715675073283093526"></div><div class="right_txt"><div class="title_sect">Cody Lewis<span class="verified_purchase">Verified Buyer</span></div><div class="star_rating"><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span></div><div class="desc_sect"><!--div style="font-weight:bold">Love it!</div--><div>I suffered from snoring and terrible nights sleep for years. The VitalSleep mouthguard is the ONLY product that has allowed me to get the best sleep I have had in years and also allows my fiance to sleep comfortably without suffering through loud snoring.</div></div></div></div><div class="reviews"><div class="left_img"><img src="https://cdn.shopify.com/s/files/1/0024/6346/5541/files/screenshot-www.sportsnutritionsupply.com-2018.09.10-10-32-15.png?16715675073283093526"></div><div class="right_txt"><div class="title_sect">LaVerne B.<span class="verified_purchase">Verified Buyer</span></div><div class="star_rating"><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span></div><div class="desc_sect"><!--div style="font-weight:bold">Oxy lean Elite</div--><div>Thank you very much! I love my device. It works and I get better rest. My husband says I sleep â€œas quiet as a mouseâ€! It is an amazing device.</div></div></div></div>'), document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("afterend", '<div style="position: relative; padding: 10px 0px; clear: both;"><div class="wyustit" style="position:relative;z-index:1;text-align:center;margin-bottom:5px;"><span style="background:#fafafa;padding:0 15px">Why buy from VitalSleep<span class="reg">&reg;</span> ?</span></div><div style="display:block;vertical-align:middle;width:100%;border-spacing:0px 20px"><div class="wyuscs"><div class="wyuscs1"><img src="' + pSettings.whyUsImg1 + '"></div><div class="wyuscs2"><span>' + pSettings.whyUsTitle1 + "</span><p>" + pSettings.whyUsText1 + '</p></div></div><div class="wyuscs"><div class="wyuscs1"><img src="' + pSettings.whyUsImg2 + '"></div><div class="wyuscs2"><span>' + pSettings.whyUsTitle2 + "</span><p>" + pSettings.whyUsText2 + "</p></div></div></div></div>"), document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("afterend", '<div class="mobile-pay-logo" style="width: 100%; display: block; padding-top: 10px; float: left; text-align: right;"><img class="payment_logo" src="https://cdn.shopify.com/s/files/1/0024/6346/5541/files/paymenticon.png?19784"></div>');


        }
    }


    var b7 = document.createElement("style");
    b7.type = "text/css";
    document.body.appendChild(b7);
    b7.innerHTML = ' .content{overflow: visible;} .order-summary__sections {display:block; height: auto;} .sidebar{background: #fafafa none repeat scroll 0 0;border-left: 1px solid #e1e1e1;padding-left: 2%;padding-right: 2%; width: 42%; -webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;  } .sidebar::after{display: none;} #countdown > div {display: inline;font-size: 12px !important;color: #000000;}.review_title > img {width: 52px; margin: 0 auto; display:table;}.review_title > span {color: #666 !important;float: right;font-weight: 700;margin-right: 163px;margin-top: 11px;} .reviews {display: inline-flex; width: 100%; margin: 0 0 10px;}.left_img {width: 20%;text-align:center;}.left_img img{width:70%;}.right_txt {width: 80%;padding-left: 4%;}.top_sect {display: inline-flex;margin-bottom: 5px;}.title_sect {color:#5d477c;font-size: 16px;}.desc_sect{color:#666666;margin-bottom: 3px;font-size: 14px;line-height: 1.3;color:#666666;}.top_sect div {margin-right: 10px;}.checked {color: #ffd200;}.verified_purchase {color:#aaaaaa;font-size: 12px;line-height: 2;margin-left: 5px;font-weight: normal;}.date_show {font-size: 14px;line-height: 2;float:right;color: #aaaaaa;font-weight: normal;}.star_rating{line-height: 1;position: relative;top: -2px;} .reviews {margin: 0 0 10px;}.step__footer__continue-btn.btn {min-width: 300px;padding: 1.4em 30px;}.step__footer__continue-btn span.btn__content{  position: relative;font-weight:600;}.step__footer__continue-btn span.btn__content:after{position:absolute;top:-7px;left:100%;right:0;font-size:27px;color:#fff;opacity:1;padding-left:5px;font-family:"Avant Garde",Avantgarde,"Century Gothic",CenturyGothic,"AppleGothic",sans-serif; vertical-align: sub;}.total-line-table__tbody img.qualify_shipping {padding: 10px 0 0;width: 100%;}#countdown{background: #fdf5d6;border: 1px solid #f1c55c;padding: 6px 0px;border-radius: 4px;} .ar64 .s8 svg{position:absolute;left:-17px;top:2px;fill: #58c440;}.ar64 .s8:first-child svg{left:-16px}.wyustit:before{border-top:1px solid #dfdfdf;content:"";margin:0 auto;position:absolute;top:50%;left:0;right:0;bottom:0;width:100%;z-index:-1} .wyuscs{float:left;width:100%;padding-bottom:20px}.wyuscs1,.wyuscs2{vertical-align:middle}.wyuscs1{width:16%;float:left;font-size:15px;padding:0 10px 0 0;}.wyuscs2{width:80%;float:right;text-align:left;}.wyuscs2 span{font-size:14px;font-weight:700;color:#666}.wyuscs2 p{font-size:14px;color:#777}.step__footer__continue-btn span.btn__content::after{position:static;line-height:10px;} .payment_logo{margin-top: 5px; max-width: 308px; min-width: 308px; width: 100%; }       @media(min-width:450px){.ar64 .s8{min-width:28%}.ar64 .s8 svg{position:relative!important;top:2px!important;left:-10px!important}}@media(max-width:750px){.ar64 .s8{font-size:11px}.ar64 .s8:first-child{padding-left:20px}}                                                                                      @media only screen and (max-width: 1023px){                                                              .step__footer__continue-btn.btn {padding: 1.4em 10px;} }                                                                 @media only screen and (max-width: 999px){ }                                                                                                                             @media only screen and (max-width: 768px){                                                                            .content {display: block !important;overflow: hidden !important;width: 100%;}.review_title > span {margin-right: 265px;margin-top: 17px;}.ar64 .s8 { min-width: 24% !important;}  #countdown {height: 60px;margin: 0 auto;width: 100%; max-width:38em; text-align: center !important; padding: 10px 5px 10px 35px !important; -webkit-box-sizing: border-box;  -moz-box-sizing:border-box; box-sizing:border-box; position:relative;} #countdown .flame-img {left: 5px; position: absolute; top: 14px; width: auto; } #countdown > div {text-align: left !important; float: left; width: 100%;}.sidebar {overflow: hidden;  padding-left: 2%;  padding-right: 2%;border-right: 1px solid #e1e1e1; width: 100%; } .outer_count_div{ padding: 0px 1em 20px;}.step__footer__continue-btn span.btn__content::after{position:static;line-height:14px;} 	}                                                                                                                             @media only screen and (max-width: 749px){                                                                             .payment_logo {max-width: 100%;min-width: 100%;}.step__footer__previous-link{position:relative;  top:65px;padding-bottom: 20px;}.mobile-pay-logo{position: relative;    bottom: 50px;}    }                                                                                                                         @media only screen and (max-width: 480px){                                                                        .review_title > span {margin-right: 189px !important; margin-top: 35px !important; }.ar64 .s8 {min-width: 19% !important;} .content .wrap{  padding: 0;} .content .wrap .main {padding-left: 10px;padding-right: 10px;padding-top: 1.5em;}     }                                                                                                                        @media only screen and (max-width: 360px){                                                                                 .review_title > span {margin-right: 95px !important;margin-top: 30px !important;}.ar64 .s8 {font-size:10px !important;padding: 9px 6px 9px 30px;}.step__footer__continue-btn.btn {min-width: 100%;}   }                                                                                                                        @media only screen and (max-width: 320px){                                                                                 .review_title > span {margin-right: 67px !important;margin-top: 19px !important;}#countdown > div {font-size: 11px !important;}   }.section--reductions.hidden-on-desktop{display:none;}.section--shipping-address .section__content, .step__sections {position: relative;}.emailclass {float:right;width: 60%;text-align: right;}#apt-suit a{cursor: pointer;}#apt-suit i {margin-right: 5px;}@media(max-width: 768px){.arrow-steps .step {        min-width: 24%;}.mobile-pay-logo{bottom: 60px;}div[data-address-field="last_name"]{width:100% !important;}}@media ( max-width:480px){.emailclass {float: left;width: 100%;text-align: left;position: relative;bottom: 60px;}form.edit_checkout.animate-floating-labels{position: relative;}.step__footer{text-align: center;}.step__footer a{display: inline-block;}.step__footer__previous-link[href*="cart"]{top: 85px !important;}.step__footer__previous-link{top: 60px  !important;}}@media only screen and (min-width: 768px){div[data-address-field="address1"] {width: 70% !important;}div[data-address-field="address2"] {width: 30% !important;}@media only screen and (min-width: 768px) and (max-width:1023px){.anyflexbox .step__footer{display: block; !important}.fieldset-description.emailclass {position: relative;width: 64%;}.mobile-pay-logo {bottom: 5px !important;position: relative;}}@media only screen and (min-width: 1024px) and (max-width:1100px){.fieldset-description.emailclass {width: 67% !important;}}';

    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://code.jquery.com/jquery-2.2.1.min.js";
    script.onreadystatechange = handler;
    script.onload = handler;
    head.appendChild(script);
    var script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.src = "https://code.jquery.com/jquery-2.2.1.min.js";
    script1.onreadystatechange = on_change;
    script1.onload = on_change;
    head.appendChild(script1);
    var script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = "https://code.jquery.com/jquery-2.2.1.min.js";
    script2.onreadystatechange = on_remove;
    script2.onload = on_remove;
    head.appendChild(script2);


    function all_script(){
        var div1 = document.getElementsByClassName("step");
        var align = div1[0].getAttribute("data-step");
        if (screen.width > 999) {

            if(align == 'contact_information'){
                $('form.edit_checkout[data-customer-information-form="true"]').append('<div class="fieldset-description emailclass" data-buyer-accepts-marketing=""><div class="section__content"><div class="checkbox-wrapper"><div class="checkbox__input"><input name="checkout[buyer_accepts_marketing]" type="hidden" value="0"><input class="input-checkbox" data-backup="buyer_accepts_marketing" type="checkbox" value="1" checked="checked" name="checkout[buyer_accepts_marketing]" id="checkout_buyer_accepts_marketing"></div><label class="checkbox__label" for="checkout_buyer_accepts_marketing">Keep me up to date on news and exclusive offers</label></div></div></div>');
                /*
                document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("beforeend",'<div class="fieldset-description emailclass" data-buyer-accepts-marketing=""><div class="section__content"><div class="checkbox-wrapper"><div class="checkbox__input"><input name="checkout[buyer_accepts_marketing]" type="hidden" value="0"><input class="input-checkbox" data-backup="buyer_accepts_marketing" type="checkbox" value="1" checked="checked" name="checkout[buyer_accepts_marketing]" id="checkout_buyer_accepts_marketing"></div><label class="checkbox__label" for="checkout_buyer_accepts_marketing">Receive New Product Info and Special Offers</label></div></div></div>') */}
            document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("afterend", '<div class="mobile-pay-logo" style="width: 100%; display: block; padding-top: 10px; float: left; text-align: right;"><img class="payment_logo" src="https://cdn.shopify.com/s/files/1/0024/6346/5541/files/paymenticon.png?19784"></div>')
        } else {
            if(align == 'contact_information'){document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("afterend", '<button aria-busy="false" class="step__footer__continue-btn btn " type="submit" name="button"><span class="btn__content">Continue to shipping method</span></button>'),document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("beforeend",'<div class="fieldset-description emailclass" data-buyer-accepts-marketing=""><div class="section__content"><div class="checkbox-wrapper"><div class="checkbox__input"><input name="checkout[buyer_accepts_marketing]" type="hidden" value="0"><input class="input-checkbox" data-backup="buyer_accepts_marketing" type="checkbox" value="1" checked="checked" name="checkout[buyer_accepts_marketing]" id="checkout_buyer_accepts_marketing"></div><label class="checkbox__label" for="checkout_buyer_accepts_marketing">Keep me up to date on news and exclusive offers</label></div></div></div>')}
            if(align == 'shipping_method'){document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("afterend", '<button aria-busy="false" class="step__footer__continue-btn btn " type="submit" name="button"><span class="btn__content">Continue to payment method</span></button>')}
            if(align == 'payment_method'){document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("afterend", '<button aria-busy="false" class="step__footer__continue-btn btn " type="submit" name="button"><span class="btn__content">Complete order</span></button>')}
            "" != pSettings.discountText && dsXt.setAttribute("placeholder", pSettings.discountText), document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("afterend", '<div style="position:relative;padding:10px 0px;clear: both;"><div class="wyustit" style="position:relative;z-index:1;text-align:center; margin:0 0 10px 0;"><span style="background:#fafafa;padding:0 15px">Real customer reviews</span></div><div class="reviews"><div class="left_img"><img src="https://cdn.shopify.com/s/files/1/0024/6346/5541/files/1.png?16715675073283093526"></div><div class="right_txt"><div class="title_sect">Matt Altland<span class="verified_purchase">Verified Buyer</span></div><div class="star_rating"><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span></div><div class="desc_sect"><!--div style="font-weight:bold">Awesome</div--><div>This new model is awesome. I do not even know I have it in my mouth anymore at night. My body does not ache like it used to either after getting a restful sleep.</div></div></div></div><div class="reviews"><div class="left_img"><img src="https://cdn.shopify.com/s/files/1/0024/6346/5541/files/screenshot-www.sportsnutritionsupply.com-2018.10.06-13-56-10.png?16715675073283093526"></div><div class="right_txt"><div class="title_sect">Cody Lewis<span class="verified_purchase">Verified Buyer</span></div><div class="star_rating"><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span></div><div class="desc_sect"><!--div style="font-weight:bold">Love it!</div--><div>I suffered from snoring and terrible nights sleep for years. The VitalSleep mouthguard is the ONLY product that has allowed me to get the best sleep I have had in years and also allows my fiance to sleep comfortably without suffering through loud snoring.</div></div></div></div><div class="reviews"><div class="left_img"><img src="https://cdn.shopify.com/s/files/1/0024/6346/5541/files/screenshot-www.sportsnutritionsupply.com-2018.09.10-10-32-15.png?16715675073283093526"></div><div class="right_txt"><div class="title_sect">LaVerne B.<span class="verified_purchase">Verified Buyer</span></div><div class="star_rating"><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span><span class="fa fa-star first checked"></span></div><div class="desc_sect"><!--div style="font-weight:bold">Oxy lean Elite</div--><div>Thank you very much! I love my device. It works and I get better rest. My husband says I sleep â€œas quiet as a mouseâ€! It is an amazing device.</div></div></div></div>'), document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("afterend", '<div style="position: relative; padding: 10px 0px; clear: both;"><div class="wyustit" style="position:relative;z-index:1;text-align:center;margin-bottom:5px;"><span style="background:#fafafa;padding:0 15px">Why buy from VitalSleep<span class="reg">&reg;</span> ?</span></div><div style="display:block;vertical-align:middle;width:100%;border-spacing:0px 20px"><div class="wyuscs"><div class="wyuscs1"><img src="' + pSettings.whyUsImg1 + '"></div><div class="wyuscs2"><span>' + pSettings.whyUsTitle1 + "</span><p>" + pSettings.whyUsText1 + '</p></div></div><div class="wyuscs"><div class="wyuscs1"><img src="' + pSettings.whyUsImg2 + '"></div><div class="wyuscs2"><span>' + pSettings.whyUsTitle2 + "</span><p>" + pSettings.whyUsText2 + "</p></div></div></div></div>"), document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("afterend", '<div class="mobile-pay-logo" style="width: 100%; display: block; padding-top: 10px; float: left; text-align: right;"><img class="payment_logo" src="https://cdn.shopify.com/s/files/1/0024/6346/5541/files/paymenticon.png?19784"></div>');

        }
        var x = document.getElementById("myScript").src;
        var head = document.getElementsByTagName('head')[0];
        var awesome_script = document.createElement('script');
        awesome_script.setAttribute('src',x);
        awesome_script.setAttribute('id','myScript');
        document.head.appendChild(awesome_script);
    }


    function on_change(){
        $('.field__input-btn-wrapper button.field__input-btn.btn').click(function(e){
            if($("tr.total-line:last-child").hasClass("total-line--reduction")){
                e.preventDefault();
                $('.field__input-btn-wrapper button.field__input-btn.btn').attr("disabled", true);
                if(!$('#error-for-reduction_code').length){
                    $(this).parents('form').append('<p id="error-for-reduction_code" style="color:red">Sorry, you can use only one gift card per order.</p>');
                }
                exit();
            }
            setTimeout(function(){
                if($(".applied-reduction-code").length > 0 || $("#error-for-reduction_code").is(':visible') || $(".tags-list").is(':visible')){
                    all_script();
                }

            }, 3000);
        });
    }
    function on_remove(){
        setTimeout(function(){
            if($(".total-line").hasClass("total-line--reduction")){
                $('.applied-reduction-code__clear-button').attr("onclick" , "remove_discount()");
                $('.tags-list .tag__button').attr("onclick" , "remove_discount()");
            }
        }, 1500);

    }

    function remove_discount(){
        setTimeout(function(){
            if(!$('.total-line').hasClass("total-line--reduction")){
                $('.field__input-btn-wrapper button.field__input-btn.btn').attr("disabled", false);
                all_script();
            }
        }, 3000);
    }

    function handler(){
        if($('#checkout_reduction_code').val() == ""){
            $('.order-summary__section--discount > .edit_checkout').hide();
            $('.order-summary__section--discount').prepend('<div  class="gift-link" style="margin:10px 0;cursor:pointer"><a><i class="fa fa-plus-circle" aria-hidden="true" style="margin-right: 4px;"></i>Have a discount code ?</a></div>');
        }
        $('.gift-link').click(function(){

            $('.gift-link a').hide();
            $(this).siblings('form.edit_checkout').show();
            $("#checkout_reduction_code").focus();


        });
        $( ".section--shipping-address .section__content" ).prepend( $( ".section--contact-information" ) );
        $('div[data-address-field="address2"] .field__input-wrapper').hide();
        $('div[data-address-field="address2"]').prepend('<div  id="apt-suit" style="margin:10px 0;"><a><i class="fa fa-plus-circle" aria-hidden="true"></i>Add Address line 2</a></div>');
        $('#apt-suit').click(function(){
            $(this).hide();
            $('div[data-address-field="address2"] .field__input-wrapper').show();
            $("#checkout_shipping_address_address2").focus();
        });

        $('.step__sections .hidden-on-desktop').hide();
        $('form[data-customer-information-form="true"]').addClass("keep_me");
        $('form[data-shipping-method-form="true"]').addClass("keep_me");
        $('form[data-payment-form="true"]').addClass("keep_me");

        //$( ".section--contact-information" ).find(".section__header").hide();
        $( 'div[data-section="customer-information"] .fieldset-description' ).empty();
        if(screen.width > 767){
            $('.step[data-step="contact_information"]').append('<div class="fieldset-description emailclass" data-buyer-accepts-marketing=""><div class="section__content"><div class="checkbox-wrapper"><div class="checkbox__input"><input name="checkout[buyer_accepts_marketing]" type="hidden" value="0"><input class="input-checkbox" data-backup="buyer_accepts_marketing" type="checkbox" value="1" checked="checked" name="checkout[buyer_accepts_marketing]" id="checkout_buyer_accepts_marketing"></div><label class="checkbox__label" for="checkout_buyer_accepts_marketing">Keep me up to date on news and exclusive offers</label></div></div></div>');
        }
    }

});
