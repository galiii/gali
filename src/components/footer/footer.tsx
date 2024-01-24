import React from "react";
import Image from "next/image";
import Link from "next/link";
import instagram from "@/assets/icon-instagram.svg";
import discord from "@/assets/discord.svg";
import github from "@/assets/github.svg";
import styles from "./footer.module.css";


interface SocialLink {
    href: string;
    image: any;
    alt: string;
}

const socialLinks: SocialLink[] = [
    { href: "https://www.google.com", image: instagram, alt: "Instagram" },
    { href: "https://www.google.com", image: discord, alt: "Discord" },
    { href: "https://www.google.com", image: github, alt: "GitHub" },
];

function SocialLinkItem({ href, image, alt }: SocialLink): React.ReactElement {
    return (
        <li className={styles.footer__social_item}>
            <Link href={href}>
                <Image src={image} alt={alt} width={16} height={16} />
            </Link>
        </li>
    );
}

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2024 Gali. All rights reserved.</p>
            <ul className={styles.footer__social_list}>
                {socialLinks.map((link, index) => (
                    <SocialLinkItem key={index} {...link} />
                ))}
            </ul>
        </footer>
    );
}
