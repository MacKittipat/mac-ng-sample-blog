import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../../services/post.service';
import {Comment} from '../../../models/comment';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postId: number;
  comments: Comment[];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postId = +params.get('postId');
    });
    this.loadAllComments(this.postId);
  }

  loadAllComments(postId): void {
    this.postService.findAllComments(postId).subscribe(comments => {
      this.comments = comments;
    });
  }

}
