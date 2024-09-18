import QuestionCard from './QuestionCard';
import styles from './QuestionList.module.scss';
import Question from "@/lib/types/Question";

interface Props {
    questionList: Question[]
}


const QuestionList = ({questionList}: Props) => {
    return (
        <div className={styles.container}>
            {questionList.map((question, index) => (
                <QuestionCard key={`question-${index}`} question={question}/>
            ))}
        </div>
    );
};

export default QuestionList;
