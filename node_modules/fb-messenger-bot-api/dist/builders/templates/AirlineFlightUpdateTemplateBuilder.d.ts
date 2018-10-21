import { IAirlineFlightUpdateTemplate, IBoardingPassFlightInfo } from '../../interfaces';
import { MESSAGE_TEMPLATE_TYPE } from '../../enums';
/**
 * Represents an Airline Flight Update Template. Used to represent shape of Facebook API object. Type returned by
 * builder and exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/airline-flight-update
 */
export declare class AirlineFlightUpdateTemplateBuilder {
    private _template_type;
    private _intro_message;
    private _locale;
    private _pnr_number;
    private _theme_color;
    private _update_flight_info;
    private _update_type;
    constructor();
    getIntroMessage(): string;
    setIntroMessage(value: string): this;
    getLocale(): string;
    setLocale(value: string): this;
    getPnrNumber(): string;
    setPnrNumber(value: string): this;
    getThemeColor(): string;
    setThemeColor(value: string): this;
    getUpdateFlightInfo(): IBoardingPassFlightInfo;
    setUpdateFlightInfo(value: IBoardingPassFlightInfo): this;
    getUpdateType(): string;
    setUpdateType(value: string): this;
    getTemplateType(): MESSAGE_TEMPLATE_TYPE;
    build(): IAirlineFlightUpdateTemplate;
}
