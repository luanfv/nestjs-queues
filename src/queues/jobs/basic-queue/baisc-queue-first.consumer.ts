import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

import { BASIC_QUEUE_JOB_FIRST, BASIC_QUEUE_KEY } from './basic-queue.key';
import { BasicQueueDto } from './basic-queue.dto';

@Processor(BASIC_QUEUE_KEY)
export class BasicQueueFirstConsumer {
  @Process(BASIC_QUEUE_JOB_FIRST)
  async firstMessage(job: Job<BasicQueueDto>) {
    setTimeout(async () => {
      console.log(job.data.message);
    }, 5e3);
  }
}
