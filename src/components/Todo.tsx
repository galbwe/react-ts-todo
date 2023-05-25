import React, {ChangeEventHandler, MouseEventHandler} from "react";

interface TodoProps {
    title: string;
    isEditing: boolean;
    editTitle: string;
    handleDelete: MouseEventHandler<HTMLButtonElement>;
    handleEdit: ChangeEventHandler<HTMLInputElement>;
    handleSubmit: MouseEventHandler<HTMLButtonElement>;
    toggleEdit: MouseEventHandler<HTMLButtonElement>;
}

const Todo = ({
    title, 
    isEditing, 
    editTitle, 
    handleDelete,
    handleEdit,
    handleSubmit,
    toggleEdit,
}: TodoProps) => {
    return (
        <div className="Todo">
            {isEditing ? 
                <input value={editTitle} onChange={handleEdit}/>
                :
                <h2>{title}</h2>
            }
            <button onClick={handleDelete}>Delete</button>
            <button onClick={toggleEdit}>Edit</button>
            {isEditing && <button onClick={handleSubmit}>Submit</button>}
        </div>
    )
}

export default Todo;
