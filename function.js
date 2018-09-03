jQuery('.quantity').append('<button class="btn-qtd btn-plus">+</button>');
jQuery('.quantity').prepend('<button class="btn-qtd btn-minus">-</button>');

jQuery('.quantity button').each(function(){
    jQuery(this).click(function(e){
        e.preventDefault();
        var qtd = parseInt(jQuery(this).parent().find('input[type="number"]').val());
        if( jQuery(this).hasClass('btn-plus') ){
            jQuery(this).parent().find('input[type="number"]').val( qtd+1 ).attr('value', qtd+1);
        }else if( qtd > 1){
            jQuery(this).parent().find('input[type="number"]').val( qtd-1 ).attr('value', qtd-1);
        }
        buttonText();     
    });
}); 

function buttonText(){

    var productPrice = jQuery('p.price .woocommerce-Price-amount').text();
    var productQtd = jQuery('.input-text.qty').val();

    if( jQuery('.single_add_to_cart_button').hasClass('disabled')){
        jQuery('.qty').attr('disabled', true);
        jQuery('.btn-qtd').attr('disabled', true);
    }else{
        jQuery('.qty').attr('disabled', false);
        jQuery('.btn-qtd').attr('disabled', false);
    }

    if( parseInt(productQtd) > 1){
        productQtd =  productQtd + " items";
    }else{
        productQtd =  productQtd + " item";
    }

    var finalPrice = productPrice.replace('$','');
    finalPrice = parseFloat(finalPrice)*parseFloat(productQtd);

    jQuery('.btn-price').html('$' + finalPrice + '.00');
    jQuery('.single_add_to_cart_button span.btn-qtd').html( '(' + productQtd + ')');
}