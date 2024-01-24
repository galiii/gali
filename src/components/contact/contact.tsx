"use client"
import React from 'react';
import Image from 'next/image';
import Form from '../form/form';
import styles from "./contact.module.css";
import arrow from "@/assets/icons/arrow.svg";
import circle from "@/assets/icons/circle.svg";
import Svg from '../svg/svg';

export default function Contact() {
    return (
        <div className={styles.contact}>
            <Svg />
            <h1 className={styles.contact__title}>Contact</h1>
            <p className={styles.contact__subtitle}>I’m currently available for freelance work and fulltime</p>
            <h4 className={styles.form__title}>Send me a message</h4>
            <Form />
        </div>
    )
}
