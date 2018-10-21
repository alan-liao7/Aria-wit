"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMessageTemplate_1 = require("./AbstractMessageTemplate");
/**
 * Represents an Airline Itinerary Template. Used to represent shape of Facebook API object. Type returned by builder
 * and exposed to users to create own object of proper shape if desired taking into account content restrictions for the
 * object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/airline-itinerary
 */
class AirlineItineraryTemplate extends AbstractMessageTemplate_1.AbstractMessageTemplate {
    constructor(builder) {
        super(builder.getTemplateType());
        this.base_price = builder.getBasePrice();
        this.currency = builder.getCurrency();
        this.flight_info = builder.getFlightInfo();
        this.intro_message = builder.getIntroMessage();
        this.locale = builder.getLocale();
        this.passenger_info = builder.getPassengerInfo();
        this.passenger_segment_info = builder.getPassengerSegmentInfo();
        this.pnr_number = builder.getPnrNumber();
        this.price_info = builder.getPriceInfo();
        this.tax = builder.getTax();
        this.theme_color = builder.getThemeColor();
        this.total_price = builder.getTotalPrice();
    }
    get Base_price() {
        return this.base_price;
    }
    get Currency() {
        return this.currency;
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
    get Passenger_info() {
        return this.passenger_info;
    }
    get Passenger_segment_info() {
        return this.passenger_segment_info;
    }
    get Pnr_number() {
        return this.pnr_number;
    }
    get Price_info() {
        return this.price_info;
    }
    get Tax() {
        return this.tax;
    }
    get Theme_color() {
        return this.theme_color;
    }
    get Total_price() {
        return this.total_price;
    }
}
exports.AirlineItineraryTemplate = AirlineItineraryTemplate;
//# sourceMappingURL=AirlineItineraryTemplate.js.map