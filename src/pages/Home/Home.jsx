import React from 'react';
import { checkToken } from '../../utilities/users-service';
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbed';
import './Home.css'

export default function Home() {
  return (
    <>
    <div className='page-wrapper'>
      <div className="header">
      <h1>Home</h1><br />
       <h1>GENERAL INFORMATION AND INTRODUCTION</h1> <br /><br />
      </div>
     
      <div className="youtube-videos">
        <YoutubeEmbed embedId="cfXTQmFRjWU" />
        <YoutubeEmbed embedId="dEwXwTWAcrw&t=319s" />
        <YoutubeEmbed embedId="BZaBR_iwqs0" />
        <YoutubeEmbed embedId="liFLu6lesjg&t=121s" />

        </div>
      
      </div>
    </>
  );
}