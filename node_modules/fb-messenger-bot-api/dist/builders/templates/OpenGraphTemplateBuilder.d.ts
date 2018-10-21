import { IOpenGraphElement, IOpenGraphTemplate } from '../../interfaces';
import { MESSAGE_TEMPLATE_TYPE } from '../../enums';
/**
 * Represents an Open Graph. Used to represent shape of Facebook API object. Type returned by builder and exposed to
 * users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/template/open-graph
 */
export declare class OpenGraphTemplateBuilder {
    private _template_type;
    private _elements;
    constructor();
    getElements(): IOpenGraphElement[];
    setElements(value: IOpenGraphElement[]): this;
    getTemplateType(): MESSAGE_TEMPLATE_TYPE;
    build(): IOpenGraphTemplate;
}
