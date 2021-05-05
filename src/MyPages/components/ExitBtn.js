import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ExitBtn({MyPageSaveData}) {
  const history = useHistory();
  return (
    <span className="Exit">
      <button onClick={() => {history.push('/Waiting')
      MyPageSaveData()}}>나가기</button>
    </span>
  );
}
