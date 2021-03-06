import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {makeStyles,Typography,IconButton,Badge} from "@material-ui/core";
import Menus from "../ButtonMenu";
import Appbarnav from "../Appbar";
import MyDrawer from "../Drawer";
import axios from 'axios'
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import {
  Link,
} from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    paddingTop: 10,
    paddingLeft: 40,
    color: "black",
    fontWeight: "bold",
  },
  icons: {
    top: 0,
    position: "absolute",
    left: "70%",
  },

  report: {
    position: "absolute",
    fontSize: 17,
    alignItems: "center",
    left: "20%",
    top: "1%",
    color: "black",
    marginTop: 5,
  },
 
}));

export default function Home() {
  const classes = useStyles();
  const [notification, setNotification] = React.useState('0'); 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    axios
      .get("https://navilearn.herokuapp.com/admin/notification?alert=true")
      .then((res) => {
        setData(res.data.data)
        setNotification(res.data.data.length)
      })
      .catch((error) => console.log(error))
  }, []);
  const handleClick =(event)=>{
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const listNotifacation =()=>{
    if (data.length == 0)
      return <Typography style={{marginLeft: "20px", marginTop: '5px',marginBottom: '5px'}} >(Trống)</Typography>
    else return data.map( function(data, index){
      if(index < 5)
        return <Typography style={{marginLeft: "20px", marginTop: '5px'}}><b>.</b> {data.thong_tin_sua.ho + ' ' + data.thong_tin_sua.ten}</Typography>
    }.bind(this))

  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div >
      <Typography className={classes.title} variant="h6">
      NAVILEARN
      </Typography>
      <div className={classes.icons}>
        <IconButton aria-label="show 1 new mails" color="inherit">
          <Badge color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit" aria-describedby={id} onClick={handleClick}>
          <Badge badgeContent={notification || 0} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Menus />
        {/* <MyDrawer /> */}
      </div>
      <Appbarnav />
      <Popover
        id={id}
        transition
        style={{index: 2, position: 'absolute', top: '4%', left: '62%'}}
        onClose={handleClose}
        open={open}
      >
      <div style={{margin: "20px"}}>
        <b>Yêu cầu sửa thông tin</b>
        <Divider />
        {data ? listNotifacation() : null }
      </div>
      {/* <Button color="primary" size="small" >
        <p style={{fontSize: "12px", textDecoration: 'underline'}}>Xử lí thông báo</p>
      </Button> */}
      <Button onClick={handleClose}  color="primary" size="small" style={{float:'right'}}>
       Đóng
      </Button>
      </Popover>
    </div>
  );
}
