import { Injectable, Inject } from '@angular/core';
import { API_CONFIG, APP_CONFIG } from '../apiProvider/appConfig';
import { AppConfig } from '../apiProvider/IAppConfig';
import { Post } from './post';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

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
    // we can chain it cannot create new since it is immutable
    let header = new HttpHeaders().set('token', 'thisisDummyToken').set('userToken','thisisDummyUserToken');
    // return this.http.post(this.apiEndPoint,post, {headers: new HttpHeaders().set('token',
    //               'thisisID')});  or
    return this.http.post(this.apiEndPoint,post,{headers:header});
  //passing header as interceptor.
  //return this.http.post(this.apiEndPoint,post);

  }
  //to get a particular record
  getPostsById() {
    return this.http.get<Post[]>(this.apiEndPoint+'\id' );
  }

  getPostsData(){
    let request = new HttpRequest('GET', this.apiEndPoint,{reportProgress:true});
    return this.http.request(request);
  }

}
