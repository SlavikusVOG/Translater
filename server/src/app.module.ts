import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordsModule } from './words/words.module';

@Module({
  imports: [
    WordsModule,
    MongooseModule.forRoot('mongodb://admin:admin@localhost:27017/translater'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
