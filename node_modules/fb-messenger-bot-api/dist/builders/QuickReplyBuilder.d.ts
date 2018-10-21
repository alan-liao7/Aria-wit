import { QUICK_REPLY_TYPE } from '../enums';
import { QuickReply } from '../classes';
/**
 * Represents a Quick Reply. Used to represent shape of Facebook API object. Type returned by builder and exposed
 * to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/send-api/quick-replies
 */
export declare class QuickReplyBuilder {
    private _content_type;
    private _title?;
    private _payload?;
    private _image_url?;
    constructor();
    getContentType(): QUICK_REPLY_TYPE;
    setContentType(value: QUICK_REPLY_TYPE): QuickReplyBuilder;
    getTitle(): string | undefined;
    setTitle(value: string): QuickReplyBuilder;
    getPayload(): string | number | undefined;
    setPayload(value: string | number): QuickReplyBuilder;
    getImageUrl(): string | undefined;
    setImageUrl(value: string): QuickReplyBuilder;
    build(): QuickReply;
}
