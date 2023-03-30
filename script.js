function generateCaptcha() {
    var captcha = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6; i++) {
        captcha += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    document.getElementById("captcha").innerHTML = captcha;
}

generateCaptcha();