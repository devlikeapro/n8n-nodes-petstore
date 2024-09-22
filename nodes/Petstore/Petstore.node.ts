import {INodeType, INodeTypeDescription} from 'n8n-workflow';
import {N8NPropertiesBuilder, N8NPropertiesBuilderConfig} from '@devlikeapro/n8n-openapi-node';
import * as doc from './openapi.json';

const config: N8NPropertiesBuilderConfig = {}
const parser = new N8NPropertiesBuilder(doc, config);
const properties = parser.build()

export class Petstore implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Petstore',
        name: 'petstore',
        icon: 'file:openapi.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with Petstore API',
        defaults: {
            name: 'Petstore',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'petstoreApi',
                required: false,
            },
        ],
        requestDefaults: {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            baseURL: 'https://petstore3.swagger.io/api/v3',
        },
        properties: properties,
    };
}
