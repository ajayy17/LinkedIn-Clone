import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Header.css'
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { BusinessCenter, Chat, Home } from '@material-ui/icons';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className="header">
      <div className="header_left">
        <img 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png' 
        alt=''/>

        <div className='header_search'>
            <SearchIcon />
            <input placeholder='Search' type="text" />
        </div>
      </div>

      <div className='header_right'>
            <HeaderOption Icon={Home} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenter} title="Jobs"/>
            <HeaderOption Icon={Chat} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar={true} title="Harvey" onClick={logoutOfApp}/>
      </div>
    </div>
  )
}

export default Header
