import { DefaultCrudRepository } from '@loopback/repository';
import { Post } from '../models';
import { magblogDb } from '../datasources';

export class PostRepository extends DefaultCrudRepository<Post, typeof Post.prototype.id> {
  constructor() {
    super(Post, magblogDb);
  }
}
