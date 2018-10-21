"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMessageTemplate_1 = require("./AbstractMessageTemplate");
/**
 * Represents a Generic Template. Used to represent shape of Facebook API object. Type returned by builder and exposed
 * to users to create own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/generic
 */
class GenericTemplate extends AbstractMessageTemplate_1.AbstractMessageTemplate {
    constructor(builder) {
        super(builder.getTemplateType());
        this.elements = builder.getElements();
        this.image_aspect_ratio = builder.getImageAspectRatio();
        this.sharable = builder.getSharable();
    }
    get Elements() {
        return this.elements;
    }
    get Image_aspect_ratio() {
        return this.image_aspect_ratio;
    }
    get Sharable() {
        return this.sharable;
    }
}
exports.GenericTemplate = GenericTemplate;
//# sourceMappingURL=GenericTemplate.js.map