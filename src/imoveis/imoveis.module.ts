import { Module } from '@nestjs/common';
import { ImoveisService } from './imoveis.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ImoveisController } from './imoveis.controller';
import { Imovel, ImovelSchema } from './schemas/imovel.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Imovel.name, schema: ImovelSchema }])],
  controllers: [ImoveisController],
  providers: [ImoveisService],
})
export class ImoveisModule {}
