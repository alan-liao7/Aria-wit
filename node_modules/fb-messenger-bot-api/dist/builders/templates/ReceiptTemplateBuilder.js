"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../enums");
const templates_1 = require("../../classes/templates");
/**
 * Represents a Receipt Template. Used to represent shape of Facebook API object. Type returned by builder and exposed
 * to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/receipt
 */
class ReceiptTemplateBuilder {
    constructor() {
        this._template_type = enums_1.MESSAGE_TEMPLATE_TYPE.RECEIPT;
    }
    getAddress() {
        return this._address;
    }
    setAddress(value) {
        this._address = value;
        return this;
    }
    getAdjustments() {
        return this._adjustments;
    }
    setAdjustments(value) {
        this._adjustments = value;
        return this;
    }
    getCurrency() {
        return this._currency;
    }
    setCurrency(value) {
        this._currency = value;
        return this;
    }
    getElements() {
        return this._elements;
    }
    setElements(value) {
        this._elements = value;
        return this;
    }
    getMerchantName() {
        return this._merchant_name;
    }
    setMerchantName(value) {
        this._merchant_name = value;
        return this;
    }
    getOrderNumber() {
        return this._order_number;
    }
    setOrderNumber(value) {
        this._order_number = value;
        return this;
    }
    getPaymenMmethod() {
        return this._payment_method;
    }
    setPaymentMethod(value) {
        this._payment_method = value;
        return this;
    }
    getRecipientName() {
        return this._recipient_name;
    }
    setRecipientName(value) {
        this._recipient_name = value;
        return this;
    }
    getSharable() {
        return this._sharable;
    }
    setSharable(value) {
        this._sharable = value;
        return this;
    }
    getSummary() {
        return this._summary;
    }
    setSummary(value) {
        this._summary = value;
        return this;
    }
    getTimestamp() {
        return this._timestamp;
    }
    setTimestamp(value) {
        this._timestamp = value;
        return this;
    }
    getTemplateType() {
        return this._template_type;
    }
    build() {
        return new templates_1.ReceiptTemplate(this);
    }
}
exports.ReceiptTemplateBuilder = ReceiptTemplateBuilder;
//# sourceMappingURL=ReceiptTemplateBuilder.js.map