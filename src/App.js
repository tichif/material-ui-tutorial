import React from 'react';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import TextField from '@material-ui/core/TextField'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root : {
    background : "linear-gradient(45deg, #333, #999)",
    border : 0,
    borderRadius : 15,
    color : "#fff",
    padding : "0 30px"
  }
})

const theme = createMuiTheme({
  palette : {
    primary : {
      main : orange[500]
    }
  },
  typography : {
    h2 : {
      fontSize : 36
    }
  }
})

function ButtonStyled () {
  const classes = useStyles()
  return <Button className={classes.root}>Button Styled</Button>
}


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
    <ThemeProvider theme={theme}>
      <Typography variant="h2">
        Hello from MUI
      </Typography>
      <Typography variant="subtitle1">
        Learn material UI
      </Typography>
      <ButtonStyled />
      <br />
      <TextField variant="standard" color="secondary" type="email" label="Time" placeholder="test@gmail.com" />
      <br/>
      <CheckBoxExample/>
      <br/>
     <ButtonGroup color="primary">
     <Button startIcon={<SaveIcon />}  variant="contained" >
       Save
     </Button>
     <Button startIcon={<DeleteIcon />}  variant="contained">
       Discard
     </Button>
     </ButtonGroup>
    </ThemeProvider>
  );
}

export default App;
