"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./search.module.css";
import searchIcon from "@/assets/header/search/icon-search.svg";
import searchWhite from "@/assets/header/search//white-search.svg";

interface SearchProps {
    onSearch: (query: string) => void;
}

export default function Search(/*{ onSearch }: SearchProps*/) {
    //states
    const [searchQuery, setSearchQuery] = useState("");
    const [isWideScreen, setIsWideScreen] = useState<boolean>(true);
    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth <= 1190);
        };

        console.log("serch", window.innerWidth)
        // Initial call to set the initial width
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    //helpers
    const handleSearch = () => {
        //onSearch(searchQuery);
    };

    //render
    return (
        !isWideScreen ? <div className={styles.search}>
            <input
                className={styles.search__input}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            //placeholder="Search..."
            />
            <button className={styles.search__btn} onClick={handleSearch}>
                <Image src={searchIcon} alt="search" height={20} width={20} />
            </button>
        </div> : <button className={styles.search__mobile}>
            <Image src={searchWhite} alt="Search maoible" />
        </button>
    );
}
