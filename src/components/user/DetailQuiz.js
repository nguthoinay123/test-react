import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import { useEffect } from "react";
import _ from "lodash";
import './DetailQuiz.scss'
const DetailQuiz=(props)=>{
    const params = useParams();
    const location = useLocation();
    const quizId = params.id;

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
                    <div className="question">Question 1: How are you doing?</div>
                    <div className="answer">
                        <div className="answer-child">
                            A. sdasdasd
                        </div>
                        <div className="answer-child">
                            B. sdasdasd
                        </div>
                        <div className="answer-child">
                            C. sdasdasd
                        </div>
                    </div>
                </div>
                <div className="question-footer">
                    <button className="btn btn-secondary">Prev</button>
                    <button className="btn btn-primary ml-3">Next</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}
export default DetailQuiz;