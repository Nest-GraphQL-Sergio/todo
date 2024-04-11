import { Float, Query, Resolver, Int, Args } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, {
    description: 'Retorna un mensaje de Hola mundo',
    name: 'hello',
  })
  helloWorld(): string {
    return 'Hola mundo';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'randomFromZeroTo',
    description: 'From zero to argument TO (default 6)',
  })
  getRandomFromZeroTo(
    @Args('to', { nullable: true, type: () => Int }) to: number = 6,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
