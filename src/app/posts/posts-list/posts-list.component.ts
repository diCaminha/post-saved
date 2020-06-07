import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from '../posts.service';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

    posts: Post[] = [];

    constructor(public postsService: PostsService) {}

    ngOnInit() {
        this.postsService.getPostUpdateListener()
        .subscribe(posts => this.posts = posts);
    }
}
