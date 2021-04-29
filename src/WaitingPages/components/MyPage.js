import React from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';

function MyPage() {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push('/MyPage')} className="mypage_btn">
        마이페이지
      </button>
    </div>
  );
}

export default withRouter(MyPage);
// onClick={() => history.push('/')