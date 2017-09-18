import { Injectable, Inject } from '@angular/core';
import { API_CONFIG, APP_CONFIG } from '../apiProvider/appConfig';
import { AppConfig } from '../apiProvider/IAppConfig';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {
  apiEndPoint: string;
  constructor( @Inject(APP_CONFIG) config: AppConfig, private http: HttpClient) {
    this.apiEndPoint = config.apiEndpoint;
  }

  getPosts() {
    return this.http.get<Post[]>(this.apiEndPoint );
  }

  addPostS(post:Post) {
    return this.http.post(this.apiEndPoint,post);

  }
  //to get a particular record
  getPostsById() {
    return this.http.get<Post[]>(this.apiEndPoint+'\id' );
  }

}
