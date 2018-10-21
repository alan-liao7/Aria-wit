"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMessageTemplate_1 = require("./AbstractMessageTemplate");
/**
 * Represents an Airline Flight Update Template. Used to represent shape of Facebook API object. Type returned by
 * builder and exposed to users to create own object of proper shape if desired taking into account content restrictions
 * for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/airline-flight-update
 */
class AirlineFlightUpdateTemplate extends AbstractMessageTemplate_1.AbstractMessageTemplate {
    constructor(builder) {
        super(builder.getTemplateType());
        this.intro_message = builder.getIntroMessage();
        this.locale = builder.getLocale();
        this.pnr_number = builder.getPnrNumber();
        this.theme_color = builder.getThemeColor();
        this.update_flight_info = builder.getUpdateFlightInfo();
        this.update_type = builder.getUpdateType();
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
    get Theme_color() {
        return this.theme_color;
    }
    get Update_flight_info() {
        return this.update_flight_info;
    }
    get Update_type() {
        return this.update_type;
    }
}
exports.AirlineFlightUpdateTemplate = AirlineFlightUpdateTemplate;
//# sourceMappingURL=AirlineFlightUpdateTemplate.js.map