import { useState } from 'react'
import * as React from 'react'
import { useSelector } from 'react-redux'
function Comp1() {
  // const { isShow } = useContext(ToastContext)
  const showNotification = useSelector((state) => state.todos.copmleted)
  const Question = [{
    ques: "What is the capital of INDIA?",
    options: ["Delhi", "Mumbai", "Kolkata", "Trichi"],
    correct: "Delhi"
  },
  {
    ques: "What is the capital of MP?",
    options: ["Bhopal", "Mumbai", "Kolkata", "Trichi"],
    correct: "Bhopal"
  }]
  const [allQ, setallQ] = useState(Question);
  const [shoQuestion, setShowQuestion] = useState(allQ[0])
  const [feedback, setFeedback] = useState ("");
  const handleSubmit = () => {
    const temp = allQ?.filter((f) => !f?.selectedAns)
    console.log(allQ)
    setShowQuestion(temp[0])
    setFeedback(allQ.filter((f) => f.selectedAns).reverse()[0])
  }

  return (
    <div>
      <h1>Hello 1 {showNotification ? "Yes" : ""}</h1>
      {shoQuestion?.ques ? <section>
        <h4>Question</h4>
        <div>
          {
            shoQuestion?.ques
          }
        </div>
        <div>
          {
            shoQuestion?.options?.map((option) => {
              return <>
                <input
                  id={option}
                  value={option}
                  type="radio"
                  name={`option${shoQuestion?.ques}`}
                  onChange={(e) => {
                    setallQ(allQ.map((quesData) => {
                      if (shoQuestion?.ques == quesData?.ques) {
                        return {
                          ...quesData,
                          selectedAns: e.target.value
                        }
                      } else {
                        return quesData
                      }

                    }))
                  }}
                /> <label >{option}</label>
              </>
            })
          }
        </div>
        <div>
          <button
            onClick={
              handleSubmit
            }
          >
            Submit
          </button>
        </div>
        {allQ[0]?.ques != shoQuestion?.ques && <div>
          {
            feedback?.correct == feedback?.selectedAns ? "Prev ans was correct" : "Prev ans was not correct."
          }
        </div>}
      </section> :
        <section>
          Scores
          {
            allQ?.reduce((acc, curr) => {
              if (curr?.selectedAns == curr?.correct) {
                acc = acc + 1
              }
              return acc
            }, 0)
          }/{
            allQ?.length
          }
        </section>

      }


    </div>
  )
}

export default Comp1
