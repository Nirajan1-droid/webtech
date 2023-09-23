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
