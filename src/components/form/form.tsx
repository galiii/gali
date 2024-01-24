import React, { ChangeEvent, FormEvent } from "react";

//import React from 'react'
import Image from "next/image";
import send from "@/assets/contact/icon-send.svg";
import styles from "./form.module.css";

interface FormFieldProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
}

function FormField({ label, type, name, value, onChange }: FormFieldProps) {
    return (
        <label className={styles.form__label}>
            <span className={styles.label__name}>{label}</span>
            {type === "textarea" ? (
                <textarea
                    className={styles.form__textarea}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <input
                    className={styles.form__input}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            )}
        </label>
    );
}

export default function Form() {
    return (
        <form className={styles.form} onSubmit={(e) => console.log(e)}>
            <FormField
                label="Your Name *"
                type="text"
                name="name"
                value={"name"}
                onChange={() => console.log("Name changed")}
            />

            <FormField
                label="Your Email *"
                type="email"
                name="email"
                value={" gjgh"}
                onChange={() => console.log("Email changed")}
            />

            <FormField
                label="Your Message *"
                type="textarea"
                name="message"
                value={"message"}
                onChange={() => console.log("Message changed")}
            />

            <button
                className={`profile__button ${styles.form__button}`}
                type="submit"
            >
                Send Message
                <Image src={send} alt="send" width={24} height={24} />
            </button>
        </form>
    );
}
