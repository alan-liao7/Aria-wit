import { IReceiptAddressProperty, IReceiptAdjustmentProperty, IReceiptElements, IReceiptSummaryProperty, IReceiptTemplate } from '../../interfaces';
import { MESSAGE_TEMPLATE_TYPE } from '../../enums';
/**
 * Represents a Receipt Template. Used to represent shape of Facebook API object. Type returned by builder and exposed
 * to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/receipt
 */
export declare class ReceiptTemplateBuilder {
    private _template_type;
    private _address;
    private _adjustments;
    private _currency;
    private _elements;
    private _merchant_name;
    private _order_number;
    private _payment_method;
    private _recipient_name;
    private _sharable;
    private _summary;
    private _timestamp;
    constructor();
    getAddress(): IReceiptAddressProperty;
    setAddress(value: IReceiptAddressProperty): this;
    getAdjustments(): IReceiptAdjustmentProperty;
    setAdjustments(value: IReceiptAdjustmentProperty): this;
    getCurrency(): string;
    setCurrency(value: string): this;
    getElements(): IReceiptElements;
    setElements(value: IReceiptElements): this;
    getMerchantName(): string;
    setMerchantName(value: string): this;
    getOrderNumber(): string;
    setOrderNumber(value: string): this;
    getPaymenMmethod(): string;
    setPaymentMethod(value: string): this;
    getRecipientName(): string;
    setRecipientName(value: string): this;
    getSharable(): boolean;
    setSharable(value: boolean): this;
    getSummary(): IReceiptSummaryProperty;
    setSummary(value: IReceiptSummaryProperty): this;
    getTimestamp(): string;
    setTimestamp(value: string): this;
    getTemplateType(): MESSAGE_TEMPLATE_TYPE;
    build(): IReceiptTemplate;
}
