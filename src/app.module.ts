import { Module } from '@nestjs/common';
import { ImoveisModule } from './imoveis/imoveis.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/imoveis')],
  controllers: [],
  providers: [],
})
export class AppModule {}
