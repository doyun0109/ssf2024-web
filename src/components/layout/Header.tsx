'use client';

import React from 'react';
import Image from "next/image";
import styles from './Header.module.scss';
import {usePathname} from "next/navigation";
import Link from "next/link";

const Header = () => {
    const pathName = usePathname();

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Link href={'/'}>
                        <Image src={'/assets/icon/ssf-symbol.svg'} alt={'ssf-logo'} width={84} height={20} priority />
                    </Link>
                </div>
            </div>
            {pathName !== '/' && (
                <div style={{height: 'var(--headerHeight)'}}/>
            )}
        </>
    );
};

export default Header;
