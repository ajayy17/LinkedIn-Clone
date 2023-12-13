import React from 'react'
import '../styles/Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

const Sidebar = () => {
  const user = useSelector(selectUser);

    const recentItems = (topic) => (
        <div className='sidebar_recentItem'>
          <span className='sidebar_hash'>#</span>
          <p>{topic}</p>
        </div>
    );

  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img src='https://wallpapers.com/images/hd/abstract-background-6m6cjbifu3zpfv84.jpg' alt='sidebar top section background'/>
        <Avatar src={user.photoUrl} className='sidebar_avatar'
        >{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
            <p>Who viewed you</p>
            <p className='sidebar_statNumber'>2,543</p>
        </div>
        <div className='sidebar_stat'>
            <p>Views on post</p>
            <p className='sidebar_statNumber'>2,443</p>
        </div>
        </div>

        <div className='sidebar_bottom'>
          <p>Recent</p>
          {recentItems("pearson specter")}
          {recentItems("attorney")}
          {recentItems("bestcloser")}
          {recentItems("onlyonerulewinning")}
        </div>
      
    </div>
  )
}

export default Sidebar
