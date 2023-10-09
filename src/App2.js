import React from "react";
import DataGridDemo from "./container/DoctorDetails";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

//import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
//import HomeIcon from "@mui/icons-material/Home";
//import Button from "@mui/material/Button";
//import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
//import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
//import VaccinesIcon from '@mui/icons-material/Vaccines';

import Stack from "@mui/material/Stack";
import { lightBlue } from "@mui/material/colors";

const iconStyle = {
  color: "white", // Set the icon color to white
};
const filterStyle = {
  marginLeft: "50px", // Set the icon color to white
};

const Search = styled("div")(({ theme }) => ({
  display: "flex", // Add this to make the search fields horizontally centered
  alignItems: "center", // Vertically center the items
  marginLeft: "auto", // Push the search fields to the right
  border: "0",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  justifySelf: "center",
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const dateTimePickerContainer = {
  display: "flex",
  alignItems: "center",
  borderRadius: "4px",
  padding: "8px",
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(lightBlue[50]),
  backgroundColor: lightBlue[50],
  "&:hover": {
    backgroundColor: lightBlue[50],
  },
}));

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <ColorButton variant="contained">Home</ColorButton>
            <Grid item>
              <Typography variant="h5">Doctor details</Typography>
            </Grid>
            <Stack spacing={2} direction="row">
              <Typography variant="title" color="inherit" noWrap>
                &nbsp;
              </Typography>
            </Stack>
          </Grid>
        </Toolbar>
      </AppBar>
<Grid alignItems="center" sx={{  margin: 'auto',width: 350}}>
      <Box 
        
        component="img"
        sx={{
          height: 233,
          border: 1,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        
      />
      <Typography variant="title" color="inherit" noWrap>
        &nbsp;
      </Typography>
      <h3>Name: Balabizo Guc</h3>
      <h3>Specality: Balabizo Engineering</h3>
      <h3>appointment price (in EGP): 3000</h3>
      <h3>Appointment date and time: 3/5/2023 , 4:00 pm</h3>
      <h3>affiliation: Balabizo Hospital</h3>
      <h3>Educational Background: Guc</h3>
      </ Grid>
      <Grid alignItems="center" sx={{  margin: 'auto',width: 350}}>
      <Button variant="contained">Reserve</Button>
      <Typography variant="title" color="inherit" noWrap>
        &nbsp;
      </Typography>
      <Button variant="contained">Back</Button>
      </Grid>
    </div>
  );
}

export default App;
