import { IButton, IGenericTemplateElement, IListTemplate } from '../../interfaces';
import { LIST_TOP_ELEMENT_STYLE, MESSAGE_TEMPLATE_TYPE } from '../../enums';
/**
 * Represents a List Template. Used to represent shape of Facebook API object. Type returned by builder and
 * exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/list
 */
export declare class ListTemplateBuilder {
    private _template_type;
    private _buttons;
    private _elements;
    private _top_element_style;
    private _sharable;
    constructor();
    getSharable(): boolean;
    setSharable(value: boolean): this;
    getButtons(): IButton[];
    setButtons(value: IButton[]): this;
    getElements(): IGenericTemplateElement[];
    setElements(value: IGenericTemplateElement[]): this;
    getTopElementStyle(): LIST_TOP_ELEMENT_STYLE;
    setTopElementStyle(value: LIST_TOP_ELEMENT_STYLE): this;
    getTemplateType(): MESSAGE_TEMPLATE_TYPE;
    build(): IListTemplate;
}
