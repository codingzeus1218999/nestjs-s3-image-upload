import { Module } from '@nestjs/common';
import { ImageUploadModule } from './image-upload/image-upload.module';

@Module({
  imports: [ImageUploadModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
