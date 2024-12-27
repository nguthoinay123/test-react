import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import { useEffect, useState } from "react";
import _ from "lodash";
import './DetailQuiz.scss'
import Question from "./Question";
const DetailQuiz=(props)=>{
    const params = useParams();
    const location = useLocation();
    const quizId = params.id;

    const [dataQuiz, setDataQuiz] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0)
    useEffect(()=>{
        fetchQuestions();   
    },[quizId])
    const fetchQuestions = async() =>{
        let res = await getDataQuiz(quizId);
        console.log(res)
        if(res&&res.EC===0){
            let raw = res.DT
            let data=_.chain(raw)
            // Group the elements of Array based on `color` property
            .groupBy("id")
            // `key` is group's name (color), `value` is the array of objects
            .map((value, key) => {  
                let answers=[]
                let questionDescripton, image=null
                value.forEach((item, index)=>{
                    if(index===0){
                        questionDescripton=item.description;
                        image=item.image
                    }
                    answers.push(item.answers);
                })
                return{ questionId: key, answers, questionDescripton, image }})
            .value()
            console.log('data',data)
            setDataQuiz(data);
        }
    }
    console.log('check data Quiz', dataQuiz)
    const handleNext=()=>{
        if(dataQuiz && dataQuiz.length > currentQuestion+1){
            setCurrentQuestion(currentQuestion+1)

        }
    }
    const handlePrev = () =>{
        if(currentQuestion - 1 < 0) 
            return;{
            setCurrentQuestion(currentQuestion - 1)

        }
    }
    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {location?.state.quiztitle}
                </div>
                <hr/>
                <div className="question-body">
                    <img/>
                </div>
                <div className="question-content">
                    <Question 
                        index={currentQuestion}
                    data={dataQuiz && dataQuiz.length > 0
                        ?
                        dataQuiz[currentQuestion]
                        : []
                    }/>
                </div>
                <div className="question-footer">
                    <button className="btn btn-secondary" onClick={()=>handlePrev()}>Prev</button>
                    <button className="btn btn-primary ml-3" onClick={()=>handleNext()}>Next</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}
export default DetailQuiz;