import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import { useEffect } from "react";

const DetailQuiz=(props)=>{
    const params = useParams();
    const quizId = params.id;

    useEffect(()=>{
        fetchQuestions();   
    },[quizId])
    const fetchQuestions = async() =>{
        let res = await getDataQuiz(quizId);
        console.log('check',res)
    }
    return (
        <div className="detail-quiz-container">
            DetailQuiz
        </div>
    )
}
export default DetailQuiz;