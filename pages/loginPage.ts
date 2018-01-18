import { $, element, by } from "protractor";

export class LoginPageObject {
    public emailTextBox: any;
    public passwordTextBox: any;

    public loginButton: any;
    public recoveryButton: any;
    public mensajeErrorLogin: any;


    constructor() {
        //busco por nombre
        this.emailTextBox = element(by.name('session_key'));
      
        //busco por id
        this.passwordTextBox = element(by.id('login-password'));

        //this.passwordTxtBox = element(by.name('session_password'));
        this.loginButton = element(by.id('login-submit'));
        //busco por clases
        this.recoveryButton = by.css('link-forgot-password');
        //busco por xpath
        this.mensajeErrorLogin = element(by.xpath("//*[text()[normalize-space() = 'Vaya, no reconocemos esa dirección de correo electrónico. Vuelve a intentarlo.']]"))
    }
}
