import { IButton, IButtonTemplate } from '../../interfaces';
import { MESSAGE_TEMPLATE_TYPE } from '../../enums';
/**
 * Represents a IButton Template. Used to represent shape of Facebook API object. Type returned by builder and
 * exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/button
 */
export declare class ButtonTemplateBuilder {
    private _template_type;
    private _buttons;
    private _text;
    private _sharable;
    constructor();
    getSharable(): boolean;
    setSharable(value: boolean): this;
    getButtons(): IButton[];
    setButtons(value: IButton[]): this;
    getText(): string;
    setText(value: string): this;
    getTemplateType(): MESSAGE_TEMPLATE_TYPE;
    build(): IButtonTemplate;
}
