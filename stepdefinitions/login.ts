import { FeedPageObject } from './../pages/feedPage';
import { browser, protractor, element, by } from "protractor";
import { LoginPageObject } from "../pages/loginPage";
import { ContactosPageObject } from "../pages/contactosPage";
import { OtroPerfilPageObject } from "../pages/otroPerfilPage";
import { logging } from "protractor/node_modules/@types/selenium-webdriver";
import { strictEqual } from 'assert';
 


const { Given, When, Then } = require("cucumber");

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const login: LoginPageObject = new LoginPageObject();
const feed: FeedPageObject = new FeedPageObject();
const contac: ContactosPageObject = new ContactosPageObject();
const otroPerfil: OtroPerfilPageObject = new OtroPerfilPageObject();
//const utils: Utils = new Utils();

    Given('Yo estoy en Linkedin', async () => {

          await browser.get('https://linkedin.com/');
         
          await expect(browser.getCurrentUrl()).to.eventually.equal('https://www.linkedin.com/');

 
      });

    When('uso el email {string}', async (string) => {
           await login.emailTextBox.sendKeys(string);

         });

    When('la contrasena {string}', async (string) => {
           await login.passwordTextBox.sendKeys(string);
         });

 
        //otra forma de escribir el timeout
When('Yo ingreso en linkedin', { timeout: 60 * 1000 }, async () => {
            await login.loginButton.click();      
      });

      When('Aparece mi nombre {string}', async (string) => {
            expect(feed.nameItem.getText()).to.eventually.equal(string);

      });


      Then('obtengo el mensaje Vaya, no reconocemos esa dirección de correo electrónico. Vuelve a intentarlo', async () => {
                  
            await expect(login.mensajeErrorLogin.isPresent());
      });



When('hago click en {string} de la pagina {string}', function (string,string2, callback) {
            // Write code here that turns the phrase above into concrete actions
            callback(null, 'pending');
      });



   When('Selecciono el contacto nro {string} de la lista',  async (string) => {
            await contac.listaContactos[(+string - 1)]
            console.log(contac[(+string - 1)])
         });



   Then('veo su perfil',  async () => {
         expect(otroPerfil.profileItem.isPresent()).to.eventually.equal(true)


         });
