import { IURLButton } from '../../interfaces';
import { BUTTON_TYPE } from '../../enums';
/**
 * Represents a URL Button. Used to represent shape of Facebook API object. Type returned by builder and exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/buttons/url
 */
export declare class URLButtonBuilder {
    private _type;
    private _url;
    private _title;
    private _messenger_extensions?;
    private _fallback_url?;
    private _webview_height_ratio?;
    private _webview_share_button?;
    constructor();
    getType(): BUTTON_TYPE;
    getUrl(): string;
    setUrl(value: string): this;
    getTitle(): string;
    setTitle(value: string): this;
    getMessengerExtensions(): boolean | undefined;
    setMessengerExtensions(value: boolean): this;
    getFallbackUrl(): string | undefined;
    setFallbackUrl(value: string): this;
    getWebviewHeightRatio(): string | undefined;
    setWebviewHeightRatio(value: string): this;
    getWebviewShareButton(): string | undefined;
    setWebviewShareButton(value: string): this;
    build(): IURLButton;
}
