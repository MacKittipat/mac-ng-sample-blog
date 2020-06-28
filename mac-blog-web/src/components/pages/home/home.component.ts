import {Component, OnInit} from '@angular/core';
import {Post} from '../../../models/post';
import {environment} from '../../../environments/environment';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.loadAllPosts();
  }

  loadAllPosts(): void {
    this.postService.findAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
