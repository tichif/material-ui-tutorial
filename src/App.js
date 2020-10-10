import React from 'react';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'


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
     <Container maxWidth="md">
      <Typography variant="h2">
        Hello from MUI
      </Typography>
      <Typography variant="subtitle1">
        Learn material UI
      </Typography>
      <ButtonStyled />
      <br />
      <Grid container spacing={4} justify="center">
        <Grid item>
          <Paper style={{ height : '75px', width : '50px' }} />
        </Grid>
        <Grid item>
          <Paper style={{ height : '75px', width : '50px' }} />
        </Grid>
        <Grid item>
          <Paper style={{ height : '75px', width : '50px' }} />
        </Grid>
        <Grid item>
          <Paper style={{ height : '75px', width : '50px' }} />
        </Grid>
        <Grid item>
          <Paper style={{ height : '75px', width : '50px' }} />
        </Grid>
      </Grid>
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
     </Container>
    </ThemeProvider>
  );
}

export default App;
