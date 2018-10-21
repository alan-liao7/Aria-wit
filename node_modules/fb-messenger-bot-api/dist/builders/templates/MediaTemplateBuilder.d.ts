import { IMediaTemplate, IMediaTemplateElement } from '../../interfaces';
import { MESSAGE_TEMPLATE_TYPE } from '../../enums';
/**
 * Represents a Media Template. Used to represent shape of Facebook API object. Type returned by builder and exposed t
 * o users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/media
 */
export declare class MediaTemplateBuilder {
    private _template_type;
    private _elements;
    private _sharable;
    constructor();
    getElements(): IMediaTemplateElement[];
    setElements(value: IMediaTemplateElement[]): this;
    getSharable(): boolean;
    setSharable(value: boolean): this;
    getTemplateType(): MESSAGE_TEMPLATE_TYPE;
    build(): IMediaTemplate;
}
