import { Todo } from "../models/Todo";
import { TodoPresentation } from "./TodoPresentation";

type TodoListProps = {
  todos: Todo[];
  onRemoveTodo: (todoId: number) => void;
  onToggleTodo: (todoId: number) => void;
}

export const TodoList = ({todos, onRemoveTodo, onToggleTodo}: TodoListProps) => {
  return (
    <section className="grid grid-cols-1 gap-y-6">
      {todos.map((todo) => (
        <TodoPresentation
          key={todo.id}
          todo={todo}
          onRemove={onRemoveTodo}
          onToggle={onToggleTodo}
        />
      ))}      
    </section>
  );
};