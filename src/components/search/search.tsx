"use client"
import React, { useState } from 'react';
import Image from 'next/image';

import styles from "./search.module.css";
import searchIcon from '@/assets/header/icon-search.svg';

interface SearchProps {
    onSearch: (query: string) => void;
}

export default function Search(/*{ onSearch }: SearchProps*/) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        //onSearch(searchQuery);
    };

    return (
        <div className={styles.search}>
            <input
                className={styles.search__input}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            //placeholder="Search..."
            />
            <button className={styles.search__btn} onClick={handleSearch}><Image src={searchIcon} alt='search' height={20} width={20} /></button>
        </div>
    )
}
