import { MESSAGE_TEMPLATE_TYPE } from '../../enums';
import { IAirlineCheckInTemplate, IBoardingPassFlightInfo } from '../../interfaces';
/**
 * Represents an Airline CheckIn Template. Used to represent shape of Facebook API object. Type returned by builder
 * and exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/airline-checkin
 */
export declare class AirlineCheckInTemplateBuilder {
    private _template_type;
    private _checkin_url;
    private _flight_info;
    private _intro_message;
    private _locale;
    private _pnr_number;
    constructor();
    getCheckinUrl(): string;
    setCheckinUrl(value: string): void;
    getFlightInfo(): IBoardingPassFlightInfo[];
    setFlightInfo(value: IBoardingPassFlightInfo[]): void;
    getIntroMessage(): string;
    setIntroMessage(value: string): void;
    getLocale(): string;
    setLocale(value: string): void;
    getPnrNumber(): string;
    setPnrNumber(value: string): void;
    getTemplateType(): MESSAGE_TEMPLATE_TYPE;
    builder(): IAirlineCheckInTemplate;
}
