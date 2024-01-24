import React from 'react';
import Image from 'next/image';
import styles from "./profile-item.module.css";

interface ProfileListItemProps {
    icon: string;
    text: string;
}

export default function ProfileItem({ icon, text }: ProfileListItemProps): React.ReactElement {
    return (
        <li className={styles['profile__icon-item']}>
            <Image src={icon} alt={text} width={14} height={14} />
            <span>{text}</span>
        </li>
    )
}
