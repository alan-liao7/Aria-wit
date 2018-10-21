"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
const templates_1 = require("../../classes/templates");
/**
 * Represents an Airline Flight Update Template. Used to represent shape of Facebook API object. Type returned by
 * builder and exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/airline-flight-update
 */
class AirlineFlightUpdateTemplateBuilder {
    constructor() {
        this._template_type = enums_1.MESSAGE_TEMPLATE_TYPE.AIRLINE_UPDATE;
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
    getPnrNumber() {
        return this._pnr_number;
    }
    setPnrNumber(value) {
        this._pnr_number = value;
        return this;
    }
    getThemeColor() {
        return this._theme_color;
    }
    setThemeColor(value) {
        this._theme_color = value;
        return this;
    }
    getUpdateFlightInfo() {
        return this._update_flight_info;
    }
    setUpdateFlightInfo(value) {
        this._update_flight_info = value;
        return this;
    }
    getUpdateType() {
        return this._update_type;
    }
    setUpdateType(value) {
        this._update_type = value;
        return this;
    }
    getTemplateType() {
        return this._template_type;
    }
    build() {
        return new templates_1.AirlineFlightUpdateTemplate(this);
    }
}
exports.AirlineFlightUpdateTemplateBuilder = AirlineFlightUpdateTemplateBuilder;
//# sourceMappingURL=AirlineFlightUpdateTemplateBuilder.js.map