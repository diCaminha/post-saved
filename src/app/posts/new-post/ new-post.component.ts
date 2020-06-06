import { Component } from '@angular/core';

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html'
})
export class NewPostComponent {

    newPost = "";

    onClickSavePost(postInput: HTMLTextAreaElement) {
        this.newPost = postInput.value;
    }
} 