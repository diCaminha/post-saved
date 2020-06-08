import { Post } from '../models/post';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class PostsService {

    private posts: Post[] = [];
    private postsUpdated =  new Subject<Post[]>();

    constructor(public httpClient: HttpClient){}

    getPosts() {
        this.httpClient.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
            .subscribe((postData) => {
                this.posts = postData.posts;
                this.postsUpdated.next([...this.posts]);
            });
    }

    getPostUpdateListener() {
        return this.postsUpdated.asObservable();
    }

    addPost(post: Post) {
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
    }
}