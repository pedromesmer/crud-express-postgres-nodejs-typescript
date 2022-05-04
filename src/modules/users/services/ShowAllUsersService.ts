import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../repositories/IUsersRepository';

@injectable()
class ShowAllUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute() {
    const users = this.usersRepository.findAll();

    return users;
  }
}

export { ShowAllUsersService };
