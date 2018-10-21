"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buttons_1 = require("../../classes/buttons");
const enums_1 = require("../../enums");
/**
 * Represents a URL Button. Used to represent shape of Facebook API object. Type returned by builder and exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/buttons/url
 */
class URLButtonBuilder {
    constructor() {
        this._type = enums_1.BUTTON_TYPE.URL;
    }
    getType() {
        return this._type;
    }
    getUrl() {
        return this._url;
    }
    setUrl(value) {
        this._url = value;
        return this;
    }
    getTitle() {
        return this._title;
    }
    setTitle(value) {
        this._title = value;
        return this;
    }
    getMessengerExtensions() {
        return this._messenger_extensions;
    }
    setMessengerExtensions(value) {
        this._messenger_extensions = value;
        return this;
    }
    getFallbackUrl() {
        return this._fallback_url;
    }
    setFallbackUrl(value) {
        this._fallback_url = value;
        return this;
    }
    getWebviewHeightRatio() {
        return this._webview_height_ratio;
    }
    setWebviewHeightRatio(value) {
        this._webview_height_ratio = value;
        return this;
    }
    getWebviewShareButton() {
        return this._webview_share_button;
    }
    setWebviewShareButton(value) {
        this._webview_share_button = value;
        return this;
    }
    build() {
        return new buttons_1.URLButton(this);
    }
}
exports.URLButtonBuilder = URLButtonBuilder;
//# sourceMappingURL=URLButtonBuilder.js.map