import styles from './OnBoardingSection.module.scss';
import Link from "next/link";
import SSFLogo from "@/assets/icon/ssf-logo.svg";
import SunrinLogo from "@/assets/icon/sunrin-logo.svg";
import OnboardingBackground from "@/assets/background/onboarding-background.svg";

const OnBoardingSection = () => {
    return (
        <div className={styles.container}>

            <OnboardingBackground/>
            <div className={styles.overlay}/>


            <div className={styles.contentContainer}>

                <SunrinLogo className={styles.sunrinLogo}/>

                <SSFLogo className={styles.ssfLogo}/>

                <p className={styles.typography}>
                    2024 Software Share Festival
                </p>
            </div>


            <div className={styles.buttonContainer}>
                <Link href={process.env.FORM_URL!} className={styles.applyButton}>
                    지원하기
                </Link>
                <Link href={process.env.INSTAGRAM_URL!} className={styles.snsButton}>
                    인스타그램
                </Link>
            </div>
        </div>
    );
};

export default OnBoardingSection;
