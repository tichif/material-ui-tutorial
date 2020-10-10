import React from 'react';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import './App.css';

function App() {
  return (
    <div>
     <ButtonGroup>
     <Button startIcon={<SaveIcon />}  variant="contained" color="primary">
       Save
     </Button>
     <Button startIcon={<DeleteIcon />}  variant="contained" color="secondary">
       Discard
     </Button>
     </ButtonGroup>
    </div>
  );
}

export default App;
