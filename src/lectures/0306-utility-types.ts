// --- PARTIAL
interface Todo {
  title: string;
  description: string;
}

function patchTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

const todo2 = patchTodo(todo1, {
  description: 'throw out trash',
});

// REQUIRED
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };
// Err: prop 'b' is missing....
// const obj2: Required<Props> = { a: 5 };

// READONLY

// RECORD

// PICK/OMIT

// RETURNTYPE
