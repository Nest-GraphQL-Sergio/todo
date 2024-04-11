import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo], { name: 'todos' })
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Query(() => Todo, { name: 'todoById' })
  findOne(@Args('id', { type: () => Int }) id: number): Todo {
    return this.todoService.findOne(id);
  }

  createTodo(todo: Todo): Todo {
    return null;
  }

  updateTodo(id: number): Todo {
    return null;
  }

  deleteTodo(id: number): Todo {
    return null;
  }
}
