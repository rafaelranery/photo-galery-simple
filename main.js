/* $(document).ready(function(){
    console.log(document.querySelector('header button'));
    console.log($('header button'));
    console.log($('#btn-cancel'));
}); */

///// jQuery
// $(elemento/seletor)

//click
$(document).ready(function () {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#btn-cancel').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const adressNewImage = $('#new-img-adress').val();
        const newItem = $('<li style="display: none"></li>');
        $(`<img src="${adressNewImage}"/>`).appendTo(newItem);
        $(`<div class="overlay-img-link"><a href="${adressNewImage}" target="_blank" title="ver-imagem-em-tamanho-real"> Ver imagem em tamanho real</a></div>`).appendTo(newItem);

        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);

        $('#new-img-adress').val('');
    })
})

//manipulação do dom com jQuery;