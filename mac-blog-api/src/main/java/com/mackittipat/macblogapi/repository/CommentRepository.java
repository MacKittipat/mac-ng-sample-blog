package com.mackittipat.macblogapi.repository;

import com.mackittipat.macblogapi.model.Comment;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CommentRepository extends PagingAndSortingRepository<Comment, Long> {

    Iterable<Comment> findByPostId(Long postId);

}
