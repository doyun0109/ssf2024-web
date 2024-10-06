'use client';

import React from 'react';
import styles from './Header.module.scss';
import {usePathname} from "next/navigation";
import Link from "next/link";
import SSFSymbol from "@/assets/icon/ssf-symbol.svg";

const Header = () => {
    const pathName = usePathname();

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Link href={'/'} aria-label={"main-page"}>
                        <SSFSymbol/>
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
