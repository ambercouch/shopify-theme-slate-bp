/**
 * Created by Richard on 07/07/2017.
 */
/**
 * Created by Richard on 19/09/2016.
 */


//FidVids - uses custom selector because the youtube vid is lazy loaded so does not exist until modal is opened
//$("[data-fitvid]").fitVids({ customSelector: "iframe[data-youtube-iframe]"});

console.log('ACSHOPIFY2');
ACSHOPIFY = {
    common: {
        init: function () {

            'use strict';
            //uncomment to debug
            console.log('common');




            //add js class

            $('body').addClass('js');

            //Flickity
            $('.hero__carousel').flickity({
                // options
                cellAlign: 'center',
                contain: true,
                //autoPlay: 5000,
                imagesLoaded: true,
                wrapAround: true
            });

            //menu button
            var showButton = $('#menuButtonOpen, #menuButtonClose');
            var container = document.getElementById('primaryNavigation');
            ACSHOPIFY.ac_fn.open(container, showButton);

            //filter button
            var showButton = $('#filterButtonOpen, #filterButtonClose');
            var container = document.getElementById('filterContainer');
            ACSHOPIFY.ac_fn.open(container, showButton);

            //Search Button
            var showButton = $('#searchControl, #searchControlClose');
            var container = document.getElementById('searchFormMain');
            ACSHOPIFY.ac_fn.open(container, showButton);

            //Search New Address
            var showButton = $('#addressNewOpen, #addressNewClose');
            var container = document.getElementById('addressNewForm');
            ACSHOPIFY.ac_fn.open(container, showButton);

            //Edit Address Cards
            $('.customer-address__address-card').each(function () {
                var formId = $(this).data('form-id');
                //console.log('formId' + formId);
                //address button
                var showButton = $('.address-edit-toggle', this);
                var container = $(this);
                ACSHOPIFY.ac_fn.open(container, showButton);
            })

            var inactiveAccess = ($('[data-customer-access=inactive]').length > 0) ? true : false ;
            var accessNotificationSent = Cookies.get('ac-accessNotificationSent');

            var sendAccessNotification = (inactiveAccess == true && accessNotificationSent != 1) ? true : false;
           //var sendAccessNotification =  true;

            if (inactiveAccess == true){
                Cookies.set("ac-inactiveAccess", 1, { expires : 1 });
            }else{
                Cookies.set("ac-inactiveAccess", 0, { expires : 1 });

            }

            var first_name = $('[data-customer-first-name]').attr('data-customer-first-name');
            var last_name = $('[data-customer-last-name]').attr('data-customer-last-name');
            var email = $('[data-customer-email]').attr('data-customer-email');
            var phone = '';
            var mobile = '';

            var company = '';
            var vat = $('[name="customer[note][vat]"]').val();
            var company_type = $('[name="customer[note][company type]"]').val();

            var address1 = $('[name="customer[note][address1]"]').val();
            var address2 = $('[name="customer[note][address2]"]').val();
            var city = $('[name="customer[note][city]"]').val();
            var postcode = $('[name="customer[note][postcode]"]').val();
            var country = $('[name="customer[note][country]"]').val();

            var referrer = '';

            console.log('email - ' + email );

            if (sendAccessNotification == true){
                var data = {
                    'action': 'contact_form',
                    'first_name': first_name,
                    'last_name': last_name,
                    'email': email,
                    'subject': 'Tempest Design inactive access',
                    'title': 'A customer attempted to access their account but it is currently inactive.'
                }
                $.ajax({
                    type: "POST",
                    async: true,
                    url: 'http://tpd.ambercouch.co.uk/script/contact_form.php',
                    data: data,
                    error: function (jqXHR, textStatus, errorThrown) {
                        //  Request Failed.
                        console.log('Ajax failed')
                    },
                    success: function (response) {
                        // Assume Success. 'response' is the complete HTML page of the
                        // contact success form, so likely won't be helpful
                        console.log('Ajax yes!')
                    }
                });
                console.log('send access notification');
                Cookies.set("ac-accessNotificationSent", 1, { expires : 1 });
            }else{
                console.log('dont send access notification');
            }

            var submit = false;

            $(document).on('submit', 'form#create_customer', function (event) {

                first_name = $('[name="customer[first_name]"]').val();
                last_name = $('[name="customer[last_name]"]').val();
                email = $('[name="customer[email]"]').val();
                phone = $('[name="customer[note][tel]"]').val();
                mobile = $('[name="customer[note][mobile]"]').val();

                company = $('[name="customer[note][company]"]').val();
                vat = $('[name="customer[note][vat]"]').val();
                company_type = $('[name="customer[note][company type]"]').val();

                address1 = $('[name="customer[note][address1]"]').val();
                address2 = $('[name="customer[note][address2]"]').val();
                city = $('[name="customer[note][city]"]').val();
                postcode = $('[name="customer[note][postcode]"]').val();
                country = $('[name="customer[note][country]"]').val();

                referrer = $('[name="customer[note][referrer]"]').val();



                if(submit == false) {
                    event.preventDefault();
                    var data = {
                        'action': 'contact_form',
                        'first_name': first_name,
                        'last_name': last_name,
                        'phone': phone,
                        'mobile': mobile,
                        'email': email,

                        'company': company,
                        'vat' : vat,
                        'company_type' : company_type,

                        'address1': address1,
                        'address2': address2,
                        'city': city,
                        'postcode': postcode,
                        'country': country,

                        'referrer': referrer,

                        'subject': 'Tempest Design New Signup',
                        'title': 'A new customer account request has been received'
                        
                    }
                    $.ajax({
                        type: "POST",
                        async: true,
                        url: 'http://tpd.ambercouch.co.uk/script/contact_form.php',
                        data: data,
                        error: function (jqXHR, textStatus, errorThrown) {
                            //  Request Failed.
                            submit = true;
                            $('form#create_customer').submit();
                            console.log(data);
                            console.log('data.vat' + data.vat);

                        },
                        success: function (response) {
                            // Assume Success. 'response' is the complete HTML page of the
                            // contact success form, so likely won't be helpful
                            submit = true;
                            $('form#create_customer').submit();
                            console.log(data);
                            console.log('data.vat' + data.vat);

                        }
                    });
                }
            })



            $(function(){
                $('.filter-menu h4').on('click', function(e){
                    $(this).closest('.filter-group').not('.has_group_selected, .refine-header').toggleClass('expanded').find('ul,.filter-clear').toggle('fast');
                    e.preventDefault();
                });

                /* Expand first non-selected group on page load */
                $('.filter-group').not('.has_group_selected, .refine-header').first().addClass('expanded').find('ul,.filter-clear').slideDown('fast');
            });




            //REMODAL VIDEOS
            // $(document).on('closed', '.remodal', function(){
            //     var src;
            //     var dataSrc;
            //     $('[data-src]', this).each(function(){
            //         dataSrc =  $(this).attr('src');
            //         $(this).attr('data-src', dataSrc );
            //         $(this).attr('src', '');
            //     });
            // });

            // $(document).on('opened', '.remodal', function(){
            //     var src;
            //     var dataSrc;
            //     var $remodal = $(this);
            //
            //     $('[data-src]', this).each(function(){
            //         dataSrc =  $(this).attr('data-src');
            //         if(dataSrc != undefined){
            //             $(this).attr('src', dataSrc)
            //         }
            //     });
            // });

            //TOOLTIPS
            // $(document).on('mouseover', '[data-toggle=tooltip]', function () {
            //
            //     var title = $(this).attr('title');
            //     $(this).attr('data-original-title', title );
            //     $(this).attr('title', '' );
            //     $('.tooltip').addClass('bounceInDown');
            //     $('.tooltip__container').addClass('active');
            // })
            // $(document).on('mouseout', '[data-toggle=tooltip]', function () {
            //
            //     var title = $(this).attr('data-original-title');
            //     $(this).attr('data-original-title', '' );
            //     $(this).attr('title', title);
            //     $('.tooltip').removeClass('bounceInDown');
            //     $('.tooltip__container').removeClass('active');
            // })

            // var $mouseX = 0, $mouseY = 0;
            // var $xp = 0, $yp =0;
            //
            // $(document).on('mousemove','#mapExplore',function(e){
            //     $mouseX = e.clientX;
            //     $mouseY = e.clientY;
            // });

            // var $loop = setInterval(function(){
            //     // change 12 to alter damping higher is slower
            //     $xp += (($mouseX - $xp));
            //     $yp += (($mouseY - $yp));
            //     $("#mapTooltip").css({left:$xp +'px', top:$yp +'px'});
            // }, 30);

            // $('.hero-list__list').flickity({
            //     // options
            //     cellAlign: 'center',
            //     contain: true,
            //     wrapAround: true,
            //     lazyLoad: 2,
            //     imagesLoaded: true,
            //     pageDots: false
            // });

            // $('.subsidiary-news__list').flickity({
            //     // options
            //     cellAlign: 'center',
            //     contain: true,
            //     wrapAround: true,
            //     lazyLoad: 2,
            //     imagesLoaded: true,
            //     pageDots: true
            // });



            /**
             * navigation.js
             *
             * Handles toggling the navigation menu for small screens.
             */
            //( function() {
            //  var container, button, menu;
            //
            //  container = document.getElementById( 'main-navigation' );
            //  if ( ! container ) {
            //    return;
            //  }
            //
            //
            //  button = test;//document.getElementsByClassName( 'responsive-toggle' )[0];
            //  if ( 'undefined' === typeof button ) {
            //    button = container.querySelectorAll('.responsive-toggle')[0]
            //  }
            //  if ( 'undefined' === typeof button ) {
            //    return;
            //  }
            //
            //  menu = container.getElementsByTagName( 'ul' )[0];
            //
            //  // Hide menu toggle button if menu is empty and return early.
            //  if ( 'undefined' === typeof menu ) {
            //    button.style.display = 'none';
            //    return;
            //  }
            //
            //  menu.setAttribute( 'aria-expanded', 'false' );
            //
            //  if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
            //    menu.className += ' nav-menu';
            //  }
            //
            //  button.onclick = function() {
            //    if ( -1 !== container.className.indexOf( 'toggled' ) ) {
            //      container.className = container.className.replace( ' toggled', '' );
            //      button.setAttribute( 'aria-expanded', 'false' );
            //      menu.setAttribute( 'aria-expanded', 'false' );
            //    } else {
            //      container.className += ' toggled';
            //      button.setAttribute( 'aria-expanded', 'true' );
            //      menu.setAttribute( 'aria-expanded', 'true' );
            //    }
            //  };
            //} )();
            //



            console.log('ajax cart');
            function refreshCart(cart) {
                var $cartBtn = $("[data-button-cart]");
                // console.log('$cartBtn');
                // console.log($cartBtn);
                // console.log('cart');
                // console.log(cart);
                if ($cartBtn) {
                    var $cartCount = $cartBtn.find('[data-cart-count]');
                    if(cart.item_count == 0) {

                    } else if ($cartCount.length) {
                        $cartCount.text(cart.item_count);
                    }
                }
            }

            $(document).on('click', '[data-close=continue-shopping-helper]' ,function (e) {
                e.preventDefault();
               // $('.continue-shopping-helper').addClass('animated fadeOutRight');
               //  setTimeout(function(){
               //      $('.continue-shopping-helper').hide().removeClass('fadeOutRight');
               //  }, 1000);
                window.history.back();
                console.log('back button');
                //$('.continue-shopping-helper').unbind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            });

            $(".add-form__form").submit(function(e) {
                console.log('add click');
                e.preventDefault();
                var $addToCartForm = $(this);
                var $addToCartBtn = $addToCartForm.find('.add-form__submit-btn');

                $.ajax({
                    url: '/cart/add.js',
                    dataType: 'json',
                    type: 'post',
                    data: $addToCartForm.serialize(),
                    beforeSend: function() {
                        $addToCartBtn.attr('disabled', 'disabled').addClass('disabled');
                        //$addToCartBtn.find('span').text('Adding').removeClass("zoomIn").addClass('animated zoomOut');
                    },
                    success: function(itemData) {
                        //$addToCartBtn.find('span').text('Added to your Cart').removeClass('zoomOut').addClass('fadeIn');
                       // $addToCartForm.find('.add-form__submit-btn').show().addClass('animated fadeInLeft');
                        $addToCartForm.find('.continue-shopping-helper').show().addClass('animated fadeInDown');

                        window.setTimeout(function(){
                            $addToCartBtn.removeAttr('disabled').removeClass('disabled');
                            $addToCartBtn.find('span').addClass("fadeOut").text($addToCartBtn.data('label')).removeClass('fadeIn').removeClass("fadeOut").addClass('zoomIn');
                        }, 2500);




                        $.getJSON("/cart.js", function(cart) {
                            refreshCart(cart);
                        });
                    },
                    error: function(XMLHttpRequest) {
                        var response = eval('(' + XMLHttpRequest.responseText + ')');
                        response = response.description;
                        // $('.warning').remove();

                        var warning = '<p>' + response.replace('All 1 ', 'All ') + '</p>';

                            // $('.continue-shopping-helper__notice').addClass(' warning animated bounceIn ');
                            $('.continue-shopping-helper__notice-content').html(warning);
                        $addToCartForm.find('.continue-shopping-helper').show();
                        $('.continue-shopping-helper__notice--added, .continue-shopping-helper__notice--warning').removeClass('continue-shopping-helper__notice--added animated bounceIn').addClass('continue-shopping-helper__notice--warning animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                            $(this).removeClass('animated bounceIn');
                        });
                        $addToCartBtn.removeAttr('disabled').removeClass('disabled');
                        //$addToCartBtn.find('span').text({{ 'products.product.add_to_cart' | t | json }}).removeClass('zoomOut').addClass('zoomIn');
                    }
                });

                return false;
            });

        }
    },
    page: {
        init: function () {
            //uncomment to debug
            //console.log('pages');
        }
    },
   collection: {
        init: function () {
            //uncomment to debug
            //console.log('collection');
            var currentUrlPath = $('body').attr('data-url-path');
            Cookies.set('lastCollectionPath', currentUrlPath,  { expires: 1 })

            //hover animation
            $(document).on('mouseenter', '.product-thumb.is-available-sold-out', function (event) {
                //console.log($(this));
                $(this).find('[data-hover-animation]').addClass(' animated fadeInUp ')
            })

            //hover over the reminder
            $(document).on('mouseenter', '[data-get-reminder]', function(event){
                console.log('hovered')
                var productUrl = $(this).parent().attr('href');
                console.log(productUrl);
                $(this).parent().removeAttr("href");
                $(this).parent().attr("data-href", productUrl);
                //$(this).parent().attr('href');
            });


            $(document).on('mouseleave', '[data-get-reminder]', function(event){
                console.log('Leave it out')
                var productUrl = $(this).parent().attr('data-href');
                //$(this).parent().removeAttr("href");
                $(this).parent().attr("href", productUrl);
            });

            $(document).on('click', '[data-get-reminder]', function(event){
                var productUrl = $(this).attr('data-get-reminder');
                Cookies.set('openStockReminder', 'true', {expires: 1});
                console.log('reminder click')
               window.location = productUrl

            });


        }//end collection.init
    },
    product: {
        init: function () {
            //uncomment to debug
            //console.log('collection');

            var openStockReminder = Cookies.get('openStockReminder');
            var currentUrlPath = $('body').attr('data-url-path');
            Cookies.set('lastProductPath', currentUrlPath,  { expires: 1 })
            //alert(openStockReminder);
            if(openStockReminder == 'true'){

                ACSHOPIFY.ac_fn.defer('undefined','undefined','undefined','undefined',3);

            }else{
                console.log('we have no reminder');
            }


            $(document).on('click', '.product-gallery__img', function (e) {
                var src = $(this).attr('data-variantimage');
                var href = $(this).attr('data-variantlink');
                var optTitle = $(this).attr('title');

                $('[data-product-featured-image]').attr('src', src);
                $('[data-product-featured-link]').attr('href', href);
                $('#SingleOptionSelector-0').val(optTitle)
                console.log($(this).attr('data-variantimage'));
                console.log(optTitle);
            })
        }
    },
    cart: {
        init: function () {
            //uncomment to debug
            console.log('cart template');
            var lastCollectionPath = Cookies.get('lastCollectionPath');
            var lastProductPath = Cookies.get('lastProductPath');
            if (lastCollectionPath != undefined){
            $('[data-continue-path]').attr('href', lastCollectionPath);
            }else if(lastProductPath != undefined){
                $('[data-continue-path]').attr('href', lastProductPath);
            }
        }

    },
    var: {
        locale: ''
    },
    ac_fn:{
        locale: function (local) {

            if(local === undefined)
            {
                return ACSHOPIFY.var.locale
            }else{
                ACSHOPIFY.var.locale = local;
                return ACSHOPIFY.var.locale;
            }

        },
        open: function (container, showButton, parent, listParent) {
            var elState = showButton.attr('data-state');
            showButton.on('click', function(e){
                e.preventDefault();
                console.log('clicker');
                elState = showButton.attr('data-state');
                if ('off' === elState ) {
                    showButton.attr('data-state', 'on');
                    $(container).attr('data-state', 'on');
                    $(parent).attr('data-state', 'on');
                    $(container).addClass('ac-on');

                } else {
                    $(showButton).attr('data-state', 'off');
                    $(container).attr('data-state', 'off');
                    $(parent).attr('data-state', 'off');
                    $(container).removeClass('ac-on');
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
                        ACSHOPIFY.ac_fn.defer(successMethod, failMethod, testMethod, pause, attempts)
                    }, pause);
                }
            }
        }
    },

};

UTIL = {
    exec: function (template, handle) {
        var ns = ACSHOPIFY,
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