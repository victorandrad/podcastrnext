import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';
import { usePlayer } from '../../contexts/PlayerContext';

import styles from './episode.module.scss';
import { getAllEpisodes, getEpisodeBySlug, type Episode } from '../../data/episodes';

interface EpisodeProps {
  episode: Episode;
}

export default function Episode({ episode }: EpisodeProps) {
  const router = useRouter();
  const { play } = usePlayer();

  const publishedAt = format(parseISO(episode.published_at), "d 'de' MMMM 'de' yyyy", { locale: ptBR });
  const duration = convertDurationToTimeString(episode.file.duration);

  return (
    <div className={styles.episode}>
      <Head>
        <title>{episode.title} | Podcastr</title>
      </Head>

      <button
        type="button"
        className={styles.backButton}
        onClick={() => router.back()}
      >
        <img src="/arrow-left.svg" alt="" />
        <span>Voltar</span>
      </button>

      <div className={styles.cover}>
        <Image
          width={1200}
          height={675}
          src={episode.thumbnail}
          alt={episode.title}
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <header className={styles.hero}>
        <h1>{episode.title}</h1>
        <p className={styles.members}>{episode.members}</p>

        <div className={styles.meta}>
          <span className={styles.metaChip}>{publishedAt}</span>
          <span className={styles.metaChip}>{duration}</span>
        </div>

        <button
          type="button"
          className={styles.playButton}
          onClick={() => play(episode)}
        >
          <img src="/play.svg" alt="" />
          Tocar episódio
        </button>
      </header>

      <section className={styles.about}>
        <h2>Sobre o episódio</h2>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: episode.description }}
        />
      </section>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const episodes = getAllEpisodes();

  const paths = episodes.map(episode => ({
    params: { slug: episode.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const episode = getEpisodeBySlug(slug as string);

  if (!episode) {
    return { notFound: true };
  }

  return {
    props: { episode },
  };
};
