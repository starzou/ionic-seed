var ctrls = angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {

    })

    .controller('ChatsCtrl', function ($scope, Chats) {
        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        }
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', ['$scope', '$timeout', '$ionicActionSheet', '$ionicPopup', function ($scope, $timeout, $ionicActionSheet, $ionicPopup) {

        $scope.settings = {
            enableFriends: true
        };

        $scope.show$ionicActionSheet = function () {

            var hideSheet = $ionicActionSheet.show({
                buttons        : [
                    {text: 'One'},
                    {text: 'Two'}
                ],
                destructiveText: 'Go',
                titleText      : 'What are you doing?',
                cancelText     : 'Fuck',
                cancel         : function () {

                },
                buttonClicked  : function (index) {

                    var confirmPopup = $ionicPopup.confirm({
                        title   : '小子',
                        template: '你是个大帅哥吗?'
                    });

                    confirmPopup.then(function (res) {
                        $ionicPopup.alert({
                            title   : '哟哟',
                            template: res ? '人帅人缘好' : '人丑就要多读书'
                        });
                    });

                    return true;
                }
            });

            //$timeout(function () {
            //    hideSheet();
            //}, 3000);
        };

        $scope.showCamera = function () {
            navigator.camera.getPicture(onSuccess, onFail, {
                quality        : 50,
                destinationType: Camera.DestinationType.DATA_URL
            });

            function onSuccess(imageData) {
                var image = document.getElementById('myImage');
                image.src = "data:image/jpeg;base64," + imageData;
            }

            function onFail(message) {
                console.log('Failed because: ' + message);
            }
        };


    }]);


ctrls.controller('Know1Ctrl', function ($scope, $timeout, $ionicActionSheet, $ionicBackdrop) {

    $scope.show_$ionicActionSheet = function () {
        $ionicActionSheet.show({
            buttons                 : [
                {text: '<b>Share</b> This'},
                {text: 'Move'},
                {text: 'Cut'}
            ],
            destructiveText         : 'Delete',
            titleText               : 'Modify your album',
            cancelText              : 'Cancel',
            cancel                  : function () {
                // do something
            },
            buttonClicked           : function (index) {
                if (index == 2) {
                    return true;
                }
                return false;
            },
            destructiveButtonClicked: function () {
                return true;
            }
        });
    };

    $scope.show_$ionicBackdrop = function () {
        $ionicBackdrop.retain();
        $timeout(function () {
            $ionicBackdrop.release();
        }, 1000);
    };


    var items = $scope.items = [
        {name: 'StarZou', hobby: 'JavaScript,HTML5,CSS3'},
        {name: 'Tom', hobby: 'CSS3'},
        {name: 'Lily', hobby: 'node.js'}
    ];

    $scope.doRefresh = function () {
        $timeout(function () {
            items.push({name: 'Star-' + Date.now(), hobby: 'Full Stack'});
            $scope.$broadcast('scroll.refreshComplete');
        }, 1000);
    };


});