import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModule: Model<UserDocument>,
  ) {}

  async findAll() {
    return this.usersModule.find({});
  }

  async findById(id: string) {
    return this.usersModule.findById(id);
  }
}
