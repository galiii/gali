import React from 'react';
import Image from 'next/image';
import about from "@/assets/about/about.png";
import styles from "./about.module.css";
import Svg from '../svg/svg';

interface AboutTextData {
    subtitle?: string;
    text: string;
}

const aboutTextData: AboutTextData[] = [
    { subtitle: "Hello!", text: "My name is Sinan and I specialize in web development that utilizes HTML, CSS, JS, and REACT, etc." },
    { text: "I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving." },
    { text: "When I'm not coding, I am writing blogs, reading, or picking up some new hands-on art project like photography." },
    { text: "I like to have my perspective and belief systems challenged so that I see the world through new eyes." },
];

function AboutText({ subtitle, text }: AboutTextData): React.ReactElement {
    return <>
        {subtitle && <h4 className={styles.about__subtitle}>{subtitle}</h4>}
        <p className={styles.about__text}>{text}</p>
    </>
};

export default function About({ subtitle, text }: AboutTextData): React.ReactElement {
    return (
        <section className={styles.about}>
            <Svg />
            <h1 className={styles.about__title}>About me</h1>
            <div className={styles.about__container}>
                <span className='tag'>{"<p>"}</span>
                {
                    aboutTextData.map((aboutItem, index) => (
                        <AboutText key={index} subtitle={aboutItem.subtitle} text={aboutItem.text} />
                    ))
                }
                <span className='tag'>{"</p>"}</span>
            </div>

            <Image className={styles.about__image} src={about} alt='about' width={463} height={556} />
        </section>
    )
}
