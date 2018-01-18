import { $, element, by } from "protractor";

export class FeedPageObject {
    public myNetworkButton: any;
    public profileItem: any;
    public nameItem: any;
    


    constructor() {

        this.profileItem = element(by.id('mynetwork-tab-icon'));
        //busco por texto conttenido
        this.myNetworkButton = element(by.linkText('Mi Red'));
        //busco por multiples nombres de clase y tag
        this.nameItem = element(by.css('a.tap-target feed-identity-module__actor-link profile-rail-card__actor-link ember-view'))
    }
}
