import { IBuyButton, IPaymentSummary } from '../../interfaces';
import { BUTTON_TYPE } from '../../enums';
/**
 * Represents a Buy Button. Used to represent shape of Facebook API object. Type returned by builder and exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/buttons/buy
 */
export declare class BuyButtonBuilder {
    private _type;
    private _payload;
    private _payment_summary;
    private _title;
    constructor();
    getType(): BUTTON_TYPE;
    getPayload(): string;
    setPayload(value: string): this;
    getPaymentSummary(): IPaymentSummary;
    setPaymentSummary(value: IPaymentSummary): this;
    getTitle(): string;
    setTitle(value: string): this;
    build(): IBuyButton;
}
