import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "http://www.linkedin.com",
    //soportes de multiples navegadores
    multiCapabilities: [
        {'browserName': 'firefox'},
        {'browserName': 'chrome'},
        // {'browserName': 'internet explorer'}
        ],
    //comento para que sea en paralelo, si no es de manera serial
    maxSessions: 1,

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    allScriptsTimeout: 50000, //This is the overall Timeout
    getPageTimeout: 50000, //This is the Page timeout
    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../stepdefinitions/*.ts", "../../support/*.ts"],
        strict: true,
        keepAlive: false,
        tags: ["@CaminoFeliz", "@PruebaNegativa"],//uso de etiquetas
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
