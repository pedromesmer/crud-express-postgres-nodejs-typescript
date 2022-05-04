import { CreateUserService } from '@modules/users/services/CreateUserService';
import { RemoveUserService } from '@modules/users/services/RemoveUserService';
import { ShowAllUsersService } from '@modules/users/services/ShowAllUsersService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class UsersController {
  public async create(request: Request, response: Response) {
    const { name } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name,
    });

    return response.json(user);
  }

  public async show(request: Request, response: Response) {
    const showUsersService = container.resolve(ShowAllUsersService);

    const users = await showUsersService.execute();

    return response.json(users);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const removeUserService = container.resolve(RemoveUserService);

    await removeUserService.execute({
      id,
    });

    return response.send();
  }
}

export { UsersController };
