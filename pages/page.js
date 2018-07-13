/**
 * Created by titusfortner on 11/23/16.
 */
class Page {

    constructor(){
        
    }
    
    open(path) {
        browser.url('/' + path);
    }

}

module.exports = Page;