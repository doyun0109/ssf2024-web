'use client'

import React from 'react';
import Image from "next/image";
import Camp from "@/lib/types/Camp";
import styles from '@/components/common/CampCard.module.scss';

interface Props {
    camp: Camp,
    onClick?: () => void
}

const CampCard = ({camp, onClick}: Props) => {
    return (
        <div className={styles.container} onClick={onClick}>
            <Image src={camp.bookCover} alt={'book-cover'} width={204} height={283}/>
            <p className={styles.title}>
                {camp.campName}
            </p>
            <div className={styles.infoContainer}>
                <p className={styles.clubName} style={{color: camp.primaryColor}}>
                    {camp.clubName}
                </p>
                <div style={{
                    width: 4,
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: camp.primaryColor,
                }}/>
                <p className={styles.clubCategory} style={{color: camp.primaryColor}}>
                    {camp.clubCategory}
                </p>
            </div>
        </div>
    );
};

export default CampCard;
