import styles from './OnBoardingSection.module.scss';
import Image from "next/image";
import Link from "next/link";

const OnBoardingSection = () => {
    return (
        <div className={styles.container}>
            <Image
                className={styles.background}
                src={'/assets/image/onboarding-background.svg'}
                alt={'background'}
                fill
                priority
            />
            <div className={styles.contentContainer}>
                <div className={styles.sunrinLogoContainer}>
                    <Image src={'/assets/icon/sunrin-logo.svg'} alt={'sunrin-logo'} priority fill/>
                </div>
                <div className={styles.ssfLogoContainer}>
                    <Image src={'/assets/icon/ssf-logo.svg'} alt={'ssf-logo'} priority fill/>
                </div>
                <p className={styles.typography}>
                    2024 Software Share Festival
                </p>
            </div>

            <div className={styles.overlay}/>

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
