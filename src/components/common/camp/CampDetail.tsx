'use client'

import React from 'react';
import Image from "next/image";
import styles from "./CampDetail.module.scss";
import Link from "next/link";
import Camp from "@/lib/types/Camp";

interface Props {
    camp: Camp
}

const CampDetail = ({camp}: Props) => {
    return (
        <div className={styles.container}>
            <Image src={camp.bookCover} alt={`${camp.clubId}-cover`} width={204} height={283}/>
            <div className={styles.infoContainer}>

                <div className={styles.tagContainer}>
                    {camp.tag.map((tag) => (
                        <div
                            key={`${camp.clubId}-${tag}`}
                            className={styles.tag} style={{
                            background: camp.primaryColor,
                            color: camp.textColor
                        }}>
                            {tag}
                        </div>
                    ))}
                </div>
                <p className={styles.title}>{camp.campName}</p>
                <p className={styles.description}>{camp.campDescription}</p>
            </div>

            <div className={styles.line}/>

            <div className={styles.linkContainer}>
                <button
                    className={styles.shareButton}
                    style={{gridArea: 'share'}}
                    onClick={async () => {
                        const shareData = {
                            title: "SSF 2024",
                            text: `2024소프트웨어 나눔 축제\n${camp.campName}: https://ssf.sunrin.io/camp/${camp.clubId}`,
                        };
                        if (navigator.canShare(shareData)) await navigator.share(shareData);
                    }}>
                    <Image src={'/assets/icon/share.svg'} alt={'arrow'} width={24} height={24}/>
                    캠프 공유하기
                </button>
                <Link href={camp.clubWeb} className={styles.linkButton} style={{gridArea: 'link-web'}}>
                    <Image src={'/assets/icon/arrow.svg'} alt={'arrow'} width={24} height={24}/>
                    동아리 웹사이트
                </Link>
                <Link href={camp.clubWeb} className={styles.linkButton} style={{gridArea: 'link-sns'}}>
                    <Image src={'/assets/icon/arrow.svg'} alt={'arrow'} width={24} height={24}/>
                    동아리 SNS
                </Link>
            </div>
        </div>
    );
};

const Skeleton = () => {
    return (
        <div className={styles.container}>
            <div style={{width: 204, height: 283, background: '#d5d5d5'}}/>
            <div className={styles.infoContainer}>

                <div className={styles.tagContainer}>
                    {['tag1', 'tag2', 'tag3'].map((tag) => (
                        <div
                            key={`skeleton-${tag}`}
                            className={styles.tag} style={{
                            background: '#fff',
                            color: '#121217'
                        }}>
                            {tag}
                        </div>
                    ))}
                </div>
                <p className={styles.title}>Loading</p>
                <p className={styles.description}>Loading</p>
            </div>

            <div className={styles.line}/>

            <div className={styles.linkContainer}>
                <button
                    className={styles.shareButton}
                    style={{gridArea: 'share'}}>
                    <Image src={'/assets/icon/share.svg'} alt={'arrow'} width={24} height={24}/>
                    캠프 공유하기
                </button>
                <div className={styles.linkButton} style={{gridArea: 'link-web'}}>
                    <Image src={'/assets/icon/arrow.svg'} alt={'arrow'} width={24} height={24}/>
                    동아리 웹사이트
                </div>
                <div className={styles.linkButton} style={{gridArea: 'link-sns'}}>
                    <Image src={'/assets/icon/arrow.svg'} alt={'arrow'} width={24} height={24}/>
                    동아리 SNS
                </div>
            </div>
        </div>
    )
}

CampDetail.Skeleton = Skeleton;

export default CampDetail;
