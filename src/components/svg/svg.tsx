"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import arrow from "@/assets/icons/arrow.svg";
import circle from "@/assets/icons/circle.svg";
import styles from "./svg.module.css";

export default function Svg() {
    //states
    const [isWideScreen, setIsWideScreen] = useState<boolean>(true);
    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 900);
        };

        console.log("in", window.innerWidth)
        // Initial call to set the initial width
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    //render
    return (
        <>
            {isWideScreen && <div className={styles.svg}>
                <Image src={circle} className={styles.circle} alt='circle' />
                <Image src={arrow} className={styles.arrow} alt='arrow' />
            </div>}
        </>
    )
}

