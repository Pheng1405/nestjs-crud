import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ConfigModule , ConfigService} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ProductController } from './product/product.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
              ConfigModule.forRoot({isGlobal : true}),
              TypeOrmModule.forRootAsync({
                imports: [ConfigModule],
                useFactory: (configService: ConfigService) => ({
                  type: 'postgres',
                  host: configService.get('DB_HOST'),
                  port: +configService.get<number>('DB_PORT'),
                  username: configService.get('DB_USERNAME'),
                  password: configService.get('DB_PASSWORD'),
                  database: configService.get('DB_NAME'),
                  autoLoadEntities : true,
                  // entities: [],
                  synchronize: true,
                }),
                inject: [ConfigService],
              }),
              
              ProductModule,
              UserModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
