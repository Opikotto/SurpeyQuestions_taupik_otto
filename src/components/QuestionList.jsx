import React, { useState } from 'react';
import QuestionEdit from './QuestionEdit';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const QuestionList = ({ questions, onDelete, onEdit, onDragStart, onDrop }) => {
    const [editingIndex, setEditingIndex] = useState(-1);
    const [editedQuestion, setEditedQuestion] = useState({
        question: '',
        respondentType: '',
        answer: ''
    });
    const [openDialog, setOpenDialog] = useState(false);

    const handleEditClick = (index) => {
        setEditingIndex(index);
        setEditedQuestion(questions[index]);
        setOpenDialog(true);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedQuestion((prevQuestion) => ({
            ...prevQuestion,
            [name]: value,
        }));
    };

    const handleSaveClick = (index) => {
        onEdit(index, editedQuestion);
        setEditingIndex(-1);
        setOpenDialog(false);
    };

    const handleCancelClick = () => {
        setEditingIndex(-1);
        setOpenDialog(false);
    };

    return (
        <Container>
            <List>
                {questions.map((question, index) => (
                    <ListItem
                        key={index}
                        draggable
                        onDragStart={(e) => onDragStart(e, index)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => onDrop(e, index)}
                    >
                        <ListItemText
                            primary={`Pertanyaan: ${question.question}`}
                            secondary={`Jawaban: ${question.answer}`}
                            secondaryTypographyProps={{ component: 'div' }}
                        >
                        </ListItemText>
                       
                       
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="edit" onClick={() => handleEditClick(index)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={() => onDelete(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
                <Dialog open={openDialog} onClose={handleCancelClick}>
                    <DialogContent>
                        <QuestionEdit
                            question={editedQuestion}
                            onChange={handleEditChange}
                            onSave={() => handleSaveClick(editingIndex)}
                            onCancel={handleCancelClick}
                        />
                    </DialogContent>
                </Dialog>
            </List>
        </Container>
    );
};

export default QuestionList;
