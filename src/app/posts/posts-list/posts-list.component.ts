import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {

    posts: Post[] = [
        { 
            title: 'A mock Post',
            link: 'http:dededededede.com'
        },
        { 
            title: 'A mock Post',
            link: 'http:dededededede.com'
        },
        { 
            title: 'A mock Post',
            link: 'http:dededededede.com'
        }
    ];
}