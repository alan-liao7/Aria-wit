"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a Quick Reply. Used to represent shape of Facebook API object. Type returned by builder and exposed to
 * users to create own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/send-api/quick-replies
 */
class QuickReply {
    constructor(builder) {
        this.content_type = builder.getContentType();
        this.title = builder.getTitle();
        this.image_url = builder.getImageUrl();
        this.payload = builder.getPayload();
    }
    get Content_type() {
        return this.content_type;
    }
    get Title() {
        return this.title;
    }
    get Payload() {
        return this.payload;
    }
    get Image_url() {
        return this.image_url;
    }
}
exports.QuickReply = QuickReply;
//# sourceMappingURL=QuickReply.js.map