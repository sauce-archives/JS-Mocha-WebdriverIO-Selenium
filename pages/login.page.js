const Page = require('./page');

class LoginPage extends Page {

    constructor() {
        super();
    }
    
    open() {
       super.open("");
    }

    loginAs(username, password) {
        $("#user-name").value = username;
        $("#password").value = password;
        $(".btn_action").click();
    }

    isErrorVisible() {
        return $("[data-test='error']").isDisplayed();
    }

    
};

module.exports = LoginPage;