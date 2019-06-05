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
            console.log('common customer data 123 blog 1234567890');


            $('body').addClass('js');



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
                        pathLastSection = ACSHOPIFY.fn.removePlus(pathLastSection.replace(clickedTag, ""));

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
                        ACSHOPIFY.fn.defer(successMethod, failMethod, testMethod, pause, attempts)
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
