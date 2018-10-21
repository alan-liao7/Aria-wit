"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
const templates_1 = require("../../classes/templates");
/**
 * Represents a Media Template. Used to represent shape of Facebook API object. Type returned by builder and exposed t
 * o users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/media
 */
class MediaTemplateBuilder {
    constructor() {
        this._template_type = enums_1.MESSAGE_TEMPLATE_TYPE.MEDIA;
    }
    getElements() {
        return this._elements;
    }
    setElements(value) {
        this._elements = value;
        return this;
    }
    getSharable() {
        return this._sharable;
    }
    setSharable(value) {
        this._sharable = value;
        return this;
    }
    getTemplateType() {
        return this._template_type;
    }
    build() {
        return new templates_1.MediaTemplate(this);
    }
}
exports.MediaTemplateBuilder = MediaTemplateBuilder;
//# sourceMappingURL=MediaTemplateBuilder.js.map