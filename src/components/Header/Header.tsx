import React, { useState } from 'react';
import styles from './Header.module.scss';
import SearchIcon from '../../svgs/SearchIcon';
import LeftArrow from '../../svgs/LeftArrow';
import Close from '../../svgs/Close';

function Header(props: any) {
  const { productList } = props.data;

  const [view, setView] = useState(false);

  const handleSearch = () => {
    setView(!view);
  }

  return (
    <header className={styles.header}>
      <div className={styles.innerLeft}>
        <div className={styles.arrow}>
          <LeftArrow color={'white'} />
        </div>
        <h2>{productList.title}</h2>
      </div>

      <div className={styles.innerRight}>
        {
          view &&
          <div className={styles.searchView}>
            <input type='text' placeholder='search...' />
            <button
              type='button'
              className={styles.searchCloseBtn}
              onClick={handleSearch}
            >              
                <Close color={'white'} />              
            </button>
          </div>
        }
        <button
          type='button'
          className={styles.search}
          onClick={handleSearch}
        >
          {
            view == false ? <SearchIcon color={'white'} /> : <Close color={'white'} />
          }
        </button>
      </div>
    </header>
  )
}

export default Header