import React from 'react';

 import { Header } from '../components/header/header';
import { Player } from '../components/player/player';

import '../styles/global.scss';
import styles from '../styles/app.module.scss';


function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header/>
        <Component {...pageProps} />
      </main>

      <Player/>
    </div>
  )
}

export default MyApp;
