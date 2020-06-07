import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostsService } from '../posts.service';

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

    constructor(public postsService: PostsService) {}

    onAddPost(postForm: NgForm) {
        const post: Post = {
            title: postForm.value.title,
            link: postForm.value.link
        };

        this.postsService.addPost(post);
    }
} 