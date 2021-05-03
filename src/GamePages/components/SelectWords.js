import React, { useState, useEffect } from 'react';
import GameStartBtn from './GameStartBtn';

export default function SelectWord({
  answer,
  IsOpen,
  handleAnswer,
  Word1,
  Word2,
  Word3,
  RandomItem,
}) {
  const [Problem, SetProblem] = useState([]);
  // ! 단어 3개가 들어감

  useEffect(() => {
    RandomItem();
  }, []);

  useEffect(() => {
    SetProblem([Word1, Word2, Word3]);
  }, [Word3]);

  return IsOpen ? (
    <div className="background">
      <div className="container_WordBox">
        <div className="blankForWordBox" />

        <div className="WordBox">
          <h2 className="selectWord">단어를 선택해주세요.</h2>
          <div className="wordBtns">
            {Problem.map((word, idx) => {
              if (Word1 !== Word2 && Word1 !== Word3 && Word2 !== Word3) {
                return (
                  <button onClick={() => handleAnswer(word)} key={idx}>
                    {word}
                  </button>
                );
              } else {
                RandomItem();
              }
            })}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
