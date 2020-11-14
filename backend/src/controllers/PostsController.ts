import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Post } from '../models/Post';

class PostsController {
  async index(request: Request, response: Response) {
    const { search } = request.query;
    const searchUpper = search.toString().toUpperCase();

    const postsRepository = getRepository(Post);

    // No filter, return all posts.
    if(!search) {
      const posts = await postsRepository.find();
      return response.json(posts);
    }

    const filteredPosts = await postsRepository.query(`SELECT * FROM posts WHERE UPPER(title) LIKE '%${searchUpper}%'`);

    return response.json(filteredPosts);
  }

  async store(request: Request, response: Response) {
    const postsRepository = getRepository(Post);

    const post = {
      title: request.body.title,
      content: request.body.content,
      likes: 0
    }

    if(!post.title || !post.content) return response.json({ error: 'One of the fields is missing!' }).status(400);

    const result = await postsRepository.save(post);
    return response.json(result).status(201);
  }

  async details(request: Request, response: Response) {
    const { id } = request.params;
    const postsRepository = getRepository(Post);

    const post = await postsRepository.findOneOrFail(id);

    return response.json(post);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const postsRepository = getRepository(Post);

    const result = await postsRepository.delete(id);

    return response.json(result);
  }

  async likePost(request: Request, response: Response) {
    const { id } = request.params;
    const postsRepository = getRepository(Post);

    const post = await postsRepository.findOneOrFail(id);

    const newPost = {
      title: post.title,
      content: post.content,
      likes: post.likes + 1
    };

    await postsRepository.update(post, newPost);

    return response.json(newPost);
  }
}

export default new PostsController();