import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Container from '@mui/material/Container';
const QuestionForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [respondentType, setRespondentType] = useState('Boleh Memilih');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const questionData = {
      question,
      respondentType,
      answer
    };
    onSubmit(questionData);
    setQuestion('');
    setRespondentType('Boleh Memilih');
    setAnswer('');
  };

  return (
    <Container>
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth sx={{ marginBottom: '16px' }}>
        <TextField
          label="Pertanyaan"
          variant="outlined"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: '16px' }}>
        <InputLabel>Pilihan Responden</InputLabel>
        <Select
          value={respondentType}
          onChange={(e) => setRespondentType(e.target.value)}
          label="Pilihan Responden"
        >
          <MenuItem value="Boleh Memilih">Boleh Memilih</MenuItem>
          <MenuItem value="Harus Memilih">Harus Memilih</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </Container>
  );
};

export default QuestionForm;
