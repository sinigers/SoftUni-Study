function validate() {
    let ckeckBox = $('#company');
    let userName = $('#username');
    let email = $('#email');
    let pass = $('#password');
    let passComfirm = $('#comfirm-password');
    let companyNum = $('#companyNumber');

    //ot regex101.com - възможни символи да се попълват
    let chekUserName = /^[a-zA-Z0-9]{3,20}$/;
    let checkEmail = /^.+@.+\..+$/;
    let checkPass = /^.{5,15}$/;

    // function(e) педотвратява презареждането на страницата
    let btn = $('#submit').on('click', function(e) {
        e.preventDefault();
        if (!chekUserName.test(userName.val())) {
            userName.css('border', '2px solid red')
        }
        if (!checkPass.test(pass.val())) {
            pass.css('border', '2px solid red')
        }
        if (!checkEmail.test(email.val())) {
            email.css('border', '2px solid red')
        }
        if (!checkPass.test(comfirmPass.val()) && pass.val() !== passComfirm.val()) {
            passComfirm.css('border', '2px solid red')
        }
    });

    // chekboxa показва/скрива id="companyInfo"
    ckeckBox.change(function() {
        if (ckeckBox.is(':checked')) {
            $('#companyInfo').css('display', 'block');
        } else {
            $('#companyInfo').css('display', 'none');
        }
    })


}