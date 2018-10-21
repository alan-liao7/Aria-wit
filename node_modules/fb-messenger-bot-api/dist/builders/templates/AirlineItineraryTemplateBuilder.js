"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
const templates_1 = require("../../classes/templates");
/**
 * Represents an Airline Itinerary Template. Used to represent shape of Facebook API object. Type returned by builder
 * and exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/airline-itinerary
 */
class AirlineItineraryTemplateBuilder {
    constructor() {
        this._template_type = enums_1.MESSAGE_TEMPLATE_TYPE.AIRLINE_ITINERARY;
    }
    getBasePrice() {
        return this._base_price;
    }
    setBasePrice(value) {
        this._base_price = value;
        return this;
    }
    getCurrency() {
        return this._currency;
    }
    setCurrency(value) {
        this._currency = value;
        return this;
    }
    getFlightInfo() {
        return this._flight_info;
    }
    setFlightInfo(value) {
        this._flight_info = value;
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
    getPassengerInfo() {
        return this._passenger_info;
    }
    setPassengerInfo(value) {
        this._passenger_info = value;
        return this;
    }
    getPassengerSegmentInfo() {
        return this._passenger_segment_info;
    }
    setPassengerSegmentInfo(value) {
        this._passenger_segment_info = value;
        return this;
    }
    getPnrNumber() {
        return this._pnr_number;
    }
    setPnrNumber(value) {
        this._pnr_number = value;
        return this;
    }
    getPriceInfo() {
        return this._price_info;
    }
    setPriceInfo(value) {
        this._price_info = value;
        return this;
    }
    getTax() {
        return this._tax;
    }
    setTax(value) {
        this._tax = value;
        return this;
    }
    getThemeColor() {
        return this._theme_color;
    }
    setThemeColor(value) {
        this._theme_color = value;
        return this;
    }
    getTotalPrice() {
        return this._total_price;
    }
    setTotalPrice(value) {
        this._total_price = value;
        return this;
    }
    getTemplateType() {
        return this._template_type;
    }
    build() {
        return new templates_1.AirlineItineraryTemplate(this);
    }
}
exports.AirlineItineraryTemplateBuilder = AirlineItineraryTemplateBuilder;
//# sourceMappingURL=AirlineItineraryTemplateBuilder.js.map