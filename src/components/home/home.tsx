'use client'
import React from 'react';
import Image from 'next/image';
import styles from "./home.module.css";
import Profile from '../profile/profile';
import mail from "@/assets/home/icon-mail-color.svg";



const TalkSection = () => {
    return (
        <div className={styles.home__talk}>
            <span className={styles.home__talk_span}>let’s talk</span>
            <button>
                <Image src={mail} alt="mail" height={24} width={24} />
            </button>
        </div>
    );
};

export default function Home() {
    return (
        <section className={styles.home}>
            <h1 className={styles.home__title}>
                developer
            </h1>
            <div className={styles.home__container}>
                <Profile />
                <div className={styles.home__container1}>
                    <div className={styles.home__box}>
                        <span className='tag'>{"<h1>"}</span>
                        <h4 className={styles.home__position}>{"Hey"}<br></br> {"I'm "}
                            <span className='color-brand1'>{"Gali"}<br></br></span>
                            Full-stack developer </h4>
                        <span className='tag'>{"</h1>"}</span><br></br>
                    </div>

                    <div className={styles.home__box1}>
                        <span className='tag'>{"<p>"}</span>
                        <p className={styles.home__contact}>I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,</p>
                        <span className='tag'>{"</p>"}</span></div>


                    <TalkSection />
                </div>
            </div>
        </section>
    )
}
