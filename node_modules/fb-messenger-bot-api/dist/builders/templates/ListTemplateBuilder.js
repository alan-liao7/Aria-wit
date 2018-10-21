"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
const templates_1 = require("../../classes/templates");
/**
 * Represents a List Template. Used to represent shape of Facebook API object. Type returned by builder and
 * exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/list
 */
class ListTemplateBuilder {
    constructor() {
        this._template_type = enums_1.MESSAGE_TEMPLATE_TYPE.LIST;
    }
    getSharable() {
        return this._sharable;
    }
    setSharable(value) {
        this._sharable = value;
        return this;
    }
    getButtons() {
        return this._buttons;
    }
    setButtons(value) {
        this._buttons = value;
        return this;
    }
    getElements() {
        return this._elements;
    }
    setElements(value) {
        this._elements = value;
        return this;
    }
    getTopElementStyle() {
        return this._top_element_style;
    }
    setTopElementStyle(value) {
        this._top_element_style = value;
        return this;
    }
    getTemplateType() {
        return this._template_type;
    }
    build() {
        return new templates_1.ListTemplate(this);
    }
}
exports.ListTemplateBuilder = ListTemplateBuilder;
//# sourceMappingURL=ListTemplateBuilder.js.map