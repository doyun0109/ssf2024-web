'use client'

import React, {useState} from 'react';
import Question from "@/lib/types/Question";
import styles from './QuestionCard.module.scss';

interface Props {
    question: Question
}

const QuestionCard = ({question}: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.questionContainer} onClick={() => setIsOpen(!isOpen)}>
                <p className={styles.category}>{question.category}</p>
                <p className={styles.question}>{question.question}</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}>
                    <mask id="mask0_1012_921" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0"
                          width="24"
                          height="24">
                        <rect width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_1012_921)">
                        <path
                            d="M11.9998 14.677C11.8793 14.677 11.7671 14.6578 11.6633 14.6193C11.5594 14.5808 11.4607 14.5148 11.367 14.4213L6.87276 9.92701C6.73442 9.78851 6.66359 9.61443 6.66026 9.40476C6.65709 9.19526 6.72792 9.01801 6.87276 8.87301C7.01776 8.72818 7.19342 8.65576 7.39976 8.65576C7.60609 8.65576 7.78176 8.72818 7.92676 8.87301L11.9998 12.9463L16.0728 8.87301C16.2113 8.73468 16.3853 8.66385 16.595 8.66051C16.8045 8.65735 16.9818 8.72818 17.1268 8.87301C17.2716 9.01801 17.344 9.19368 17.344 9.40001C17.344 9.60635 17.2716 9.78201 17.1268 9.92701L12.6325 14.4213C12.5388 14.5148 12.4401 14.5808 12.3363 14.6193C12.2324 14.6578 12.1203 14.677 11.9998 14.677Z"
                            fill="white"/>
                    </g>
                </svg>
            </div>
            {isOpen && <p className={styles.answer}>{question.answer}</p>}
        </div>
    );
};

export default QuestionCard;
