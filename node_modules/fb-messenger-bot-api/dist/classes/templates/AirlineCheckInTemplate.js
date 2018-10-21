"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMessageTemplate_1 = require("./AbstractMessageTemplate");
/**
 * Represents an Airline CheckIn Template. Used to represent shape of Facebook API object. Type returned by builder and
 * exposed to users to create own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/airline-checkin
 */
class AirlineCheckInTemplate extends AbstractMessageTemplate_1.AbstractMessageTemplate {
    constructor(builder) {
        super(builder.getTemplateType());
        this.checkin_url = builder.getCheckinUrl();
        this.flight_info = builder.getFlightInfo();
        this.intro_message = builder.getIntroMessage();
        this.locale = builder.getLocale();
        this.pnr_number = builder.getPnrNumber();
    }
    get Checkin_url() {
        return this.checkin_url;
    }
    get Flight_info() {
        return this.flight_info;
    }
    get Intro_message() {
        return this.intro_message;
    }
    get Locale() {
        return this.locale;
    }
    get Pnr_number() {
        return this.pnr_number;
    }
}
exports.AirlineCheckInTemplate = AirlineCheckInTemplate;
//# sourceMappingURL=AirlineCheckInTemplate.js.map