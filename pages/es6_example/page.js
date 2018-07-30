/**
 * Created by titusfortner on 11/23/16.
 */
class Page {

    constructor(){ };

    get title() { return browser.getTitle(); }; 
    
    open(path) {
        browser.url(`/${path}`);
    }

}

module.exports = Page;