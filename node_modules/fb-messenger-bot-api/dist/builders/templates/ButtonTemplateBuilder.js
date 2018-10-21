"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../../classes/templates");
const enums_1 = require("../../enums");
/**
 * Represents a IButton Template. Used to represent shape of Facebook API object. Type returned by builder and
 * exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/button
 */
class ButtonTemplateBuilder {
    constructor() {
        this._template_type = enums_1.MESSAGE_TEMPLATE_TYPE.BUTTON;
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
    getText() {
        return this._text;
    }
    setText(value) {
        this._text = value;
        return this;
    }
    getTemplateType() {
        return this._template_type;
    }
    build() {
        return new templates_1.ButtonTemplate(this);
    }
}
exports.ButtonTemplateBuilder = ButtonTemplateBuilder;
//# sourceMappingURL=ButtonTemplateBuilder.js.map