import { Router } from 'express';
import multer from 'multer';

import createCategoryController from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRouter = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRouter.post('/', async (request, response) => {
  return createCategoryController().handle(request, response);
});

categoriesRouter.get('/', async (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRouter.post(
  '/import',
  upload.single('file'),
  async (request, response) => {
    return importCategoryController.handle(request, response);
  },
);

export { categoriesRouter };
