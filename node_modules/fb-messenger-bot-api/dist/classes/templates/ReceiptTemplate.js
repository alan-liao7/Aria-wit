"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMessageTemplate_1 = require("./AbstractMessageTemplate");
/**
 * Represents a Receipt Template. Used to represent shape of Facebook API object. Type returned by builder and exposed
 * to users to create own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/receipt
 */
class ReceiptTemplate extends AbstractMessageTemplate_1.AbstractMessageTemplate {
    constructor(builder) {
        super(builder.getTemplateType());
        this.address = builder.getAddress();
        this.adjustments = builder.getAdjustments();
        this.currency = builder.getCurrency();
        this.elements = builder.getElements();
        this.merchant_name = builder.getMerchantName();
        this.order_number = builder.getOrderNumber();
        this.payment_method = builder.getPaymenMmethod();
        this.recipient_name = builder.getRecipientName();
        this.sharable = builder.getSharable();
        this.summary = builder.getSummary();
        this.timestamp = builder.getTimestamp();
    }
    get Address() {
        return this.address;
    }
    get Adjustments() {
        return this.adjustments;
    }
    get Currency() {
        return this.currency;
    }
    get Elements() {
        return this.elements;
    }
    get Merchant_name() {
        return this.merchant_name;
    }
    get Order_number() {
        return this.order_number;
    }
    get Payment_method() {
        return this.payment_method;
    }
    get Recipient_name() {
        return this.recipient_name;
    }
    get Sharable() {
        return this.sharable;
    }
    get Summary() {
        return this.summary;
    }
    get Timestamp() {
        return this.timestamp;
    }
}
exports.ReceiptTemplate = ReceiptTemplate;
//# sourceMappingURL=ReceiptTemplate.js.map