/**
 * Created by Richard on 07/07/2017.
 */
/**
 * Created by Richard on 19/09/2016.
 */


//FidVids - uses custom selector because the youtube vid is lazy loaded so does not exist until modal is opened
//$("[data-fitvid]").fitVids({ customSelector: "iframe[data-youtube-iframe]"});

/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

    'use strict';

    $.fn.fitVids = function( options ) {
        var settings = {
            customSelector: null,
            ignore: null
        };

        if(!document.getElementById('fit-vids-style')) {
            // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
            var head = document.head || document.getElementsByTagName('head')[0];
            var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
            var div = document.createElement("div");
            div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
            head.appendChild(div.childNodes[1]);
        }

        if ( options ) {
            $.extend( settings, options );
        }

        return this.each(function(){
            var selectors = [
                'iframe[src*="player.vimeo.com"]',
                'iframe[src*="youtube.com"]',
                'iframe[src*="youtube-nocookie.com"]',
                'iframe[src*="kickstarter.com"][src*="video.html"]',
                'object',
                'embed'
            ];

            if (settings.customSelector) {
                selectors.push(settings.customSelector);
            }

            var ignoreList = '.fitvidsignore';

            if(settings.ignore) {
                ignoreList = ignoreList + ', ' + settings.ignore;
            }

            var $allVideos = $(this).find(selectors.join(','));
            $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
            $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

            $allVideos.each(function(){
                var $this = $(this);
                if($this.parents(ignoreList).length > 0) {
                    return; // Disable FitVids on this video.
                }
                if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
                if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
                {
                    $this.attr('height', 9);
                    $this.attr('width', 16);
                }
                var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
                    width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
                    aspectRatio = height / width;
                if(!$this.attr('name')){
                    var videoName = 'fitvid' + $.fn.fitVids._count;
                    $this.attr('name', videoName);
                    $.fn.fitVids._count++;
                }
                $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
                $this.removeAttr('height').removeAttr('width');
            });
        });
    };

    // Internal counter for unique video names.
    $.fn.fitVids._count = 0;

// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );


