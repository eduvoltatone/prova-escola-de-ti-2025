import { Module } from '@nestjs/common';
import { ImoveisModule } from './imoveis/imoveis.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ImoveisModule,
    MongooseModule.forRoot('mongodb://localhost/prova-eti'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}