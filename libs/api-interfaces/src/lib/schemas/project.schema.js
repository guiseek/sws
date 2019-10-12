"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
require("reflect-metadata");
var ProjectSchema = /** @class */ (function () {
    function ProjectSchema() {
    }
    __decorate([
        FilterProperty({
            type: 'input',
            label: 'Nome'
        })
    ], ProjectSchema.prototype, "name");
    return ProjectSchema;
}());
exports.ProjectSchema = ProjectSchema;
// function Property(prop: IProperty) {
// }
function FormProperty(el) {
}
function FilterProperty(el) {
    return function (target, key) {
        // target.elements.push(el)
        // const element: FormElement = el
        if (!target['elements']) {
            target['elements'] = [];
        }
        var t = Reflect.getMetadata('design:type', target, key);
        el.field = key;
        console.log('el: ', el);
        console.log(t.name);
    };
}
function getType(target, key) {
    // const t = Reflect.getMetadata()
    var t = Reflect.getMetadata("design:type", target, key);
    console.log(key + " type: " + t.name);
    console.log('t: ', t);
}
exports.getType = getType;
var CommonTypeComponents;
(function (CommonTypeComponents) {
    CommonTypeComponents["String"] = "input";
    CommonTypeComponents["Date"] = "date";
    CommonTypeComponents["Boolean"] = "checkbox";
})(CommonTypeComponents = exports.CommonTypeComponents || (exports.CommonTypeComponents = {}));
function convertCommonTypes(type) {
}
exports.convertCommonTypes = convertCommonTypes;
var schema = new ProjectSchema();
