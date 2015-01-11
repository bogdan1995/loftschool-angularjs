"use strict";

notebookApp.controller('ViewCtrl', ['$scope', 'ContactFactory', '$firebase','fbURL',
    function ($scope, ContactFactory, $firebase, fbURL) {
        $scope.inbox = ContactFactory.getInbox();
}]);
