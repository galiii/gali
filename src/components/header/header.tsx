import Link from 'next/link';
import React from 'react';
import style from "./header.module.css"

export default function Header() {
    return (
        <header className={style.header}>
            <div className="">

            </div>
            <nav className="contaienr relative flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href="/" className="font-bond text-3xl">
                    Home
                </Link>
                <div className="space-x-4 text-xl">
                    <Link href="/contact">contact</Link>
                    <Link href="/home">home</Link>
                    <Link href="/about-me">Scale</Link>
                </div>
            </nav>
        </header>
    )
}
