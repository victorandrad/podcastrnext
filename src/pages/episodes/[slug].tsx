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

  return (
    <div className={styles.episode}>
      <Head>
        <title>{episode.title} | Podcastr</title>
      </Head>

      <div className={styles.thumbnailContainer}>
        <button type="button" onClick={() => router.back()}>
          <img src="/arrow-left.svg" alt="Voltar" />
        </button>
        <Image
          width={700}
          height={160}
          src={episode.thumbnail}
          alt={episode.title}
          style={{ objectFit: 'cover' }}
        />
        <button type="button" onClick={() => play(episode)}>
          <img src="/play.svg" alt="Tocar episódio" />
        </button>
      </div>

      <header>
        <h1>{episode.title}</h1>
        <span>{episode.members}</span>
        <span>{format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR })}</span>
        <span>{convertDurationToTimeString(episode.file.duration)}</span>
      </header>

      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: episode.description }}
      />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const episodes = getAllEpisodes();

  const paths = episodes.map(episode => {
    return {
      params: {
        slug: episode.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const episode = getEpisodeBySlug(slug as string);

  if (!episode) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      episode,
    },
  };
};