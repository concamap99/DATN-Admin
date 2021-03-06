import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router";
import App from './../App'
import Profile from './Profile/Profile';
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  // NavLink,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import Cookies from 'js-cookie';
export default function MenuAppbar(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    menus:{
      position:'absolute',
      top:'0px',
      left:'100px',
    },
    ten: {
      fontSize: "16px",
      fontFamily: " Arial, sans-serif",
      marginLeft: "10px",
    }
  }));
  const data = Cookies.get("data");
  const [anh_dai_dien, ten] = [Cookies.get("anh_dai_dien"), Cookies.get("ten")];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const isMenuOpen = Boolean(anchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
//   const [token,setToken]=React.useState('')
//    const logout=()=>{
//     // const token=Cookies.remove('token')
//     return <App status={false} />
 
//  }
  return (
    <div className={classes.menus}>
        <Button
          size="small"
          style={{width: "30vh", height: "6vh"}}
          onClick={handleMenu}
          color="inherit"
        >
          <Avatar alt="Luân mập" src={anh_dai_dien} />
          <p className={classes.ten}>{ten}</p>
          <KeyboardArrowDownIcon />
        </Button>
        <Menu
          style={{position: 'absolute'}}
          id="simple-menu"
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
        <div>
          <Link to="/profile"  style={{textDecoration:'none',color:'black'}} >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
         </Link>
         <Link to="/profile/notification"  style={{textDecoration:'none',color:'black'}} >
            <MenuItem onClick={handleMenuClose}>Xử lí thông báo</MenuItem>
         </Link>
         <Link to="/profile/changepassword"  style={{textDecoration:'none',color:'black'}} >
            <MenuItem onClick={handleMenuClose}>Đổi mật khẩu</MenuItem>
         </Link>
          <Link to='/logout'  style={{textDecoration:'none',color:'black'}}>
          <MenuItem> Đăng xuất </MenuItem>
          </Link>
          {/* <Link to="/changepassword"  style={{textDecoration:'none',color:'black'}}>
            <MenuItem onClick={handleMenuClose}>Change password</MenuItem>
          </Link> */}
          </div>
          
        </Menu>
      
    </div>
  );
}
