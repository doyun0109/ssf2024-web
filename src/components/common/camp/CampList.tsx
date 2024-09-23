'use client'

import styles from './CampList.module.scss';
import Camp from "@/lib/types/Camp";
import {useState} from "react";
import Department from "@/lib/types/Department";
import {CampCard} from "@/components/common/camp";
import Link from "next/link";


interface Props {
    campList: Camp[]
}

const CampList = ({campList}: Props) => {
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
                    <Link href={`/camp/${camp.clubId}`} key={index}>
                        <CampCard camp={camp}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CampList;
