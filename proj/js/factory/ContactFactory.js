"use strict";

notebookApp.factory("ContactFactory", function ($firebase, fbURL) {
    var ref = new Firebase(fbURL),
        sync = $firebase(ref),
        exports = {};

    exports.getContacts = function () {
        return sync.$asArray();
    };


    exports.addContact = function (text) {
        return sync.$asArray().$add(text);
    };

    return exports;
});