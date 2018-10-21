"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buttons_1 = require("../../classes/buttons");
const enums_1 = require("../../enums");
/**
 * Represents a LogOut Button. Used to represent shape of Facebook API object. Type returned by builder and exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/buttons/logout
 */
class LogOutButtonBuilder {
    constructor() {
        this._type = enums_1.BUTTON_TYPE.LOG_OUT;
    }
    getType() {
        return this._type;
    }
    build() {
        return new buttons_1.LogOutButton(this);
    }
}
exports.LogOutButtonBuilder = LogOutButtonBuilder;
//# sourceMappingURL=LogOutButtonBuilder.js.map