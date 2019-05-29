

        jQuery(function() {
            var $module = jQuery('#m-1516192986150').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $module.children('.hero-link').hide();
            }

            if($module.attr('data-fullheight') == '1' ){
                var wHeight = jQuery(window).height();
                $module.css({
                    'height': wHeight
                });
                jQuery(window).resize(function(){
                    $module.css('height', jQuery(window).height());
                });
                $module.addClass('full-height');
            } else {
                $module.css({
                    'height': 'auto'
                });
                jQuery(window).resize(function(){
                    $module.css('height', 'auto');
                });
                $module.removeClass('full-height');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');
            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);

                var backgroundImage = $module.parent().css('background-image');
                var backgroundSize = $module.parent().css('background-size');
                var backgroundPosition = $module.parent().css('background-position');

                $module.children('.gf_hero-bg').css({
                    'background-image'      : backgroundImage,
                    'background-size'       : backgroundSize,
                    'background-position'   : backgroundPosition,
                    '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                    '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                    '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                    '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                    'transition'            : 'transform ' + transition + 's ease-in-out'
                });
            }
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1522238610131').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $module.children('.hero-link').hide();
            }

            if($module.attr('data-fullheight') == '1' ){
                var wHeight = jQuery(window).height();
                $module.css({
                    'height': wHeight
                });
                jQuery(window).resize(function(){
                    $module.css('height', jQuery(window).height());
                });
                $module.addClass('full-height');
            } else {
                $module.css({
                    'height': 'auto'
                });
                jQuery(window).resize(function(){
                    $module.css('height', 'auto');
                });
                $module.removeClass('full-height');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');
            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);

                var backgroundImage = $module.parent().css('background-image');
                var backgroundSize = $module.parent().css('background-size');
                var backgroundPosition = $module.parent().css('background-position');

                $module.children('.gf_hero-bg').css({
                    'background-image'      : backgroundImage,
                    'background-size'       : backgroundSize,
                    'background-position'   : backgroundPosition,
                    '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                    '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                    '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                    '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                    'transition'            : 'transform ' + transition + 's ease-in-out'
                });
            }
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1522238658097').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $module.children('.hero-link').hide();
            }

            if($module.attr('data-fullheight') == '1' ){
                var wHeight = jQuery(window).height();
                $module.css({
                    'height': wHeight
                });
                jQuery(window).resize(function(){
                    $module.css('height', jQuery(window).height());
                });
                $module.addClass('full-height');
            } else {
                $module.css({
                    'height': 'auto'
                });
                jQuery(window).resize(function(){
                    $module.css('height', 'auto');
                });
                $module.removeClass('full-height');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');
            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);

                var backgroundImage = $module.parent().css('background-image');
                var backgroundSize = $module.parent().css('background-size');
                var backgroundPosition = $module.parent().css('background-position');

                $module.children('.gf_hero-bg').css({
                    'background-image'      : backgroundImage,
                    'background-size'       : backgroundSize,
                    'background-position'   : backgroundPosition,
                    '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                    '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                    '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                    '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                    'transition'            : 'transform ' + transition + 's ease-in-out'
                });
            }
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1522238532951').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $module.children('.hero-link').hide();
            }

            if($module.attr('data-fullheight') == '1' ){
                var wHeight = jQuery(window).height();
                $module.css({
                    'height': wHeight
                });
                jQuery(window).resize(function(){
                    $module.css('height', jQuery(window).height());
                });
                $module.addClass('full-height');
            } else {
                $module.css({
                    'height': 'auto'
                });
                jQuery(window).resize(function(){
                    $module.css('height', 'auto');
                });
                $module.removeClass('full-height');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');
            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);

                var backgroundImage = $module.parent().css('background-image');
                var backgroundSize = $module.parent().css('background-size');
                var backgroundPosition = $module.parent().css('background-position');

                $module.children('.gf_hero-bg').css({
                    'background-image'      : backgroundImage,
                    'background-size'       : backgroundSize,
                    'background-position'   : backgroundPosition,
                    '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                    '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                    '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                    '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                    'transition'            : 'transform ' + transition + 's ease-in-out'
                });
            }
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1522238670283').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $module.children('.hero-link').hide();
            }

            if($module.attr('data-fullheight') == '1' ){
                var wHeight = jQuery(window).height();
                $module.css({
                    'height': wHeight
                });
                jQuery(window).resize(function(){
                    $module.css('height', jQuery(window).height());
                });
                $module.addClass('full-height');
            } else {
                $module.css({
                    'height': 'auto'
                });
                jQuery(window).resize(function(){
                    $module.css('height', 'auto');
                });
                $module.removeClass('full-height');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');
            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);

                var backgroundImage = $module.parent().css('background-image');
                var backgroundSize = $module.parent().css('background-size');
                var backgroundPosition = $module.parent().css('background-position');

                $module.children('.gf_hero-bg').css({
                    'background-image'      : backgroundImage,
                    'background-size'       : backgroundSize,
                    'background-position'   : backgroundPosition,
                    '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                    '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                    '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                    '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                    'transition'            : 'transform ' + transition + 's ease-in-out'
                });
            }
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1516196204931').children('.module');   
            var columns = $module.data('columns'),
                nav = $module.data('nav'), 
                navspeed = $module.data('navspeed'), 
                dots = $module.data('dots'),
                center = $module.data('center'),
                autoplaytimeout = $module.data('autoplaytimeout'),
                autoplayhoverpause = $module.data('autoplayhoverpause');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'production') {
                var autoplay = $module.data('autoplay'), 
                    loop = $module.data('loop');
            } else {
                var autoplay = 0, 
                    loop = 0;
            }
        
            $module.owlCarousel({
                mouseDrag: false,
                nav: nav,
                dots: dots,
                autoplayHoverPause: autoplayhoverpause,
                autoplay: autoplay,
                autoplayTimeout: autoplaytimeout,
                center: center,
                loop: loop,
                navSpeed: navspeed,
                autoWidth: !1,
                items: columns,
                responsive: {
                    0: {
                        items: 1,
                        nav: nav, 
                        dots: false 
                    },
                    700: {
                        items: columns,
                        nav: nav, 
                        dots: dots 
                    },
                    1000: {      
                        items: columns,
                        nav: nav, 
                        dots: dots,
                    },
                    1200: {      
                        items: columns,
                        nav: nav, 
                        dots: dots 
                    }
                }
            }); 
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1516196342373').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $module.children('.hero-link').hide();
            }

            if($module.attr('data-fullheight') == '1' ){
                var wHeight = jQuery(window).height();
                $module.css({
                    'height': wHeight
                });
                jQuery(window).resize(function(){
                    $module.css('height', jQuery(window).height());
                });
                $module.addClass('full-height');
            } else {
                $module.css({
                    'height': 'auto'
                });
                jQuery(window).resize(function(){
                    $module.css('height', 'auto');
                });
                $module.removeClass('full-height');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');
            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);

                var backgroundImage = $module.parent().css('background-image');
                var backgroundSize = $module.parent().css('background-size');
                var backgroundPosition = $module.parent().css('background-position');

                $module.children('.gf_hero-bg').css({
                    'background-image'      : backgroundImage,
                    'background-size'       : backgroundSize,
                    'background-position'   : backgroundPosition,
                    '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                    '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                    '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                    '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                    'transition'            : 'transform ' + transition + 's ease-in-out'
                });
            }
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1516702389686').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $module.children('.hero-link').hide();
            }

            if($module.attr('data-fullheight') == '1' ){
                var wHeight = jQuery(window).height();
                $module.css({
                    'height': wHeight
                });
                jQuery(window).resize(function(){
                    $module.css('height', jQuery(window).height());
                });
                $module.addClass('full-height');
            } else {
                $module.css({
                    'height': 'auto'
                });
                jQuery(window).resize(function(){
                    $module.css('height', 'auto');
                });
                $module.removeClass('full-height');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');
            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);

                var backgroundImage = $module.parent().css('background-image');
                var backgroundSize = $module.parent().css('background-size');
                var backgroundPosition = $module.parent().css('background-position');

                $module.children('.gf_hero-bg').css({
                    'background-image'      : backgroundImage,
                    'background-size'       : backgroundSize,
                    'background-position'   : backgroundPosition,
                    '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                    '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                    '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                    '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                    'transition'            : 'transform ' + transition + 's ease-in-out'
                });
            }
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1516196354028').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $module.children('.hero-link').hide();
            }

            if($module.attr('data-fullheight') == '1' ){
                var wHeight = jQuery(window).height();
                $module.css({
                    'height': wHeight
                });
                jQuery(window).resize(function(){
                    $module.css('height', jQuery(window).height());
                });
                $module.addClass('full-height');
            } else {
                $module.css({
                    'height': 'auto'
                });
                jQuery(window).resize(function(){
                    $module.css('height', 'auto');
                });
                $module.removeClass('full-height');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');
            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);

                var backgroundImage = $module.parent().css('background-image');
                var backgroundSize = $module.parent().css('background-size');
                var backgroundPosition = $module.parent().css('background-position');

                $module.children('.gf_hero-bg').css({
                    'background-image'      : backgroundImage,
                    'background-size'       : backgroundSize,
                    'background-position'   : backgroundPosition,
                    '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                    '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                    '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                    '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                    'transition'            : 'transform ' + transition + 's ease-in-out'
                });
            }
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1516196315069').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $module.children('.hero-link').hide();
            }

            if($module.attr('data-fullheight') == '1' ){
                var wHeight = jQuery(window).height();
                $module.css({
                    'height': wHeight
                });
                jQuery(window).resize(function(){
                    $module.css('height', jQuery(window).height());
                });
                $module.addClass('full-height');
            } else {
                $module.css({
                    'height': 'auto'
                });
                jQuery(window).resize(function(){
                    $module.css('height', 'auto');
                });
                $module.removeClass('full-height');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');
            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);

                var backgroundImage = $module.parent().css('background-image');
                var backgroundSize = $module.parent().css('background-size');
                var backgroundPosition = $module.parent().css('background-position');

                $module.children('.gf_hero-bg').css({
                    'background-image'      : backgroundImage,
                    'background-size'       : backgroundSize,
                    'background-position'   : backgroundPosition,
                    '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                    '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                    '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                    '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                    'transition'            : 'transform ' + transition + 's ease-in-out'
                });
            }
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1522240078889').children('.module');
            var btnLabel = $module.attr('data-btnlabel');
            $module.gfSocialShare({
                btnLabel: btnLabel
            });
        });
    