console.log('ACTIMBER');
ACTIMBER = {
    common: {
        init: function () {


            'use strict';
            //uncomment to debug
            console.log('common FIT VID pasted');


            $('body').addClass('js');
            $("[data-fitvid]").fitVids();
            //fitvids();

            $('[data-control]').each(function () {
                var dataValue = $(this).attr('data-control');
                var showButton = $(this);
                var container = $(this).next('[data-container='+dataValue+']');
                ACTIMBER.fn.actStateToggle(container, showButton);
                console.log(container);
            });



        }
    },
    page: {
        init: function () {
            //uncomment to debug
            //console.log('pages');
        }
    },
    blog: {
        init: function () {
            //uncomment to debug
            console.log('blog');

            let currentTags = document.body.dataset.currentTags;
            let tagsArray = (currentTags == "") ? false : currentTags.split('|')
            let currentLocation = window.location.href;
            let currentPath = window.location.pathname;
            let pathArray = currentPath.split('/');
            let pathLastSection = pathArray[pathArray.length - 1];
            let pathFirstSection = currentPath.replace(String(pathLastSection), "");
            let pathUpdate = '';

            if(tagsArray != false ){

                //If filter clicked
                $(document).on('click', ".c-blog-filters__link", function (e) {

                    e.preventDefault();

                    //Get the filter tag
                    let clickedTag = this.dataset.tag;

                    //If tag is already sellected
                    if ( tagsArray.includes(clickedTag) ){

                        //remove the tag from the url path
                        pathLastSection = ACTIMBER.fn.removePlus(pathLastSection.replace(clickedTag, ""));

                        //if no tags selected
                        if(pathLastSection == ''){

                            //reset url to blog path
                            pathArray.pop();
                            pathArray.pop();

                            //update the url path
                            pathUpdate = pathArray.join('/')

                            //if there are tags
                        }
                        else{
                            //update the url path with latest tags
                            pathArray[pathArray.length - 1] = pathLastSection;
                            pathUpdate = pathArray.join('/')
                        }

                        //redirect to new tags
                        window.location.pathname = pathUpdate;

                        //If the tag was not already selected
                    }
                    else{
                        //add the tag to the current url and redirect

                        location.href = currentLocation + '+' + clickedTag;
                        console.log('clickedTag');
                        console.log(clickedTag);
                        console.log('tag added');
                    }


                } )
            }
        }
    },
   collection: {
        init: function () {
            //uncomment to debug
            //console.log('collection');


        }//end collection.init
    },
    collectionbundles:{
        init: function(){
            console.log('collection bundles timer confirm exit');



            const bundledProducts = {};


            let elBundlenNoticeCurrentDiscount = document.getElementById('bundleNoticeTextCurrentDiscount');
            let elBundlenNoticeNextDiscount = document.getElementById('bundleNoticeTextNextDiscount');
            let elBundlenNoticeNextDiscountItem = document.getElementById('bundleNoticeTextNextDiscountItem');
            let elBundleNoticeTextCurrentSaving = $('#bundleNoticeTextCurrentSaving');
            let elBundleSaving = document.getElementById('bundleSaving');
            let elBundleDiscountCode = document.getElementById('bundleDiscountCode');
            let elFullPrice =  document.getElementById('fullPrice');
            let elBundlePrice =  document.getElementById('bundlePrice');
            let elOffPageBundleNoticeb = document.getElementById('offPageBundleNotice');
            let elCartBtn =$('.c-btn--buy-bundle');

            let bundleNoticeTextCurrentDiscount = elBundlenNoticeCurrentDiscount.textContent;
            let bundleNoticeTextNextDiscount = elBundlenNoticeNextDiscount.textContent;


            let bundleNoticeNoDiscount = "You don't have enough product in your bundle to get our bundle discount";
            let bundleNotice20Percent = "Add your bundle to the cart and get 20% off when you checkout";
            let bundleNotice25Percent = "Add your bundle to the cart and get 25% off when you checkout";
            let bundleNotice30Percent = "Add your bundle to the cart and get 30% off when you checkout";

            let bundlenNoticeNext0 = "Add 3 items to get our 20% bundle discount.";
            let bundlenNoticeNext1 = "Add 2 more items to get our 20% bundle discount.";
            let bundlenNoticeNext2 = "Add 1 more item to get our 20% bundle discount.";
            let bundlenNoticeNext3 = "Add 1 more items to get our 25% bundle discount.";
            let bundlenNoticeNext4 = "Add 2 more items to get our 30% bundle discount.";
            let bundlenNoticeNext5 = "Add 1 items to get our 30% bundle discount.";
            let bundlenNoticeNext6 = "";

            let bundleNoticeSaving1 = 'You will save ';
            let bundleNoticeSaving2 = 'when you use discount code';
            let bundleNoticeSaving3 = 'at checkout.';
            let discountCode1 = '3BIB20';
            let discountCode2 = '4BIB25';
            let discountCode3 = '6BIB30';




            let elTextQty = document.getElementById('bundleNoticeTextQty');
            let elTextUnit = document.getElementById('bundleNoticeTextUnitLabel');
            let textUnitSingle = 'item';
            let textUnit = 'items';
            let elBundleList = $('#bundleProductList');
            let bundleCount = 0;
            let bundleTotal = 0;
            let bundleDiscount = 0;
            let bundleDiscountPercent = 0;
            let bundleSaving = 0;
            let bundleSavingMoney = 0;

            window.onbeforeunload = confirmExit;

            function confirmExit()
            {

                if(bundleCount > 0){

                    return true;
                }else {

                    return;
                }
            }

            // Create our number formatter.
            let formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'GBP',
            });

            function bundleFormatSaving(){
                bundleSavingMoney = formatter.format(bundleSaving / 100);
            }


            function updateElBundleSaving() {
                elBundleSaving.textContent = bundleSavingMoney;
            }

            function updateElBundlePrice() {
                elBundlePrice.textContent = formatter.format((bundleTotal / 100) - (bundleDiscount / 100) );
            }

            function updateElFullPrice() {
                elFullPrice.textContent = formatter.format(bundleTotal / 100    );
            }

            function setBundleDiscount() {

                bundleDiscount = ((bundleTotal / 100) * bundleDiscountPercent);
            }

            function updateElBundleDiscountCode() {
                if(bundleCount == 3 ){
                    elBundleDiscountCode.textContent = discountCode1;
                }else if(bundleCount >3 && bundleCount <= 5){
                    elBundleDiscountCode.textContent = discountCode2;
                }else {
                    elBundleDiscountCode.textContent = discountCode3;
                }

            }




            function updateBundleNoticeSavingDisplay() {
                if (bundleCount >= 3){
                    elBundleNoticeTextCurrentSaving.show();
                }else{
                    elBundleNoticeTextCurrentSaving.hide()
                }
            }


            //update item text
            function updateItemtext(){
                if(bundleCount == 1){
                    elTextUnit.textContent = textUnitSingle;
                } else {
                    elTextUnit.textContent = textUnit;
                }

                elTextQty.textContent = bundleCount;
            }

            //update bundle notice text
            function updateBundleText(text, el) {
                el.textContent = text;
            }

            function updateBundleNotice() {
                if(bundleCount < 3){
                    elBundlenNoticeCurrentDiscount.textContent = bundleNoticeNoDiscount
                }else if(bundleCount == 3){
                    elBundlenNoticeCurrentDiscount.textContent = bundleNotice20Percent
                }else if(bundleCount > 3 && bundleCount <= 5){
                    elBundlenNoticeCurrentDiscount.textContent = bundleNotice25Percent
                }else{
                    elBundlenNoticeCurrentDiscount.textContent = bundleNotice30Percent
                }
            }

            function updateBundleNoticeNext() {
                console.log('bundleCount');
                console.log(bundleCount);

                let el = elBundlenNoticeNextDiscountItem;
                if(bundleCount == 0){
                    showElement(el);

                    elBundlenNoticeNextDiscount.textContent = bundlenNoticeNext0;
                }else if(bundleCount == 1){
                    showElement(el);

                    elBundlenNoticeNextDiscount.textContent = bundlenNoticeNext1;
                }else if(bundleCount == 2){
                    showElement(el);

                    elBundlenNoticeNextDiscount.textContent = bundlenNoticeNext2;
                }else if(bundleCount == 3){
                    showElement(el);

                    elBundlenNoticeNextDiscount.textContent = bundlenNoticeNext3;
                }else if(bundleCount == 4){
                    showElement(el);

                    elBundlenNoticeNextDiscount.textContent = bundlenNoticeNext4;
                }else if(bundleCount == 5){
                    showElement(el);

                    elBundlenNoticeNextDiscount.textContent = bundlenNoticeNext5;
                }else if(bundleCount == 6){

                    hideElement(el)
                    elBundlenNoticeNextDiscount.textContent = bundlenNoticeNext6;
                }else{

                    hideElement(el)
                }

            }


            //update bundle list
            function updateBundleList(entries) {
                elBundleList.empty();

                for (const [product, obj] of entries) {

                    elBundleList.append('<div class="bundle-cart__item" id="bundleItem'+ obj.variantId +'" ><p><span class="bundle-cart__title--shortName">' + obj.productShortName + '</span><span class="bundle-cart__title">' + obj.productTitle + '</span><br><small>'+obj.variantTitle +' </small>' + '</p></div>');

                    $('#bundleItem' + obj.variantId).append('<input data-variant-id="'+ obj.variantId +'" class="bundle-item-qty" type=number min="0" value=' + obj.qty + '>')


                }

            }

            //update bundle list
            function updateBundleQty(entries) {

                for (const [product, obj] of entries) {

                    bundleCountAdd(obj.qty);
                    bundleTotalAdd(obj.variantPrice * obj.qty);
                }

            }

            function setBundleDiscountPercent() {
                if (bundleCount < 3){
                    bundleDiscountPercent = 0
                } else if (bundleCount == 3){
                    bundleDiscountPercent = 20;
                }else if (bundleCount > 3 && bundleCount < 6){
                    bundleDiscountPercent = 25;
                }else{
                    bundleDiscountPercent = 30;
                }

            }

            function updateBundleSaving() {
                bundleSaving = (bundleTotal / 100) * bundleDiscountPercent;
            }

            //update bundle qty
            function bundleCountAdd(qty){
                bundleCount = parseInt(bundleCount) + parseInt(qty);
            }

            //update bundle Total
            function bundleTotalAdd(price) {
                bundleTotal = parseInt(bundleTotal) + parseInt(price);
            }
            //add item to bundle
            function bundleAddItem(variantId, variantTitle, variantPrice, productTitle, productShortName ){
                bundledProducts[variantId] =  bundledProducts[variantId] || {};
                bundledProducts[variantId].variantTitle = variantTitle;
                bundledProducts[variantId].variantId = variantId;
                bundledProducts[variantId].productTitle  = productTitle;
                bundledProducts[variantId].variantPrice  = variantPrice;
                bundledProducts[variantId].productShortName  = productShortName;
                if (bundledProducts[variantId].hasOwnProperty('qty')){
                    bundledProducts[variantId].qty  = bundledProducts[variantId].qty + 1;
                }else{
                    bundledProducts[variantId].qty  = 1;
                }

                //return bundledProducts
            }

            function bundleAddQty(variantId){

                if (bundledProducts[variantId].hasOwnProperty('qty')){
                    bundledProducts[variantId].qty  = bundledProducts[variantId].qty + 1;
                }else{
                    bundledProducts[variantId].qty  = 1;
                }

                //return bundledProducts
            }
            function closeDrawer(timer = 1000){

                clearTimeout(window.acTimer);
                window.acTimer = setTimeout(function () {
                    elOffPageBundleNoticeb.classList.remove('is-open');
                }, timer);
            }

            closeDrawer(0);

            function toggleElementState(el, hideClass = 'is-hidden'){
                if (el.classList.contains(hideClass)) {
                    el.classList.remove(hideClass)
                }else{
                    el.classList.add(hideClass);
                }
            }

            function hideElement(el, hideClass = 'is-hidden'){

                    el.classList.add(hideClass);

            }

            function showElement(el, hideClass = 'is-hidden'){

                el.classList.remove(hideClass);

            }

            function updateElCartBtn(){
                if(bundleCount > 2){
                    $(elCartBtn).prop("disabled", false)
                }else{
                    $(elCartBtn).prop("disabled", true)
                }
            }



            $(document).on('click', '.l-off-page__tab', function(){
                console.log('tab clicked class added')
                elOffPageBundleNoticeb.classList.add('is-open');
            });

            $(document).on('click', '.is-open .l-off-page__tab', function(){
                console.log('tab clicked class added')
                elOffPageBundleNoticeb.classList.remove('is-open');
            });

            $(document).on('click', '.l-off-page__close', function(){
                console.log('tab clicked class added')
                elOffPageBundleNoticeb.classList.remove('is-open');
                //elOffPageBundleNoticeb.classList.add('is-close-quick');
            });

            // $(document).on('mouseover', '.l-off-page__tab', function(){
            //     console.log('tab hovered')
            //     elOffPageBundleNoticeb.classList.add('is-open');
            //     //elOffPageBundleNoticeb.classList.remove('is-close-quick');
            // });





            // Add a new item to the bundle
            $('.product-form').submit(function (e) {
                e.preventDefault();
                elOffPageBundleNoticeb.classList.remove('is-close-quick');
                elOffPageBundleNoticeb.classList.add('is-open');
                closeDrawer(4000);
                $('[data-remodal-action=close]').trigger("click");

                bundleCount = 0;
                bundleTotal = 0;
                bundleDiscountPercent = 0;

                let productId = $('input[name=productId]',this).val();
                let productTitle = $('input[name=productTitle]',this).val();
                let variantId = $('option:selected',this).val();
                let variantTitle = $('option:selected',this).text().trim();
                let variantPrice = $('option:selected', this).attr('data-variant-price');
                let productShortName = $('input[name=productShortName]',this).val();

                console.log('variantPrice');
                console.log(variantPrice);

                bundleAddItem(variantId, variantTitle, variantPrice, productTitle, productShortName )

                const entries = Object.entries(bundledProducts);

                updateBundleList(entries);
                updateBundleQty(entries)

                updateItemtext();

                setBundleDiscountPercent();

                updateBundleSaving()

                bundleFormatSaving();

                updateBundleNotice();
                updateBundleNoticeNext()
                updateBundleNoticeSavingDisplay();
                updateElBundleSaving();
                updateElBundleDiscountCode();
                setBundleDiscount();
                updateElBundlePrice()
                updateElFullPrice()

                updateElCartBtn();


            });


            //add bundle to cart
            $(document).on('click', '#AddBundleToCartHeader, #AddBundleToCartFooter, #AddBundleToCartOffPage', function () {
                let entries = Object.entries(bundledProducts);
                let values = {};

                window.onbeforeunload = true;

                console.log('#AddBundleToCartHeader jQuery post updates')

                for (const [product, obj] of entries) {
                    values[obj.variantId] = obj.qty;
                }

                $.ajax({
                    type: "POST",
                    url: '/cart/update.js',
                    data: {updates: values},
                    dataType: 'json',
                    success: function () {
                        window.location.href = "https://bibado.co.uk/cart";
                    },
                    error: function () {
                      console.log('we have and error');
                    }
                });

            })

            //on update bundle item quantity
            $(document).on('change', '.bundle-item-qty', function(e){
                e.preventDefault();
                elOffPageBundleNoticeb.classList.remove('is-close-quick');
                elOffPageBundleNoticeb.classList.add('is-open');
                closeDrawer(4000);
                $('[data-remodal-action=close]').trigger("click");


                bundleCount = 0;
                bundleTotal = 0;
                bundleDiscountPercent = 0;



                let varId = $(this).attr('data-variant-id');
                let varQty = parseInt($(this).val());
                bundledProducts[varId].qty = varQty;
                // console.log('bundledProducts[varId].qty');
                // console.log(bundledProducts[varId].qty);

                //bundleAddQty(varId);

                const entries = Object.entries(bundledProducts);
                for (const [product, obj] of entries) {
                   //  bundleCountAdd(obj.qty);
                }

                updateBundleQty(entries)

                updateItemtext();

                setBundleDiscountPercent();

                updateBundleSaving()

                bundleFormatSaving();

                updateBundleNotice();
                updateBundleNoticeNext()
                updateBundleNoticeSavingDisplay();
                updateElBundleSaving();
                updateElBundleDiscountCode();
                setBundleDiscount();
                updateElBundlePrice()
                updateElFullPrice()

                updateElFullPrice()

                updateElCartBtn();

            })
        },
},
    product: {
        init: function () {
            //uncomment to debug
            //console.log('collection');

        }
    },
    cart: {
        init: function () {
            //uncomment to debug
            console.log('cart template');
        }

    },
    var: {
        locale: ''
    },
    fn:{
        removePlus: function (myUrl){
            if (myUrl.substring(myUrl.length-1) == "+")
            {
                myUrl = myUrl.substring(0, myUrl.length-1);
            }

            myUrl = myUrl.replace('++', '+');

            myUrl = (myUrl[0] == '+')? myUrl.substr(1) : myUrl;


            return myUrl;
        },
        locale: function (local) {

            if(local === undefined)
            {
                return ACTIMBER.var.locale
            }else{
                ACTIMBER.var.locale = local;
                return ACTIMBER.var.locale;
            }

        },
        actStateToggle: function (container, showButton, parent, listParent) {
            var elState = showButton.attr('data-state');
            var eventActOpen = new Event('actOpen');
            var eventActClose = new Event('actClose');
            showButton.on('click', function(e){
                e.preventDefault();
                elState = $(this).attr('data-state');
                if ('off' === elState ) {
                    console.log('click on');
                    $(this).attr('data-state', 'on');
                    $(container).attr('data-state', 'on');
                    $(parent).attr('data-state', 'on');
                    $(container).addClass('ac-on');
                    document.body.className += ' ' + 'container-is-open';
                    window.dispatchEvent(eventActOpen);

                } else {
                    console.log('click off');
                    $(this).attr('data-state', 'off');
                    $(container).attr('data-state', 'off');
                    $(parent).attr('data-state', 'off');
                    $(container).removeClass('ac-on');
                    document.querySelector('body').classList.remove('container-is-open');

                    window.dispatchEvent(eventActClose);
                }
            });
        },

        defer: function(successMethod, failMethod, testMethod, pause, attempts) {
            var defTest = function () {
                return $('#ISR_popup_container').length == 1
            };
            var  defFail = function () {
                $( "#ISR_button" ).click();
                console.log('deft clicking it');
            }
            var  defSuccess = function () {
                Cookies.remove('openStockReminder');
                console.log('return def success');;
            }
            attempts = (attempts == 'undefined')? false : attempts;
            pause = (pause == 'undefined')? 50 : pause;
            testMethod = (testMethod == 'undefined')? defTest : testMethod;
            failMethod = (failMethod == 'undefined')? defFail : failMethod;
            successMethod = (successMethod == 'undefined')? defSuccess : successMethod;


            if (testMethod()) {
                defSuccess();
            } else {
                failMethod();
                if(attempts === false || attempts > 0) {
                    setTimeout(function () {
                        attempts = (attempts === false )? attempts : attempts = attempts - 1;
                        ACTIMBER.fn.defer(successMethod, failMethod, testMethod, pause, attempts)
                    }, pause);
                }
            }
        }
    },

};

UTIL = {
    exec: function (template, handle) {
        var ns = ACTIMBER,
            handle = (handle === undefined) ? "init" : handle;

        if (template !== '' && ns[template] && typeof ns[template][handle] === 'function') {
            ns[template][handle]();
        }
    },
    init: function () {
        var body = document.body,
            template = body.getAttribute('data-template'),
            handle = body.getAttribute('data-handle');

        UTIL.exec('common');
        UTIL.exec(template);
        UTIL.exec(template, handle);
    }
};
$(window).on('load',UTIL.init);
