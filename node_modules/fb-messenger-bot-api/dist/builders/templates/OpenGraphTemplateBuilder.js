"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
const templates_1 = require("../../classes/templates");
/**
 * Represents an Open Graph. Used to represent shape of Facebook API object. Type returned by builder and exposed to
 * users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/open-graph
 */
class OpenGraphTemplateBuilder {
    constructor() {
        this._template_type = enums_1.MESSAGE_TEMPLATE_TYPE.OPEN_GRAPH;
    }
    getElements() {
        return this._elements;
    }
    setElements(value) {
        this._elements = value;
        return this;
    }
    getTemplateType() {
        return this._template_type;
    }
    build() {
        return new templates_1.OpenGraphTemplate(this);
    }
}
exports.OpenGraphTemplateBuilder = OpenGraphTemplateBuilder;
//# sourceMappingURL=OpenGraphTemplateBuilder.js.map