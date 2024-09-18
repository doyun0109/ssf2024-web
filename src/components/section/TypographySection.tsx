import styles from './TypographySection.module.scss';

const TypographySection = () => {
    return (
        <div className={styles.container}>
            <p className={styles.typography}>
                소프트웨어나눔축제는<br/> 소프트웨어에 대한 경험을 나누고 직접 만들어 볼 수 있는 행사입니다!
            </p>
        </div>
    );
};

export default TypographySection;
