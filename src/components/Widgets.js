import React from 'react'
import '../styles/Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets_article'>
      <div className='widgets_articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  
  return (
    <div className='widgets'>
      <div className='widgets_header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("SpaceX is back", "Top news - 9099 readers")}
      {newsArticle("Bitcoin is high", "Top news - 9099 readers")}
      {newsArticle("it is t-day", "Top news - 9099 readers")}
      {newsArticle("lakers are on a roll", "Top news - 9099 readers")}
      {newsArticle("steph curry does magic", "Top news - 9099 readers")}
    </div>
  )
}

export default Widgets
