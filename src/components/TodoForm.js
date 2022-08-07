import { Button, Form, Input } from 'antd';
import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      text: input
    });
    setInput('');
  };

  return (
    <Form onSubmit={handleSubmit} >
      {props.edit ? (
        <>
          <Input
            className='InputUpdate'
            placeholder='更新你的資料'
            value={input}
            onChange={handleChange}
            ref={inputRef}
          />
          <Button
            className='UpdateBtn'
            onClick={handleSubmit}
          >
            更新
          </Button>
        </>
      ) : (
        <>
          <Input
            className='InputAdd'
            placeholder='輸入你的資料'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
          />
          <Button
            className='CreateBtn'
            type="primary"
            onClick={handleSubmit}
          >
            新增
          </Button>
        </>
      )}
    </Form>
  );
}

export default TodoForm;