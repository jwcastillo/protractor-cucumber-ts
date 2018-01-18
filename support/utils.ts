
import { protractor } from "protractor";


    //busquedas de elementos con espera inteligente
    //https://medium.com/@ited.ro/how-to-use-smart-waits-with-protractor-how-to-use-expected-conditions-with-protractor-10c545c670be
export function testSearchingLookingMethod(elementFinder) {
        var EC = protractor.ExpectedConditions;

        let searchesForText = function () {
            return elementFinder.getText().then(function (actualTextResultedFromAPromise) {
                return actualTextResultedFromAPromise;
            });
        };
        return EC.and(EC.presenceOf(elementFinder), searchesForText);
    };

