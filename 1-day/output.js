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
var Userkosabaikura;
(function (Userkosabaikura) {
    var Parent = /** @class */ (function () {
        function Parent() {
        }
        Parent.prototype.setParentkoName = function (name) {
            // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
            return this.name = name;
        };
        return Parent;
    }());
    Userkosabaikura.Parent = Parent;
})(Userkosabaikura || (Userkosabaikura = {}));
/// <reference path="./utils.ts"/>
var Userkosabaikura;
(function (Userkosabaikura) {
    var Userkodata = /** @class */ (function (_super) {
        __extends(Userkodata, _super);
        function Userkodata() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //parent xa arko file ma, but tesko name pani same xa as ahile ko
        Userkodata.prototype.getName = function () {
            return this.name;
            // return "nirajan from the class inside the namespace and the class is being export"
        };
        return Userkodata;
    }(Userkosabaikura.Parent));
    Userkosabaikura.Userkodata = Userkodata;
})(Userkosabaikura || (Userkosabaikura = {}));
//agi
// biome-ignore lint/style/useConst: <explanation>
var u1 = new Userkosabaikura.Userkodata();
u1.setParentkoName("nirajan");
console.log(u1.getName());
