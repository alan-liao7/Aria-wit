import { IAirlineItineraryFlightInfo, IAirlineItineraryPassengerInfo, IAirlineItineraryPassengerSegment, IAirlineItineraryPriceInfo, IAirlineItineraryTemplate } from '../../interfaces';
import { MESSAGE_TEMPLATE_TYPE } from '../../enums';
/**
 * Represents an Airline Itinerary Template. Used to represent shape of Facebook API object. Type returned by builder
 * and exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/airline-itinerary
 */
export declare class AirlineItineraryTemplateBuilder {
    private _template_type;
    private _base_price;
    private _currency;
    private _flight_info;
    private _intro_message;
    private _locale;
    private _passenger_info;
    private _passenger_segment_info;
    private _pnr_number;
    private _price_info;
    private _tax;
    private _theme_color;
    private _total_price;
    constructor();
    getBasePrice(): number;
    setBasePrice(value: number): this;
    getCurrency(): string;
    setCurrency(value: string): this;
    getFlightInfo(): IAirlineItineraryFlightInfo[];
    setFlightInfo(value: IAirlineItineraryFlightInfo[]): this;
    getIntroMessage(): string;
    setIntroMessage(value: string): this;
    getLocale(): string;
    setLocale(value: string): this;
    getPassengerInfo(): IAirlineItineraryPassengerInfo[];
    setPassengerInfo(value: IAirlineItineraryPassengerInfo[]): this;
    getPassengerSegmentInfo(): IAirlineItineraryPassengerSegment[];
    setPassengerSegmentInfo(value: IAirlineItineraryPassengerSegment[]): this;
    getPnrNumber(): string;
    setPnrNumber(value: string): this;
    getPriceInfo(): IAirlineItineraryPriceInfo[];
    setPriceInfo(value: IAirlineItineraryPriceInfo[]): this;
    getTax(): number;
    setTax(value: number): this;
    getThemeColor(): string;
    setThemeColor(value: string): this;
    getTotalPrice(): number;
    setTotalPrice(value: number): this;
    getTemplateType(): MESSAGE_TEMPLATE_TYPE;
    build(): IAirlineItineraryTemplate;
}
