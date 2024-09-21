import React from 'react';
import styles from './Header.module.scss';
import SearchIcon from '../../svgs/SearchIcon';
import LeftArrow from '../../svgs/LeftArrow';

function Header(props: any) {
  return (
    <header className={styles.header}>
      <div className={styles.innerLeft}>
        <LeftArrow width={'50'} height={'50'} color={'white'} />
        <h2>Romantic Comedy</h2>
      </div>      

      <div className={styles.innerRight}>
        <SearchIcon width={'30'} height={'25'} color={'white'}  />
      </div>
    </header>
  )
}

export default Header