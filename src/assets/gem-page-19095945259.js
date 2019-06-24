

        jQuery(function() {
            var $module = jQuery('#m-1516706630811').children('.module');

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
            var $module = jQuery('#m-1522235763355').children('.module');

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
            var $module = jQuery('#m-1522240012033').children('.module');
            var btnLabel = $module.attr('data-btnlabel');
            $module.gfSocialShare({
                btnLabel: btnLabel
            });
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1516708707638').children('.module');

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
            var $module = jQuery('#m-1516708736846').children('.module');

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
            var $module = jQuery('#m-1516708746259').children('.module');

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
            var $module = jQuery('#m-1521635423507').children('.module');

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
            var $module = jQuery('#m-1521635433219').children('.module');

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
            var $module = jQuery('#m-1521800279802').children('.module');

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
    