import { IGenericTemplate, IShareButton } from '../../interfaces';
import { BUTTON_TYPE } from '../../enums';
/**
 * Represents a Share Button. Used to represent shape of Facebook API object. Type returned by builder and exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/buttons/share
 */
export declare class ShareButtonBuilder {
    private _type;
    private _share_contents;
    constructor();
    getType(): BUTTON_TYPE;
    getShareContents(): IGenericTemplate;
    setShareContents(value: IGenericTemplate): this;
    build(): IShareButton;
}
