import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  const { isLoading, error, sendRequest } = useHttp({
    url: process.env.REACT_APP_SERVER_URL
  });
  
  const enterTaskHandler = async (taskText) => {
    const data = await sendRequest({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { text: taskText }
    });
    const generatedId = data.name; // firebase-specific => "name" contains generated id

    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
