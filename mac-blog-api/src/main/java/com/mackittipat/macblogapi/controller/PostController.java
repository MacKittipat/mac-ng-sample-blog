package com.mackittipat.macblogapi.controller;

import com.mackittipat.macblogapi.model.Comment;
import com.mackittipat.macblogapi.model.Post;
import com.mackittipat.macblogapi.repository.CommentRepository;
import com.mackittipat.macblogapi.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("posts")
@RestController
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

    @GetMapping("")
    public Iterable<Post> findPosts() {
        return postRepository.findAll();
    }

    @GetMapping("/{id}")
    public Post findPost(@PathVariable Long id) {
        return postRepository.findById(id).orElse(null);
    }

    @GetMapping("/{id}/comments")
    public Iterable<Comment> findCommentByPostId(@PathVariable Long id) {
        return commentRepository.findByPostId(id);
    }

}
