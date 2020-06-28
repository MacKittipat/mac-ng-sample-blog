import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Post} from '../models/post';
import {Observable} from 'rxjs';
import {Comment} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  findAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.apiUrl + 'posts');
  }

  findPost(id): Observable<Post> {
    return this.http.get<Post>(environment.apiUrl + 'posts/' + id);
  }

  findAllComments(id): Observable<Comment[]> {
    return this.http.get<Comment[]>(environment.apiUrl + 'posts/' + id + '/comments');
  }
}
