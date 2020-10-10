import React from 'react';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import TextField from '@material-ui/core/TextField'

function CheckBoxExample()  {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
    control={
      <Checkbox
      icon={<DeleteIcon/>}
      checkedIcon={<SaveIcon/>}
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
        inputProps={{
          'aria-label' : 'secondary checkbox'
        }}
        />
      }
      label="Testing Checkbox"
    />
  )
}

function App() {
  return (
    <div>
      <TextField variant="standard" color="secondary" type="email" label="Time" placeholder="test@gmail.com" />
      <br/>
      <CheckBoxExample/>
      <br/>
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
