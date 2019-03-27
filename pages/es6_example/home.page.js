/**
 * Created by titusfortner on 11/23/16.
 */
const Page = require('./page');

class HomePage extends Page {

    get a_link() { return $("a[id='i am a link']"); };
    get input_comment() { return $('#comments'); };
    get submit_form() { return $('#submit'); };
    get comment_text() { return $('#your_comments'); } 

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
        let el = this.comment_text;

        browser.waitUntil(function () {
            return el.getText() !== 'Your comments: None'
        }, 5000, 'expected text to be different after 5s')
    }

    getComment() {
        return this.comment_text.getText().replace('Your comments: ', '');
    }

};

module.exports = HomePage;