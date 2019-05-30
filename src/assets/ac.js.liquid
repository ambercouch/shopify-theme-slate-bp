/**
 * Created by Richard on 07/07/2017.
 */
/**
 * Created by Richard on 19/09/2016.
 */


//FidVids - uses custom selector because the youtube vid is lazy loaded so does not exist until modal is opened
//$("[data-fitvid]").fitVids({ customSelector: "iframe[data-youtube-iframe]"});

console.log('ACSHOPIFY BBD');
ACSHOPIFY = {
    common: {
        init: function () {

            'use strict';
            //uncomment to debug
            console.log('common customer data 123');


            $('body').addClass('js');



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


        }//end collection.init
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
