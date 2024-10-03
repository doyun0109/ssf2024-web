import styles from './Footer.module.scss';
import {getTeamMember} from "@/lib/api/team";
import Image from "next/image";


const Footer = async () => {
    const {
        developer,
        designer,
    } = await getTeamMember();

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.infoContainer}>
                    <div className={styles.logoContainer}>
                        <Image
                            src={'/assets/icon/sunrin-symbol.svg'}
                            alt={'logo'}
                            width={24}
                            height={30}
                            className={styles.logo}
                        />
                        <p className={styles.logoTitle}>
                            선린인터넷고등학교
                        </p>
                    </div>
                    <p className={styles.info}>
                        서울특별시 용산구 원효로97길 33-4 (청파동3가)<br/>
                        Tel. 070-4459-9047 | Fax. 704-0960<br/>
                        <br/>
                        © 2024. 선린인터넷고등학교 All Rights Reserved.
                    </p>
                </div>
                <div className={styles.memberContainer}>
                    <div>
                        <p className={styles.team}>
                            디자인팀
                        </p>
                        <p className={styles.member}>
                            {designer.join('   ')}
                        </p>
                    </div>
                    <div>
                        <p className={styles.team}>
                            개발팀
                        </p>
                        <p className={styles.member}>
                            {developer.join('   ')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
