import React, { useState } from "react";
import { QuizData } from "../Data/data";
import QuestionBox from "./questionbox";
function Quiz() {
  const [data, setData] = useState(QuizData)
  return (
    <div className="container">
      <div className="title">
        Quiz
      </div>
      {
        data && data.map(item => {
            return  ( 
                  <QuestionBox
                    question = {item?.question}
                    answer = {item?.answer}
                    key = {item?.questionId}/>
            )
        })
      }
    </div>
  );
}
 
export default Quiz;
