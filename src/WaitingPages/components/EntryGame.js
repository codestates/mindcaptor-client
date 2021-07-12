import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
require('dotenv').config()
function EntryGame({ accessToken }) {
  const history = useHistory();

  const handleUrl = async () => {
    const result = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/room/join`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          authorization: accessToken.accessToken,
        },
        Credentials: 'include',
      }
    );
    history.push(`/room/${result.data.data}`);
  };

  return (
    <div>
      <button onClick={() => handleUrl()} className="entry_game_btn">
        방 참여하기
      </button>
    </div>
  );
}
export default EntryGame;
