"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("../classes");
/**
 * Represents a Quick Reply. Used to represent shape of Facebook API object. Type returned by builder and exposed
 * to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/send-api/quick-replies
 */
class QuickReplyBuilder {
    constructor() { }
    getContentType() {
        return this._content_type;
    }
    setContentType(value) {
        this._content_type = value;
        return this;
    }
    getTitle() {
        return this._title;
    }
    setTitle(value) {
        this._title = value;
        return this;
    }
    getPayload() {
        return this._payload;
    }
    setPayload(value) {
        this._payload = value;
        return this;
    }
    getImageUrl() {
        return this._image_url;
    }
    setImageUrl(value) {
        this._image_url = value;
        return this;
    }
    build() {
        return new classes_1.QuickReply(this);
    }
}
exports.QuickReplyBuilder = QuickReplyBuilder;
//# sourceMappingURL=QuickReplyBuilder.js.map