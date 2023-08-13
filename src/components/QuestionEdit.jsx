import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const QuestionEdit = ({ question, onChange, onSave, onCancel }) => {
  return (
    <div>
      <FormControl fullWidth sx={{ marginBottom: '8px' }}>
        <TextField
          size="small"
          label="Pertanyaan"
          variant="outlined"
          name="question"
          value={question.question}
          onChange={onChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: '8px' }}>
        <InputLabel>Pilihan Responden</InputLabel>
        <Select
          size="small"
          value={question.respondentType}
          name="respondentType"
          onChange={onChange}
          label="Pilihan Responden"
        >
          <MenuItem value="Boleh Memilih">Boleh Memilih</MenuItem>
          <MenuItem value="Harus Memilih">Harus Memilih</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: '8px' }}>
        <TextField
          size="small"
          label="Jawaban"
          variant="outlined"
          name="answer"
          value={question.answer}
          onChange={onChange}
        />
      </FormControl>
      <Button onClick={onSave} variant="outlined" size="small" sx={{ marginRight: '4px' }}>
        Save
      </Button>
      <Button onClick={onCancel} variant="outlined" size="small">
        Cancel
      </Button>
    </div>
  );
};

export default QuestionEdit;
