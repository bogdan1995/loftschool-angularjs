"use strict";

notebookApp.factory("ContactFactory", function ($firebase, fbURL) {
    var ref = new Firebase(fbURL),
        sync = $firebase(ref),
        exports = {};

    exports.getInbox = function () {
        return sync.$asArray();
    };

    return exports;
});