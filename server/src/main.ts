import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start(port: number) {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: process.env.CORS_URL,
      credentials: true,
    }
  });
  await app.listen(port);
}
start(Number(process.env.PORT));
