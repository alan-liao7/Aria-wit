import { MESSAGE_TEMPLATE_TYPE } from '../../enums';
import { IAirlineBoardingPassTemplate, IBoardingPass } from '../../interfaces';
/**
 * Represents an Airline Boarding Pass Template. Used to represent shape of Facebook API object. Type returned by
 * builder and exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/airline-boarding-pass
 */
export declare class AirlineBoardingPassTemplateBuilder {
    private _template_type;
    private _boarding_pass;
    private _intro_message;
    private _locale;
    private _theme_color;
    constructor();
    getTemplateType(): MESSAGE_TEMPLATE_TYPE;
    getBoardingPass(): IBoardingPass[];
    setBoardingPass(value: IBoardingPass[]): this;
    getIntroMessage(): string;
    setIntroMessage(value: string): this;
    getLocale(): string;
    setLocale(value: string): this;
    getThemeColor(): string;
    setThemeColor(value: string): this;
    build(): IAirlineBoardingPassTemplate;
}
