import {ApplicationConfig} from '@loopback/core';
import {RestApplication, RestServer} from '@loopback/rest';
import {PingController, PostController} from './controllers';
import {MySequence} from './sequence';
import {Class, Repository, RepositoryMixin, DataSourceConstructor} from '@loopback/repository';
import {PostRepository} from './repositories';

export class BackendApplication extends RepositoryMixin(RestApplication) {
  constructor(options?: ApplicationConfig) {
    super(options);
    this.sequence(MySequence);
    this.setupControllers();
    this.setupRepositories();
  }

  async start() {
    await super.start();

    const server = await this.getServer(RestServer);
    const port = await server.get('rest.port');
    console.log(`Server is running at http://127.0.0.1:${port}`);
    console.log(`Try http://127.0.0.1:${port}/ping`);
  }

  setupControllers() {
    this.controller(PingController);
    this.controller(PostController);
  }

  setupRepositories() {
    this.repository(PostRepository);
  }
}
