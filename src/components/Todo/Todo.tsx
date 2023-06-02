import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from "react";

import styles from './Todo.module.css'

interface TodoProps {
  title: string;
  isEditing: boolean;
  editTitle: string;
  handleDelete: MouseEventHandler<HTMLButtonElement>;
  handleEdit: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  toggleEdit: MouseEventHandler<HTMLButtonElement>;
  handleKeyPress: KeyboardEventHandler<HTMLInputElement>;
}

const Todo = ({
  title,
  isEditing,
  editTitle,
  handleDelete,
  handleEdit,
  handleSubmit,
  toggleEdit,
  handleKeyPress,
}: TodoProps) => {
  return (
    <div className={styles.Todo}>
      <div className={styles.Content}>
        {isEditing ? (
          <input
            value={editTitle}
            onChange={handleEdit}
            onKeyDown={handleKeyPress}
          />
        ) : (
          <p>{title}</p>
        )}
      </div>
      <div className={styles.Buttons}>
        {!isEditing && <button onClick={handleDelete}>Delete</button>}
        {!isEditing && <button onClick={toggleEdit}>Edit</button>}
        {isEditing && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default Todo;
