/**
 * Created by titusfortner on 11/23/16.
 */
var Page = require('./page');

var HomePage = Object.create(Page, {
    a_link: {
        get: function () {
            return browser.element("a[id='i am a link']");
        }
    },

    input_comment: {
        get: function () {
            return browser.element('#comments');
        }
    },
    submit_form: {
        get: function () {
            return browser.element('#submit');
        }
    },
    comment_text: {
        get: function () {
            return browser.element('#your_comments');
        }
    },

    title: {
        value: function () {
            return browser.getTitle();
        }
    },

    open: {
        value: function () {
            Page.open.call(this, 'training-test-page/');
        }
    },

    setComment: {
        value: function (comment) {
            this.input_comment.setValue(comment);
        }
    },

    follow_link: {
        value: function () {
            this.a_link.click()
        }
    },

    submit: {
        value: function () {
            this.submit_form.click();
            var el = this.comment_text;

            browser.waitUntil(function () {
                return el.getText() !== 'Your comments: None'
            }, 5000, 'expected text to be different after 5s')
        }
    },

    getComment: {
        value: function () {
            return this.comment_text.getText().replace('Your comments: ', '');
        }
    }

});

module.exports = HomePage;