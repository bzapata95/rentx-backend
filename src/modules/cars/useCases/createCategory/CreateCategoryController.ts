import { Request, Response } from 'express';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const category = await this.createCategoryUseCase.execute({
      name,
      description,
    });

    return response.status(201).json(category);
  }
}
