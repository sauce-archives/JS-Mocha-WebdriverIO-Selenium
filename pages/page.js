/**
 * Created by titusfortner on 11/23/16.
 */
class Page {
    
    open(path) {
        browser.url('/' + path);
    }

}

export default Page;