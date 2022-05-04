import { AppError } from '@shared/error/AppError';
import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../repositories/IUsersRepository';

interface IRequest {
  id: string;
}

@injectable()
class RemoveUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ id }: IRequest) {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    await this.usersRepository.delete(user);

    return user;
  }
}

export { RemoveUserService };
