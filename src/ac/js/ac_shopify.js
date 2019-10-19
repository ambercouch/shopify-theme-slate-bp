/**
 * Created by Richard on 07/07/2017.
 */
/**
 * Created by Richard on 19/09/2016.
 */


//FidVids - uses custom selector because the youtube vid is lazy loaded so does not exist until modal is opened
//$("[data-fitvid]").fitVids({ customSelector: "iframe[data-youtube-iframe]"});

console.log('ACTIMBER BBD remodal1 123');
ACTIMBER = {
    common: {
        init: function () {

            'use strict';
            //uncomment to debug
            console.log('common FIT VID 2 1234567');


            $('body').addClass('js');
            $("[data-fitvid]").fitVids();

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
            console.log('collection bundles');

            const bundledProducts = {};


            let elBundlenNoticeCurrentDiscount = document.getElementById('bundleNoticeTextCurrentDiscount');
            let elBundlenNoticeNextDiscount = document.getElementById('bundleNoticeTextNextDiscount');

            let bundleNoticeTextCurrentDiscount = elBundlenNoticeCurrentDiscount.textContent;
            let bundleNoticeTextNextDiscount = elBundlenNoticeNextDiscount.textContent;
            let bundleNoticeNoDiscount = "You don't have enough product in your bundle to get our bundle discount";
            let bundleNotice20Percent = "Add your bundle to the cart and get 20% off when you checkout";
            let bundleNotice25Percent = "Add your bundle to the cart and get 25% off when you checkout";
            let bundleNotice30Percent = "Add your bundle to the cart and get 30% off when you checkout";


            let elTextQty = document.getElementById('bundleNoticeTextQty');
            let elTextUnit = document.getElementById('bundleNoticeTextUnitLabel');
            let textUnitSingle = 'item';
            let textUnit = 'items';
            let elBundleList = $('#bundleProductList');
            let bundleCount = 0;
            let bundleTotal = 0;
            let bundleDiscount = 0;
            let bundleDiscountPercent = 0;




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
            //update bundle list
            function updateBundleList(entries) {
                elBundleList.empty();

                for (const [product, obj] of entries) {

                    elBundleList.append('<div id="bundleItem'+ obj.variantId +'" ><p>' + obj.productTitle + '<br><small>'+obj.variantTitle +' </small>' + '</p></div>');

                    $('#bundleItem' + obj.variantId).append('<input data-variant-id="'+ obj.variantId +'" class="bundle-item-qty" type=number min="0" value=' + obj.qty + '>')

                    bundleCountAdd(obj.qty);
                    bundleTotalAdd(obj.variantPrice * obj.qty);
                }

                updateBundleNotice();
                console.log('bundleTotal');
                console.log(bundleTotal);
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
            function bundleAddItem(variantId, variantTitle, variantPrice, productTitle ){
                bundledProducts[variantId] =  bundledProducts[variantId] || {};
                bundledProducts[variantId].variantTitle = variantTitle;
                bundledProducts[variantId].variantId = variantId;
                bundledProducts[variantId].productTitle  = productTitle;
                bundledProducts[variantId].variantPrice  = variantPrice;
                if (bundledProducts[variantId].hasOwnProperty('qty')){
                    bundledProducts[variantId].qty  = bundledProducts[variantId].qty + 1;
                }else{
                    bundledProducts[variantId].qty  = 1;
                }

                //return bundledProducts
            }


            // Add a new item to the bundle
            $('.product-form').submit(function (e) {
                e.preventDefault();

                bundleCount = 0;
                bundleTotal = 0;

                let productId = $('input[name=productId]',this).val();
                let productTitle = $('input[name=productTitle]',this).val();
                let variantId = $('option:selected',this).val();
                let variantTitle = $('option:selected',this).text().trim();
                let variantPrice = $('option:selected', this).attr('data-variant-price');

                console.log('variantPrice')
                console.log(variantPrice)

                bundleAddItem(variantId, variantTitle, variantPrice, productTitle )

                const entries = Object.entries(bundledProducts);

                updateBundleList(entries);

                updateItemtext();


            });

            //on update bundle item quantity
            $(document).on('change', '.bundle-item-qty', function(e){

                bundleCount = 0;

                let varId = $(this).attr('data-variant-id');
                let varQty = parseInt($(this).val());
                bundledProducts[varId].qty = varQty;
                // console.log('bundledProducts[varId].qty');
                // console.log(bundledProducts[varId].qty);

                const entries = Object.entries(bundledProducts);
                for (const [product, obj] of entries) {
                    bundleCountAdd(obj.qty);
                }

                updateItemtext();

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
