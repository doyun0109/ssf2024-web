import styles from './page.module.scss';
import {getCampByClubId} from "@/lib/api/camp";
import {CampDetail} from "@/components/common/camp";

interface Props {
    params: { clubId: string }
}

const Page = async ({params}: Props) => {

    const camp = await getCampByClubId(params.clubId);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <CampDetail camp={camp}/>
            </div>
        </div>
    )
}

export default Page;
