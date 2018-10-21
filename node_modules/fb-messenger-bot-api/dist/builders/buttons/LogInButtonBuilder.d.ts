import { ILogInButton } from '../../interfaces';
import { BUTTON_TYPE } from '../../enums';
/**
 * Represents a LogIn Button. Used to represent shape of Facebook API object. Type returned by builder and exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/buttons/login
 */
export declare class LogInButtonBuilder {
    private _type;
    private _url;
    constructor();
    getType(): BUTTON_TYPE;
    getUrl(): string;
    setUrl(value: string): this;
    build(): ILogInButton;
}
