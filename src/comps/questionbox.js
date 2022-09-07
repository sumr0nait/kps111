import React, { useState } from 'react'

function QuestionBox({question, answers, key}) {
    const [answer, setAnswer] = useState(answers)
    
  return (
    <div className='questions'>
        <div className='question'>{question}</div>
        {
            answer && answer.map(item => {
                return (
                        <button 
                        className="btnAnswer" 
                        key={key} 
                        >{item}</button>
                )
            })
        }


    </div>
  )
}

export default QuestionBox
