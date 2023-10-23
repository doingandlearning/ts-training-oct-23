"use strict";
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
var Greeter = /** @class */ (function () {
    // times = 1;
    function Greeter(times) {
        this.times = times;
        this.location = "Salford";
        this.accent = "RP";
        this.times = times;
    }
    Greeter.prototype.greet = function (name) {
        console.log("Hello, ".concat(name, "! (in a ").concat(this.accent, " accent)").repeat(this.times));
    };
    return Greeter;
}());
var greeter = new Greeter(3);
greeter.greet("Manish");
var School = /** @class */ (function () {
    function School() {
        this.name = "";
    }
    School.locator = function () {
        console.log("I'm right here!");
    };
    return School;
}());
var Preschool = /** @class */ (function (_super) {
    __extends(Preschool, _super);
    function Preschool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Preschool;
}(School));
var school1 = new Preschool();
