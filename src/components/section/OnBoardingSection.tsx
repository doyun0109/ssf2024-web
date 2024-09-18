
import styles from './OnBoardingSection.module.scss';

const OnBoardingSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                <button className={styles.applyButton}>
                    지원하기
                </button>
                <button className={styles.explainButton}>
                    소개 영상
                </button>
            </div>
        </div>
    );
};

export default OnBoardingSection;
