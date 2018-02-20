import { inject } from '@loopback/core';
import { get, post, put, patch, del, param } from '@loopback/openapi-v2';
import { HttpErrors } from '@loopback/rest';
import { Post, PostSchema } from '../models';
import { repository } from '@loopback/repository';
import { PostRepository } from '../repositories';

export class PostController {
    constructor(@repository(PostRepository.name) protected postRepo: PostRepository) { }

    @post('/post')
    @param.body('post', PostSchema)
    async createPost(postInstance: Post) {
        try {
            return await this.postRepo.create(postInstance);
        } catch (ex) {
            return Promise.reject(new HttpErrors.BadGateway(JSON.stringify(ex)));
        }
        
    }

    @get('/post')
    @param.query.string('filter')
    async getPost(filter: string) {
        try {
            if (filter) {
                return await this.postRepo.find(JSON.parse(filter));
            }
            return await this.postRepo.find();
        } catch (ex) {
            return Promise.reject(new HttpErrors.BadGateway(JSON.stringify(ex)));
        }
        
    }

    @put('/post')
    @param.query.string('where')
    @param.body('post', PostSchema)
    async updatePost(where: string, postInstance: Post) {
        return await this.postRepo.update(JSON.parse(where), postInstance);
    }
}