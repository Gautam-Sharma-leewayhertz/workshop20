import {
  Paper,
  makeStyles,
  Typography,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  InputBase,
} from "@material-ui/core/";
import { red } from "@material-ui/core/colors";
import { styled, alpha } from '@material-ui/styles';
import React from "react";
import logo from "../img_avatar.png";
import { arr } from "../data/db";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SearchIcon from "@material-ui/icons/Search";
import reddot from "../greendot.png"
const useStyles = makeStyles(theme=>({
  head: {
    padding: "10px",
  },
  card: {
    margin: "5px",
    padding: "5px",
    '&:hover': {
        backgroundColor: "skyblue",
      },
  },
  logo: {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
  },
  search: {
    display: "flex",
    alignItems: "center",
    justifyContent:'space-between',
    border:'2px solid',
    outline:'none',
    padding:'10px',
    margin:'5px',
    background:'white',
    borderRadius:'5px'
  },
})
);

export default function LeftDashboard() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.search}>
        <InputBase placeholder="Search.." />
        <SearchIcon />
      </div>
      {arr.map((item, index) => {
        return (
          <Card className={classes.card} sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  <img src={logo} className={classes.logo}></img>
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <FiberManualRecordIcon />
                </IconButton>
              }
              title={item.name}
              subheader={item.date}
            />
          </Card>
        );
      })}
    </div>
  );
}
