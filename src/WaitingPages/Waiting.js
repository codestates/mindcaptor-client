import React from 'react';
import UserInfo from './components/UserInfo';
import ProfilePic from './components/ProfilePic';
import EntryGame from './components/EntryGame';
import CreateGame from './components/CreateGame';
import MyPageBtn from './components/MyPageBtn';
import Signout from './components/Signout';
import '../main.css';

export default function Waiting({ accessToken }) {
  return (
    <div className="waiting">
      <div className="waiting_signout_btn">
        <Signout />
      </div>
      <div className="waiting_box">
        <ProfilePic />
        <UserInfo accessToken={accessToken} />
      </div>
      <div className="waiting_btns">
        <EntryGame />
        <CreateGame />
        <MyPageBtn />
      </div>
    </div>
  );
}
