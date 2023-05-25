import React, {useState} from "react";
import './App.css';

import InputField from "./components/InputField";
import Todo from "./components/Todo";

interface Todo {
  title: string;
  isEditing: boolean;
  editTitle: string;
}

const App: React.FC = () => {
  let [text, setText] = useState("");
  let [todos, setTodos] = useState<Todo[]>([]);

  const createTodo = (title: string) => {
    setTodos([...todos, {title, isEditing: false, editTitle: ''}]);
    setText("");
  }

  const updateTodo = (newTodo: Todo, i: number) => {
    setTodos(todos.map((x, idx) => {
      if (idx === i) {
        return newTodo
      }
      return x;
    }))
  }

  const deleteTodo = (i: number) => {
    setTodos(todos.filter((x, idx) => idx !== i));
  }

  return (
    <div className="App">
      <h1 className="heading">Todo: React / Typescript</h1>
      <InputField 
        text={text}
        handleChange={e => setText(e.target.value)}
        handleSubmit={() => text !== '' ? createTodo(text) : null}
      />
      <ul>
        {
          todos.map(({title, isEditing, editTitle}, i) => {
            return (
              <Todo 
                key={`todo-${i}`}
                title={title}
                isEditing={isEditing}
                editTitle={editTitle}
                handleDelete={() => deleteTodo(i)}
                toggleEdit={() => updateTodo({title, isEditing: !isEditing, editTitle}, i)}
                handleEdit={e => updateTodo({title, isEditing, editTitle: e.target.value}, i)}
                handleSubmit={() => updateTodo({title: editTitle, isEditing: false, editTitle: ''}, i)}
              />
            )
          })
        }    
      </ul>
    </div>
  );
}

export default App;
