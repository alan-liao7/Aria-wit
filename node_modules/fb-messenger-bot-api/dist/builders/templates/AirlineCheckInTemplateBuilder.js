"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
const templates_1 = require("../../classes/templates");
/**
 * Represents an Airline CheckIn Template. Used to represent shape of Facebook API object. Type returned by builder
 * and exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/airline-checkin
 */
class AirlineCheckInTemplateBuilder {
    constructor() {
        this._template_type = enums_1.MESSAGE_TEMPLATE_TYPE.AIRLINE_CHECKIN;
    }
    getCheckinUrl() {
        return this._checkin_url;
    }
    setCheckinUrl(value) {
        this._checkin_url = value;
    }
    getFlightInfo() {
        return this._flight_info;
    }
    setFlightInfo(value) {
        this._flight_info = value;
    }
    getIntroMessage() {
        return this._intro_message;
    }
    setIntroMessage(value) {
        this._intro_message = value;
    }
    getLocale() {
        return this._locale;
    }
    setLocale(value) {
        this._locale = value;
    }
    getPnrNumber() {
        return this._pnr_number;
    }
    setPnrNumber(value) {
        this._pnr_number = value;
    }
    getTemplateType() {
        return this._template_type;
    }
    builder() {
        return new templates_1.AirlineCheckInTemplate(this);
    }
}
exports.AirlineCheckInTemplateBuilder = AirlineCheckInTemplateBuilder;
//# sourceMappingURL=AirlineCheckInTemplateBuilder.js.map