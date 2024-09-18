import styles from './ScheduleSection.module.scss';


const ScheduleSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <p className={styles.title}>
                    캠프 일정
                </p>
                <div style={{height: 4}}/>
                <svg xmlns="http://www.w3.org/2000/svg" width="134" height="14" viewBox="0 0 134 14" fill="none">
                    <path d="M0.75 4H133.25L18.75 10" stroke="var(--primary)" strokeWidth="8"/>
                </svg>
                <div style={{height: 12}}/>
                <p className={styles.description}>
                    지원을 통해 지원자를 선발 후 캠프를 진행합니다!
                </p>
            </div>
            <div className={styles.circleContainer}>
                <div className={styles.circle}>
                    지원 시작<br/>
                    09.20
                </div>
                <div className={styles.line}/>
                <div className={styles.circle} data-fill={true}>
                    지원 마감<br/>
                    10.20
                </div>
                <div className={styles.line}/>
                <div className={styles.circle}>
                    캠프 진행<br/>
                    11.02
                </div>
            </div>
        </div>
    );
};

export default ScheduleSection;
