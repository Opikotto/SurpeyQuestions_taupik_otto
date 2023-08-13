import React, { useState, useEffect } from 'react';
import QuestionForm from './components/QuestionForm';
import QuestionList from './components/QuestionList';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const savedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
    setQuestions(savedQuestions);
  }, []);

  const handleQuestionSubmit = (questionData) => {
    localStorage.setItem('questions', JSON.stringify([...questions, questionData]));
    setQuestions([...questions, questionData]);
  };

  const handleQuestionDelete = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));
  };

  const handleQuestionEdit = (index, updatedQuestion) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = updatedQuestion;
    setQuestions(updatedQuestions);
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = e.dataTransfer.getData('index');
    if (sourceIndex !== targetIndex) {
      const updatedQuestions = [...questions];
      const [movedQuestion] = updatedQuestions.splice(sourceIndex, 1);
      updatedQuestions.splice(targetIndex, 0, movedQuestion);
      setQuestions(updatedQuestions);
    }
  };

  return (
    <div className='App_Question'>
      <CssBaseline />
      <Container>
        <QuestionForm onSubmit={handleQuestionSubmit} />
        <QuestionList
          questions={questions}
          onDelete={handleQuestionDelete}
          onEdit={handleQuestionEdit}
          onDragStart={handleDragStart}
          onDrop={handleDrop}
        />
      </Container>
    </div>
  );
};

export default App;
