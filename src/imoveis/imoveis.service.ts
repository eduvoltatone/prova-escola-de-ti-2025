import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Imovel, ImovelDocument } from './schemas/imovel.schema';
import { CreateImoveiDto } from './dto/create-imovei.dto';
import { UpdateImoveiDto } from './dto/update-imovei.dto';

@Injectable()
export class ImoveisService {
  constructor(
    @InjectModel(Imovel.name) private imovelModel: Model<ImovelDocument>,
  ) {}

  async create(createImovelDto: CreateImoveiDto): Promise<Imovel> {
    const createdImovel = new this.imovelModel(createImovelDto);
    return createdImovel.save();
  }

  async findAll(): Promise<Imovel[]> {
    return this.imovelModel.find().exec();
  }

  async findOne(id: string): Promise<Imovel> {
    const imovel = await this.imovelModel.findById(id).exec();

    return imovel;
  }

  async update(id: string, updateImoveiDto: UpdateImoveiDto): Promise<Imovel> {
    const updatedImovel = await this.imovelModel
      .findByIdAndUpdate(id, updateImoveiDto, { new: true })
      .exec();

    return updatedImovel;
  }

  async remove(id: string): Promise<Imovel> {
    const deletedImovel = await this.imovelModel.findByIdAndDelete(id).exec();

    return deletedImovel;
  }
}