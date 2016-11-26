/// <reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        function MainController(userService) {
            this.userService = userService;
            this.users = [];
            this.message = "Hello from the other side ! ";
            var vm = this;
            this.userService
                .loadAllUsers()
                .then(function (users) {
                vm.users = users;
                console.log(vm.users);
            });
        }
        MainController.$inject = ['userService'];
        return MainController;
    }());
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=mainController.js.map