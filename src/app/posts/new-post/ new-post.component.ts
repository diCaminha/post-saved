import { Component } from '@angular/core';

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

    newPost: String = "";
    enteredValue: String = "";

    onClickSavePost(postInput: HTMLTextAreaElement) {
        this.newPost = this.enteredValue;
    }
} 