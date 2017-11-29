jQuery(document).ready(function(){

    HEADER.init();
    JUAN.init();
});

//Header Sticky
var HEADER = {
    init:function(){
        this.stickyHeader();     
    },

    stickyHeader: function(){
        console.log('entro');
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 106) {
                jQuery(".contenedor-menu").addClass('sticky');
            } else {
                jQuery(".contenedor-menu").removeClass('sticky');
            }
        });
    }
}

var JUAN = {
    init:function(){
        this.desplegable();
    },
    desplegable: function(){
        jQuery('li.desplegable').hover(function(){
            jQuery(this).toggleClass('abrir');
        });

        jQuery('.conten-img').hover(function(){
            jQuery(this).toggleClass('abrir');
        });
    }
}


//Newsletter
function newsLeave(sender, defaultValue) {
    if (jQuery.trim(sender.value) == '') sender.value = defaultValue;
}
function newsSelect(sender, defaultValue) {
    if (sender.value == defaultValue) sender.value = '';
    else sender.select();
}



