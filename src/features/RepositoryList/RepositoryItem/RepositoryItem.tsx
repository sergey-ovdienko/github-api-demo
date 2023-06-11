import React, { FC } from 'react';
import { ApiRepository } from '../../Api/Api.types';
import * as styles from './RepositoryItem.module.css';
import { StarIcon, WatcherIcon } from '../../Icons';

export const RepositoryItem: FC<{ item: ApiRepository }> = ({ item }) => {
  return (
    <a href={item.html_url} className={styles.item} target="_blank">
      <div className={styles.imageContainer}>
        <img
          src={item.owner.avatar_url}
          alt={`Avatar of ${item.owner.login}`}
          loading="lazy"
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>{item.name}</div>
        <div className={styles.author}>{item.owner.login}</div>
        <div className={styles.language}>{item.language}</div>
        <div className={styles.description}>{item.description}</div>
      </div>
      <div className={styles.statsContainer}>
        <div>
          <StarIcon /> <strong>{item.stargazers_count}</strong> stars
        </div>
        <div>
          <WatcherIcon /> <strong>{item.watchers_count} watchers</strong>
        </div>
      </div>
    </a>
  );
};
