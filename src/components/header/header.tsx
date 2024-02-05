"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import style from "./header.module.css";
import instagram from "@/assets/header/icon-instagram.svg";
import discord from "@/assets/header/discord.svg";
import github from "@/assets/header/github.svg";
import Search from "../search/search";

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
    const [isWideScreen, setIsWideScreen] = useState<boolean>(true);
    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 1441);
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
    return (
        <li className={style.footer__social_item}>
            <Link href={href}>
                <Image src={image} alt={alt} width={20} height={20} />

            </Link>
            {isWideScreen && <span>{alt}</span>}
        </li>
    );
}

export default function Header() {
    return (
        <header className={style.header}>

            <nav className={style.header__container}>
                <div className={style["header__name-container"]}>
                    <div className={style.header__tag}>{"<C/>"}</div>
                    <div className={style.header__name}>GaliBrill</div>
                </div>


                <div className={style["header__container-links"]}>
                    <div className={style["header__pages-link"]}>
                        <Link href="/home">Home</Link>
                        <Link href="/blogs">Blogs</Link>
                    </div>

                    <Search />

                    <ul className={style.footer__social_list}>
                        {socialLinks.map((link, index) => (
                            <SocialLinkItem key={index} {...link} />
                        ))}
                    </ul>
                </div>
            </nav>

        </header>
    )
}
