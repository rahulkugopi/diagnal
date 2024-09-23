import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import SearchIcon from '../../svgs/SearchIcon';
import LeftArrow from '../../svgs/LeftArrow';
import Close from '../../svgs/Close';
import { useDispatch, useSelector } from 'react-redux';
import { filterItems } from '../../redux/slice/products';

function Header() {

  const [view, setView] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [searchData, setSearchData] = useState<string>('');
  const dispatch = useDispatch();
  const { allDetails } = useSelector<any>(state => state.products) as any;  
  
  const handleSearchBtn = () => {
    setView(!view);
  }

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = (e: any) => {
    setSearchData(e.target.value);
    dispatch(filterItems(searchData));
  }

  return (
    <header className={`${styles.header} ${scroll == true ? styles.shadow : ''}`}>
      <div className={styles.innerLeft}>
        <div className={styles.arrow}>
          <LeftArrow color={'white'} />
        </div>
        <h2>{allDetails.title}</h2>
      </div>

      <div className={styles.innerRight}>
        {
          view &&
          <div className={styles.searchView}>
            <input
              type='text'
              placeholder='search...'
              value={searchData}
              onChange={(e) => {
                handleSearch(e);
              }}
            />
            <button
              type='button'
              className={styles.searchCloseBtn}
              onClick={handleSearchBtn}
            >
              <Close color={'white'} />
            </button>
          </div>
        }
        <button
          type='button'
          className={styles.search}
          onClick={handleSearchBtn}
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