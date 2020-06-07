import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post';

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

    @Output() newPost = new EventEmitter<Post>();

    onAddPost(postForm: NgForm) {
        const post: Post = {
            title: postForm.value.title,
            link: postForm.value.link
        };

        this.newPost.emit(post);
    }
} 