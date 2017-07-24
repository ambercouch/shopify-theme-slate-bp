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

            //ACSHOPIFY.ac_fn.locale($('body').attr('data-locale'));

            //console.log('ACSHOPIFY.ac_fn.locale()');
            //console.log(ACSHOPIFY.ac_fn.locale());

            // $('[data-scroll]').click(function(e) {
            //     // Prevent the jump and the #hash from appearing on the address bar
            //     e.preventDefault();
            //     // Scroll the window, stop any previous animation, stop on user manual scroll
            //     // Check https://github.com/flesler/jquery.scrollTo for more customizability
            //     $(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true});
            // });
            //add js class
            $('body').addClass('js');

            //menu button
            var showButton = $('#menuButtonOpen, #menuButtonClose');
            var container = document.getElementById('primaryNavigation');
            ACSHOPIFY.ac_fn.open(container, showButton);

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






        }
    },
    page: {
        init: function () {
            //uncomment to debug
            //console.log('pages');
        }
    },
    post: {
        init: function () {
            //uncomment to debug
            //console.log('posts');
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
            template = body.getAttribute('data-post-type'),
            handle = body.getAttribute('data-post-slug');

        UTIL.exec('common');
        UTIL.exec(template);
        UTIL.exec(template, handle);
    }
};
$(window).on('load',UTIL.init);