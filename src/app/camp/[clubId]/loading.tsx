'use client'

import React, {useEffect} from 'react';
import styles from "./page.module.scss";
import {CampDetail} from "@/components/common/camp";

const Loading = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <CampDetail.Skeleton/>
            </div>
        </div>
    );
};

export default Loading;
