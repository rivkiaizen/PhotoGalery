$(document).ready(function () {
    var name = $("#name"),
    nameRepeat = $("#nameRepeat"),
    save = $("#save"),
    password = $("#password"),
    greet = $("#greet");

    name.keyup(function () {
        if (name.val().length == 0) {
            greet.addClass("hide");
            save.attr("disabled", "disabled");
            nameRepeat.text('');
        }
        else {
            greet.removeClass("hide");
            save.removeAttr("disabled");
            nameRepeat.text(name.val());
        }
    })
});
function login() {
    var name = $("#name"),
    password = $("#password"),
    spSuccess = $("#spSuccess");

    var User = {
        name: name.val(),
        password: password.val()
    }
    
    $.ajax("/api/login", {
        data: JSON.stringify(User),
        contentType: 'application/json',
        type: 'POST',
    })
    .done(function (data) {
        if (data) {
            spSuccess.text('משתמש נכנס בהצלחה');
            spSuccess.removeClass('label-danger');
            spSuccess.addClass('label-success');

        }
        else {
            spSuccess.text('משתמש לא קיים');
            spSuccess.removeClass('label-success');
            spSuccess.addClass('label-danger');
        }
        spSuccess.removeClass('hide');
    },function (error) {
        console.log(error);
    });
}