import { Request, Response } from 'express';

export default {
  async index(request: Request, response: Response) {
    return response.json(
      
         [
          {
            "id": 4,
            "title": "Quarto Post",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet nisl ut magna pellentesque commodo. Vivamus sed mauris id tortor maximus venenatis. Morbi vel erat ac leo luctus convallis in at ante. Phasellus commodo ultrices lorem eu porta. Donec blandit, ex a accumsan malesuada, ligula elit mollis sapien, non porta lacus libero a metus. Quisque mollis nibh nec lacus dignissim scelerisque. Mauris blandit tincidunt finibus. Etiam tincidunt nec magna vel dapibus. Proin consequat placerat nisi id mollis. Maecenas a facilisis mauris, vel ultricies lacus. Maecenas aliquet quam quis nisi luctus, ac semper purus varius. Sed eu ipsum ante. Sed euismod placerat nibh gravida volutpat.",
            "likes": 354
          },
        ]
      
    );
  }
}