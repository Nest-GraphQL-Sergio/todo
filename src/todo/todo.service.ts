import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput } from './dto/inputs/create-todo.input';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, description: 'Tarea 1', done: false },
    { id: 2, description: 'Tarea 2', done: false },
    { id: 3, description: 'Tarea 3', done: false },
    { id: 4, description: 'Tarea 4', done: false },
    { id: 5, description: 'Tarea 5', done: false },
    { id: 6, description: 'Tarea 6', done: false },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) throw new NotFoundException(`Todo with id ${id} not found`);

    return todo;
  }

  createTodo(createTodoInput: CreateTodoInput): Todo {
    const { description } = createTodoInput;

    const todo = new Todo();
    todo.description = description;
    todo.done = false;
    todo.id = Math.max(...this.todos.map((todo) => todo.id), 0) + 1;

    this.todos.push(todo);

    return todo;
  }

  updateTodo(id: number): Todo {
    return null;
  }

  deleteTodo(id: number): Todo {
    return null;
  }
}
