import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Post } from '../models/Post';

class PostsController {
  async index(request: Request, response: Response) {
    const postsRepository = getRepository(Post);

    const posts = await postsRepository.find();

    return response.json(posts).status(201);
  }

  async store(request: Request, response: Response) {
    const postsRepository = getRepository(Post);

    const post = {
      title: request.body.title,
      content: request.body.content,
      likes: 0
    }

    const result = await postsRepository.save(post);
    return response.json(result).status(201);
  }

  async details(request: Request, response: Response) {}
  async delete(request: Request, response: Response) {}
}

export default new PostsController();