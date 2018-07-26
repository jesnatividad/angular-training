import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$:Object
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    return this.dataService.getPosts().subscribe(
      data=>this.posts$ = data
    );
  }
}
