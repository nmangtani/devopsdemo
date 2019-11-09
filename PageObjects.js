var PageObjects = function () {
	//********************elements********************
	//urls
    var url_Home = "https://mhce2e37a359ca.azurewebsites.net/";
    var url_JoinUs = url_Home + "joinus";
    var url_Login = url_Home + "Account/Login"
	//Header elements
    var logo = element(by.css("navbar-brand"));
    var header_Home = element(by.css("nav")).element(by.cssContainingText('a', 'HOME'));
    var header_JoinUs = element(by.css('nav')).element(by.cssContainingText('a', 'JOIN US'));
    var header_Login = element(by.css('nav')).element(by.cssContainingText('a', 'Login'));
   
	//Homepage elements
    //Login elements
    var input_username = element(by.id('UserName'));
    var input_password = element(by.id('Password'));
    var btn_login = element(by.buttonText('LOGIN'));
	//Footer elements
    //Data
    var user_username = "User";
    var user_password = "P2ssw0rd@1";
    var admin_username = "Admin";
    var admin_password = "P2ssw0rd@123";
	//********************functions********************
    this.get = function () {
        browser.waitForAngularEnabled(false);
        browser.get(url_Home);
    };

    this.HomeUrl = function () {
        return url_Home;
    };

    this.JoinUsUrl = function () {
        return url_JoinUs;
    };

    this.LoginUrl = function () {
        return url_Login;
    }

    this.clickLogo = function () {
        logo.click();
    };

    this.clickHome = function () {
        header_Home.click();
    };

    this.clickJoinUs = function () {
        header_JoinUs.click();
    };

    this.clickLogin = function () {
        header_Login.click();
    }

    this.userLogin = function () {
        input_username.sendKeys(user_username);
        input_password.sendKeys(user_password);
        btn_login.click();
    }

    this.adminLogin = function () {
        input_username.sendKeys(admin_username);
        input_password.sendKeys(admin_password);
        btn_login.click();
    }
};
module.exports = new PageObjects();