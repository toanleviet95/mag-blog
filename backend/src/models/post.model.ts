import { Entity, model, property } from '@loopback/repository';
import { SchemaObject } from '@loopback/openapi-spec'

@model()
export class Post extends Entity {
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    title: string;

    @property({
        type: 'string'
    })
    content: string;

    @property({
        type: 'string',
        required: true
    })
    url?: string;

    @property({
        type: 'string',
        required: true
    })
    status?: string;

    @property({
        type: 'string',
        required: true
    })
    date: string;

    @property({
        type: 'number',
        required: true
    })
    userId?: number;

    @property({
        type: 'string',
        required: true
    })
    createdAt: string;

    @property({
        type: 'string'
    })
    updatedAt?: string;
}

export const PostSchema: SchemaObject = {
    title: 'Post',
    properties: {
        id: {
            type: 'number',
            description: 'ID number'
        },
        title: {
            type: 'string',
            description: 'Title'
        },
        content: {
            type: 'string',
            description: 'Content'
        },
        url: {
            type: 'string',
            description: 'URL'
        },
        status: {
            type: 'string',
            description: 'Status'
        },
        date: {
            type: 'string',
            description: 'Date'
        },
        userId: {
            type: 'number',
            description: 'User ID'
        },
        createdAt: {
            type: 'string',
            description: 'Created At'
        },
        updatedAt: {
            type: 'string',
            description: 'Updated At'
        }
    },
    required: ['title', 'content', 'url', 'status', 'date', 'userId', 'createdAt'],
}