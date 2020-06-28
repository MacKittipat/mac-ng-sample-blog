package com.mackittipat.macblogapi.repository;

import com.mackittipat.macblogapi.model.Post;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PostRepository extends PagingAndSortingRepository<Post, Long> {

}
