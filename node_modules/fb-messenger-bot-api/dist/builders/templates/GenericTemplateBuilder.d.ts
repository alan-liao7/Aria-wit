import { IGenericTemplate, IGenericTemplateElement } from '../../interfaces';
import { MESSAGE_TEMPLATE_TYPE } from '../../enums';
/**
 * Represents a Generic Template. Used to represent shape of Facebook API object. Type returned by builder and
 * exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/generic
 */
export declare class GenericTemplateBuilder {
    private _template_type;
    private _elements;
    private _image_aspect_ratio;
    private _sharable;
    constructor();
    getElements(): IGenericTemplateElement[];
    setElements(value: IGenericTemplateElement[]): this;
    getImageAspectRatio(): string;
    setImageAspectRatio(value: string): this;
    getSharable(): boolean;
    setSharable(value: boolean): this;
    getTemplateType(): MESSAGE_TEMPLATE_TYPE;
    build(): IGenericTemplate;
}
