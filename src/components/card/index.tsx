import React from "react";
import Link from 'next/link';

import { Props } from "./types";
import styles from "./index.module.css";

import Button from "../button";

export default function Card({ src, username, followers, linkTo }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <img src={src} />
      </div>
      <div className={styles.cardBody}>
        <p className={styles.username}>@{username}</p>
        {followers && (
          <p className={styles.followers}>Followers: {followers}</p>
        )}
      </div>
      <Link href={`https://twitter.com/${username}`} passHref={true}>
        <a target="_blank" rel="noopener noreferrer">
          <Button variant='primary'>Go</Button>
        </a>
      </Link>
    </div>
  );
}
