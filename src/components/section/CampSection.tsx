import styles from './CampSection.module.scss';
import {getCampList} from "@/lib/api/camp";
import {CampList} from "@/components/common/camp";


const CampSection = async () => {
    const clubList = await getCampList()

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <p className={styles.title}>
                        캠프 소개
                    </p>
                    <div style={{height: 4}}/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="134" height="14" viewBox="0 0 134 14" fill="none">
                        <path d="M0.75 4H133.25L18.75 10" stroke="var(--primary)" strokeWidth="8"/>
                    </svg>
                    <div style={{height: 12}}/>
                    <div className={styles.description}>
                        <p>소프트웨어과 정보보호과가 준비한 </p>
                        <p><b>9개</b>의 동아리 캠프를 소개합니다!</p>
                    </div>
                </div>

                <div className={styles.campContainer}>

                </div>
                <CampList campList={clubList}/>
            </div>
        </div>
    );
};

export default CampSection;
