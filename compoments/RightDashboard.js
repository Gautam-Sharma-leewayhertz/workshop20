import React from "react";
import {
  Typography,
  makeStyles,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  AppBar,
  Tabs,
  Tab,
  Box,
  Paper,
} from "@material-ui/core";

import NotificationsIcon from "@material-ui/icons/Notifications";
import logo from "../img_avatar.png";
import TableComp from "./TableComp";


const style = makeStyles((theme) => ({
  main: {
    backgroundColor: "white",
    maxWidth: "100%",
    maxHeight: "50%",
    
  },
  submain: {
    display: "flex",
    justifyContent: "space-between",
  },
  head: {
    padding: "10px",
    margin: "5px",
  },
  img: {
    maxWidth: "100px",
    maxHeight: "100px",
    borderRadius: "50%",
    margin: "10px",
    padding: "10px",
  },
  pateiendetails: {
    display: "flex",
    flexWrap: "wrap",
  },
  linebreal: {
    width: "100%",
  },
  details: {
    marginLeft: "20px",
    marginTop: "10px",
  },
  bmidiv: {
    marginLeft: "20px",
  },

  tabledata: {
    marginLeft: "20px",
  },
  patientdata: {
    display: "flex",
    justifyContent: "space-between",
  },
  rightpanel: {
    marginLeft: "500px",
  },
  newimg: {
    borderRadius: "50%",
    height: "50px",
    margintop: "50px",
    marginLeft: "540px",
    width: "50px",
  },
  tab: {
    borderRight: "1px solid",
    borderTop: "1px solid",
    borderLeft: "1px solid",
    borderBottom:'1px solid',
    textColor: "blue",
    '&:hover': {
        borderBottom:'none'
      },
  },
  tab1: {
    borderRight: "1px solid",
    borderTop: "1px solid",
    borderLeft: "1px solid",
    color: "blue",
    '&:hover': {
        borderBottom:'none'
      },
  },
  tabdiv:{
      marginLeft:'10px',
  },
  tabmain:{
      border:'none'
      }
 
}));

export default function RightDashboard() {
  const classes = style();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.main}>
      <div className={classes.submain}>
        <Typography variant="h7" className={classes.head}>
          Patient Information
        </Typography>

        <div className="atend" className={classes.head}>
          <Typography variant="h7">Last updated:10:25AM,today</Typography>
          <NotificationsIcon />
        </div>
      </div>

      {/**/}
      <div className={classes.pateiendetails}>
        <div className={classes.patientName}>
          <img src={logo} className={classes.img}></img>
        </div>

        <div className={classes.patientdata}>
          <table>
            <th>
              <tr>Sara Smith</tr>
            </th>
            <tr>
              <td>
                <span className={classes.tabledata}>phone:</span>
                <span className={classes.details}>+302-857-9685</span>
              </td>
              <td>
                <span className={classes.tabledata}>Surgery Type:</span>
                <span className={classes.details}>Rotator cutff Repair </span>
              </td>
              <td>
                <span className={classes.tabledata}>Anthesiologist:</span>
                <span className={classes.details}>Dr.Christina Hardaway</span>
              </td>
            </tr>

            <tr>
              <td>
                <span className={classes.tabledata}>Email:</span>
                <span className={classes.details}>+302-857-9685</span>
              </td>
              <td>
                <span className={classes.tabledata}>Surgery Date:</span>
                <span className={classes.details}>15 aug 2020 </span>
              </td>
              <td>
                <span className={classes.tabledata}>Anthesiologist phone:</span>
                <span className={classes.details}>301-896-8745</span>
              </td>
            </tr>

            <tr>
              <td>
                <span className={classes.tabledata}>Gender:</span>
                <span className={classes.details}>Female</span>
              </td>
              <td>
                <span className={classes.tabledata}>Height:</span>
                <span className={classes.details}>163 </span>
              </td>
              <td>
                <span className={classes.tabledata}>Anthesiologist phone:</span>
                <span className={classes.details}>christina@h3a.com</span>
              </td>
            </tr>

            <tr>
              <td>
                <span className={classes.tabledata}>Age</span>
                <span className={classes.details}>45</span>
              </td>
              <td>
                <span className={classes.tabledata}>weight:</span>
                <span className={classes.details}>110 </span>
                <div className={classes.bmidiv}>Bmi:19</div>
              </td>

              <td>
                <span className={classes.rightpanel}>
                  Surgery Clearance
                  <div className={classes.patientName}>
                    <img src={logo} className={classes.newimg}></img>
                  </div>
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>


    <div className={classes.tabdiv}>
      <Tabs
        value={value}
        className={classes.tabmain}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        
      >
        <Tab label="List of prior Surgeries" className={classes.tab1} />
        <Tab label="List of medical Diagnosis" className={classes.tab} />
        <Tab label="List of mediacation" className={classes.tab} />
        <Tab label="Airway Evolution" className={classes.tab} />
        <Tab label="Anthesisa Clearance and Recommendation" className={classes.tab} />
      </Tabs>
      </div>
      {/**/}
      <div className={classes.firstTable}>
        <TableComp />
      </div>
    </div>
  );
}
