import React from "react";
import Image from "next/image";
import profile from "@/assets/home/Profile.png";
import link from "@/assets/home/icon-link.svg";
import mail from "@/assets/home/icon-mail.svg";
import map from "@/assets/home/icon-map-pin.svg";
import briefcase from "@/assets/home/icon-briefcase.svg";
import download from "@/assets/home/icon-download.svg";
import styles from "./profile.module.css";
import ProfileItem from "../profile-item/profile-item";

interface ContactInfoItem {
    icon: string;
    text: string;
}

const techSkills: string[] = ["HTML", "CSS", "JS", "React"];

const contactInfo: ContactInfoItem[] = [
    { icon: mail, text: "gali.brill.1408@gmail.com" },
    { icon: map, text: "Israel" },
    { icon: briefcase, text: "Full-time / Freelancer" },
    //{ icon: "@/assets/home/icon-link.svg", text: "gali.brill.1408@gmail.com" },
];

export default function Profile() {
    return (
        <div className={styles.profile}>
            <Image
                src={profile}
                className={styles.profile_image}
                alt="Image 1"
                width={96}
                height={96}
            />
            <h4 className={styles.profile__name}>Gali</h4>
            <p className={styles.profile__position}>Full-stack developer</p>
            <ul className={styles.list__icons}>
                {contactInfo.map((item, index) => (
                    <ProfileItem key={index} icon={item.icon} text={item.text} />
                ))}
            </ul>

            <ul className={styles["list-tech"]}>
                {techSkills.map((skill, index) => (
                    <li key={index} className={styles["item-tech"]}>
                        {skill}
                    </li>
                ))}
            </ul>
            <button className="profile__button" onClick={() => console.log("here")}>
                Download CV
                <Image src={download} alt="Download" width={24} height={24} />
            </button>
        </div>
    );
}
