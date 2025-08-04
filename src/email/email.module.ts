import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { Module } from '@nestjs/common/decorators';

@Module({
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
