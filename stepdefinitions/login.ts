import { browser, protractor, element, by } from "protractor";
import { LoginPageObject } from "../pages/loginPage";
import { FeedPageObject } from "../pages/feedPage";
import { ContactosPageObject } from "../pages/contactosPage";
import { OtroPerfilPageObject } from "../pages/otroPerfilPage";
import { logging } from "protractor/node_modules/@types/selenium-webdriver";

const { Given, When, Then } = require("cucumber");

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const login: LoginPageObject = new LoginPageObject();
const feed: FeedPageObject = new FeedPageObject();
const contac: ContactosPageObject = new ContactosPageObject();
const otroPerfil: OtroPerfilPageObject = new OtroPerfilPageObject();

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

   When('Yo ingreso en linkedin', async () => {

         await  login.loginButton.click()
         await expect(browser.getCurrentUrl()).to.eventually.equal('https://www.linkedin.com/feed/');

         });
        


   Then('obtengo el mensaje {string}', async (string) => {
            await expect(element(by.xpath("//*[text()[normalize-space() = '" + string + "']]")));
         });


When('veo mi perfil', { timeout: 60 * 1000 }, async () => {

         await login.loginButton.click().then(function () {
               browser.wait(function () {
                     return feed.profileItem.isPresent();
               }, 30000);
            });

         });


   When('voy a mis contactos',  async () => {

         await browser.get("https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&origin=MEMBER_PROFILE_CANNED_SEARCH")

         });


   When('Selecciono el contacto nro {string} de la lista',  async (string) => {
            await contac.listaContactos[(+string - 1)]
            console.log(contac[(+string - 1)])
         });



   Then('veo su perfil',  async () => {
         expect(otroPerfil.profileItem.isPresent()).to.eventually.equal(true)


         });
