import { $, element, by } from "protractor";

export class FeedPageObject {
    public myNetworkButton: any;
    public profileItem: any;


    constructor() {
//*[@id="ember2377"]/img
        this.profileItem = element(by.id('mynetwork-tab-icon'));
        this.myNetworkButton = element(by.linkText('Mi Red'));
    }
}
