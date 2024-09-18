import {QuestionList} from "@/components/common/question";
import styles from "./QuestionSection.module.scss";
import {getQuestionList} from "@/lib/api/question";

const QuestionSection = async () => {
    const questionList = await getQuestionList();

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <p className={styles.title}>
                        자주 묻는 질문
                    </p>
                    <div style={{height: 4}}/>
                    <svg width="181" height="14" viewBox="0 0 181 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 4H180.5L24.9528 10" stroke="#33FB65" strokeWidth="8"/>
                    </svg>
                </div>
                <QuestionList questionList={questionList}/>
            </div>
        </div>
    );
};

export default QuestionSection;
