"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buttons_1 = require("../../classes/buttons");
const enums_1 = require("../../enums");
/**
 * Represents a Share Button. Used to represent shape of Facebook API object. Type returned by builder and exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/buttons/share
 */
class ShareButtonBuilder {
    constructor() {
        this._type = enums_1.BUTTON_TYPE.SHARE;
    }
    getType() {
        return this._type;
    }
    getShareContents() {
        return this._share_contents;
    }
    setShareContents(value) {
        this._share_contents = value;
        return this;
    }
    build() {
        return new buttons_1.ShareButton(this);
    }
}
exports.ShareButtonBuilder = ShareButtonBuilder;
//# sourceMappingURL=ShareButtonBuilder.js.map