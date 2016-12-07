$(function(){
    $('#button-submit').click(function(event){
        event.preventDefault();
        var button = this;
        window.setTimeout(function(form){
            $(form).submit();
        }, 1000, $(button).closest('form'));
    });
});
