import { Button, Form } from 'antd';
import React from 'react';
import TodoForm from './TodoForm';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {

    const [edit, setEdit] = React.useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }
    return todos.map((todo, index) => (
        <>
            <Form className='Todo-Form'>
                <div key={index}>
                    <div className='TodoFormContent' key={todo.id} onClick={() => completeTodo(todo.id)}>
                        {todo.text}
                    </div>
                    <div >
                        <Button className='editBtn' onClick={() => setEdit({ id: todo.id, value: todo.text })}>
                            編輯
                        </Button>
                        <Button className='removeBtn' type="primary" danger onClick={() => removeTodo(todo.id)}>
                            刪除
                        </Button>
                    </div>
                </div>
            </Form>
        </>
    ));
};

export default Todo;