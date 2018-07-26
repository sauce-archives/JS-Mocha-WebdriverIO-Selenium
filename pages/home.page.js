/**
 * Created by titusfortner on 11/23/16.
 */
const Page = require('./page');

class HomePage extends Page {

    constructor() {
        super();
        this.a_link = browser.element("a[id='i am a link']"),
        this.input_comment = browser.element('#comments');
        this.submit_form = browser.element('#submit');
        this.comment_text = browser.element('#your_comments');
        this.title = browser.getTitle();
        
    }

    open() {
       super.open("/training-test-page");
    }

    setComment(comment) {
        this.input_comment.setValue(comment);
    }

    follow_link() {
        this.a_link.click()
    }

    submit() {
        this.submit_form.click();
        var el = this.comment_text;

        browser.waitUntil(function () {
            return el.getText() !== 'Your comments: None'
        }, 5000, 'expected text to be different after 5s')
    }

    getComment() {
        return this.comment_text.getText().replace('Your comments: ', '');
    }

};

module.exports = HomePage;