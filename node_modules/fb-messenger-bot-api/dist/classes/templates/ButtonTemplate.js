"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMessageTemplate_1 = require("./AbstractMessageTemplate");
/**
 * Represents a IButton Template. Used to represent shape of Facebook API object. Type returned by builder and exposed
 * to users to create own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/button
 */
class ButtonTemplate extends AbstractMessageTemplate_1.AbstractMessageTemplate {
    constructor(builder) {
        super(builder.getTemplateType());
        this.buttons = builder.getButtons();
        this.text = builder.getText();
        this.sharable = builder.getSharable();
    }
    get Buttons() {
        return this.buttons;
    }
    get Text() {
        return this.text;
    }
    get Sharable() {
        return this.sharable;
    }
}
exports.ButtonTemplate = ButtonTemplate;
//# sourceMappingURL=ButtonTemplate.js.map