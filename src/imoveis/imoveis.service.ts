import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Imovel } from './schemas/imovel.schema';
import { Injectable } from '@nestjs/common';
import { CreateImoveiDto } from './dto/create-imovei.dto';
import { UpdateImoveiDto } from './dto/update-imovei.dto';

@Injectable()
export class ImoveisService {
  constructor(@InjectModel(Imovel.name) private imovelModel: Model<Imovel>) {}

  async create(createImovelDto: CreateImoveiDto): Promise<Imovel> {
    const createdImovel = new this.imovelModel(createImovelDto);
    return createdImovel.save();
  }

  async findAll(): Promise<Imovel[]> {
    return this.imovelModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} imovei`;
  }

  update(id: number, updateImoveiDto: UpdateImoveiDto) {
    return `This action updates a #${id} imovei`;
  }

  remove(id: number) {
    return `This action removes a #${id} imovei`;
  }
}
