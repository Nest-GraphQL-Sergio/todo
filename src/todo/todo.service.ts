import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

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
