"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMessageTemplate_1 = require("./AbstractMessageTemplate");
/**
 * Represents a Media Template. Used to represent shape of Facebook API object. Type returned by builder and exposed to
 * users to create own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/media
 */
class MediaTemplate extends AbstractMessageTemplate_1.AbstractMessageTemplate {
    constructor(builder) {
        super(builder.getTemplateType());
        this.elements = builder.getElements();
        this.sharable = builder.getSharable();
    }
    get Elements() {
        return this.elements;
    }
    get Sharable() {
        return this.sharable;
    }
}
exports.MediaTemplate = MediaTemplate;
//# sourceMappingURL=MediaTemplate.js.map