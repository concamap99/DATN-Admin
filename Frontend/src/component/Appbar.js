import { withStyles } from "@material-ui/core/styles";
import React, { Component } from 'react'
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import LayersIcon from "@material-ui/icons/Layers";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import ClassIcon from '@material-ui/icons/Class';
import {Link} from "react-router-dom";
import axios from "axios";
const drawerWidth = 240;
const styles = theme => ({
    

      appBar: {
        position: "relative",
        background: "#3f51b5",
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginRight: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      Menu: {
        cursor: "pointer",
        display: "inline",
        fontSize: 17,
        paddingLeft: "5%",
      },
      iconMenu: {
        position: "absolute",
        marginTop: "-2px",
        marginLeft: -25,
      },
    
     
} );

class Appbarnav extends Component {
    constructor(props){
        super(props)
        this.state = {
            open:false,
      };
    }
  render() {
    const { classes } = this.props;
    const {open} = this.state
    return (
      
        <AppBar
        className={clsx(classes.appBar , {
          [classes.appBarShift]: open,
        })}
      >
        <ul>
          <li className={classes.Menu}>
            <Link 
              to="/admin"
              style={{ textDecoration: "none", color: "white" }}
            >
              <HomeIcon className={classes.iconMenu} />
              TRANG CHỦ
            </Link>
          </li>
          <li className={classes.Menu}>
            {" "}
            <Link
              to="/users" name='user'
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              <PersonIcon className={classes.iconMenu} />
              NGƯỜI DÙNG
            </Link>
          </li>
          
          <li className={classes.Menu}>
          <Link
              to="/questions" name='question'
              style={{ textDecoration: "none", color: "white" }}
            >
            {" "}
            <QuestionAnswerIcon className={classes.iconMenu} />
            CÂU HỎI
            </Link>
          </li>
          <li className={classes.Menu}>
          <Link
              to="/topic" name='topic'
              style={{ textDecoration: "none", color: "white" }}
            >
            {" "}
            <LayersIcon className={classes.iconMenu} />
            CHỦ ĐỀ
            </Link>
          </li>
          <li className={classes.Menu}>
          <Link
              to="/testlist" name='testlist'
              style={{ textDecoration: "none", color: "white" }}
              >
            {" "}
            <ImportContactsIcon className={classes.iconMenu} />
            BÀI THI
            </Link>
          </li>
          <li className={classes.Menu}>
          <Link
              to="/classroom" name='classroom'
              style={{ textDecoration: "none", color: "white" }}
            >
            {" "}
            <ClassIcon className={classes.iconMenu} />
            LỚP HỌC
            </Link>
          </li>
        </ul>
     
      </AppBar>
    
    );
  }
}

export default withStyles(styles, { withTheme: true })(Appbarnav);