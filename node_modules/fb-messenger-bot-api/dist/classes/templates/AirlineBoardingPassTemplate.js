"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMessageTemplate_1 = require("./AbstractMessageTemplate");
/**
 * Represents an Airline Boarding Pass Template. Used to represent shape of Facebook API object. Type returned by
 * builder and exposed to users to create own object of proper shape if desired taking into account content restrictions
 * for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/airline-boarding-pass
 */
class AirlineBoardingPassTemplate extends AbstractMessageTemplate_1.AbstractMessageTemplate {
    constructor(builder) {
        super(builder.getTemplateType());
        this.boarding_pass = builder.getBoardingPass();
        this.intro_message = builder.getIntroMessage();
        this.theme_color = builder.getThemeColor();
        this.locale = builder.getLocale();
    }
    get Boarding_pass() {
        return this.boarding_pass;
    }
    get Intro_message() {
        return this.intro_message;
    }
    get Locale() {
        return this.locale;
    }
    get Theme_color() {
        return this.theme_color;
    }
}
exports.AirlineBoardingPassTemplate = AirlineBoardingPassTemplate;
//# sourceMappingURL=AirlineBoardingPassTemplate.js.map