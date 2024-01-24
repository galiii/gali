import React from 'react';
import Image from 'next/image';
import arrow from "@/assets/icons/arrow.svg";
import circle from "@/assets/icons/circle.svg";
import styles from "./svg.module.css";

export default function Svg() {
    return (
        <div className={styles.svg}>
            <Image src={circle} className={styles.circle} alt='circle' />
            <Image src={arrow} className={styles.arrow} alt='arrow' />
        </div>
    )
}

