var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//here funcitonkovar vanne key le euta function lai represent gareko xa jun le string return garne xa vanera tesko type lai specify gareko ho.
var users = {
    name: "nirajna",
    age: 12,
    funcitonkovar: function () {
        return "hello world";
    }
};
console.log(users);
function newd(a) {
    return a;
}
var cal = newd;
console.log(cal(4));
//aba what if the key is passed an function inside the objecty
//teti bela type function chai hudaina kinaki function lai pani type declarion ko time ma reference ko type ra return value of type lai specify garnu parne hunxa.
//considering that what kind of the type that the function returs is the main point.
// #functions thing
// function ko part ma parameter type and the return type is the most important thing
// the new thing to me is that the function can be assigned to the variable
//when we want to use that function we can call the function passed variable and we can pass the parameter to it and it then passes the parameter to the real funciton .
//now classes:
var Parent = /** @class */ (function () {
    function Parent() {
    }
    // name="nirajanb";
    Parent.prototype.anotherfunc = function (parameter) {
        return this.parameter = parameter;
    };
    return Parent;
}());
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "nirajan";
        return _this;
    }
    //we cannot define the function inside the class
    //this is the constructor which is defined inside the class
    //this.name always reperesent the first acessable class object variable name
    App.prototype.getName = function (name) {
        return this.name;
    };
    return App;
}(Parent));
var c1 = new Parent();
var c2 = new App();
console.log(c2.anotherfunc('nirajan value in the extended parent class ')); //parent class is accessed through the child class
console.log(c2.getName('hello'));
//parent can't access the constructor inside the child class
//parent constructor can be accessed using the child class
//declaration of the type can be done like the function type declaration as well as if the value is passed from the paramter from the outer input then we can also declare the type inside the class and outside the constructor.
// namespace user signin up login,blofk of code which contains many classes into single block
//classes haru namespace vitra banauda, we need to export them individualty, this can be also for the security reason. 
//   ####################################################################################################################################
//generic function is that where the data is accepted <T> of any type to the function and the return type could be of any format 
//one additional thing about the generic funnction is that the <symbol> is added after the name of  function and <T> like html tag is added after the name of the function 
// and for the parameter passed types the parameter are specified with the parameter:T with the same symbol of which were inside the html tag and the return type is also specified with T only 
//hence <> symbol is only used once and it accepts any type of the data and could return similar to the type input inside the functin
function namedd(data) {
    return data;
}
console.log(namedd({ name: "nirajan", age: 22 }));
