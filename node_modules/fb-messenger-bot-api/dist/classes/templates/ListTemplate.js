"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMessageTemplate_1 = require("./AbstractMessageTemplate");
/**
 * Represents a List Template. Used to represent shape of Facebook API object. Type returned by builder and exposed
 * to users to create own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/list
 */
class ListTemplate extends AbstractMessageTemplate_1.AbstractMessageTemplate {
    constructor(builder) {
        super(builder.getTemplateType());
        this.buttons = builder.getButtons();
        this.elements = builder.getElements();
        this.top_element_style = builder.getTopElementStyle();
        this.sharable = builder.getSharable();
    }
    get Sharable() {
        return this.sharable;
    }
    get Buttons() {
        return this.buttons;
    }
    get Elements() {
        return this.elements;
    }
    get Top_element_style() {
        return this.top_element_style;
    }
}
exports.ListTemplate = ListTemplate;
//# sourceMappingURL=ListTemplate.js.map