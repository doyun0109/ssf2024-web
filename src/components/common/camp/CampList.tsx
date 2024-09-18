'use client'

import styles from './CampList.module.scss';
import Camp from "@/lib/types/Camp";
import {useState} from "react";
import Department from "@/lib/types/Department";
import {CampCard} from "@/components/common/camp";
import { useRouter } from 'next/navigation'


interface Props {
    campList: Camp[]
}

const CampList = ({campList}: Props) => {
    const router = useRouter();
    const [department, setDepartment] = useState<Department | null>(null);

    return (
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                <button
                    className={styles.filterButton}
                    onClick={() => setDepartment(null)}
                    data-selected={department === null}>
                    전체
                </button>
                <button
                    className={styles.filterButton}
                    onClick={() => setDepartment('Software')}
                    data-selected={department === 'Software'}>
                    소프트웨어과
                </button>
                <button
                    className={styles.filterButton}
                    onClick={() => setDepartment('Security')}
                    data-selected={department === 'Security'}>
                    정보보호과
                </button>
            </div>

            <div className={styles.campCardContainer}>
                {campList.filter((camp) =>
                    department ? camp.department === department : true
                ).map((camp, index) => (
                    <CampCard key={index} camp={camp} onClick={() => router.push(`/camp/${camp.clubId}`)}/>
                ))}
            </div>
        </div>
    );
};

export default CampList;
