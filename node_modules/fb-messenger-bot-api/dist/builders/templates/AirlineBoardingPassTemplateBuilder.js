"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
const templates_1 = require("../../classes/templates");
/**
 * Represents an Airline Boarding Pass Template. Used to represent shape of Facebook API object. Type returned by
 * builder and exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/airline-boarding-pass
 */
class AirlineBoardingPassTemplateBuilder {
    constructor() {
        this._template_type = enums_1.MESSAGE_TEMPLATE_TYPE.AIRLINE_BOARDING_PASS;
    }
    getTemplateType() {
        return this._template_type;
    }
    getBoardingPass() {
        return this._boarding_pass;
    }
    setBoardingPass(value) {
        this._boarding_pass = value;
        return this;
    }
    getIntroMessage() {
        return this._intro_message;
    }
    setIntroMessage(value) {
        this._intro_message = value;
        return this;
    }
    getLocale() {
        return this._locale;
    }
    setLocale(value) {
        this._locale = value;
        return this;
    }
    getThemeColor() {
        return this._theme_color;
    }
    setThemeColor(value) {
        this._theme_color = value;
        return this;
    }
    build() {
        return new templates_1.AirlineBoardingPassTemplate(this);
    }
}
exports.AirlineBoardingPassTemplateBuilder = AirlineBoardingPassTemplateBuilder;
//# sourceMappingURL=AirlineBoardingPassTemplateBuilder.js.map