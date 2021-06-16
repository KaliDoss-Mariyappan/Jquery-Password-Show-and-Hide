$(document).ready(function(){
    $(".showHideBtn").on("click", function() {
        var password = $("#passwordInputId");
        var passwordInputType = password.attr('type');
        if(passwordInputType === 'password') {
            $(this).val('Hide');
            password.attr('type','text');
        }else {
            $(this).val('Show');
            password.attr('type','password');
        }
    });
});