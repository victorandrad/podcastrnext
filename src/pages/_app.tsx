import Head from 'next/head';
import { Header } from '../components/header/header';
import { Player } from '../components/player/player';

import '../styles/global.scss';
import styles from '../styles/app.module.scss';
import { PlayerContextProvider } from '../contexts/PlayerContext';


function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>

        <Player />
      </div>
    </PlayerContextProvider>
  );
}

export default MyApp;
