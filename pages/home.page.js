/**
 * Created by titusfortner on 11/23/16.
 */
const Page = require('./page');

class HomePage extends Page {

    get a_link() { return browser.element("a[id='i am a link']"); };
    get input_comment() { return browser.element('#comments'); };
    get submit_form() { return browser.element('#submit'); };
    get comment_text() { return browser.element('#your_comments'); } 

    open() {
       super.open("training-test-page");
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