import { NavBar } from '@/components/ui';
import Head from 'next/head';
import React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name='author' content='Ieremy Flores' />
        <meta name='description' content='Información sobre el pokemon xxxx' />
        <meta name='keywords' content='XXXX, pokemon, pokedex' />
        <meta property='og:title' content={`Información sobre ${title}`} />
        <meta
          property='og:description'
          content={`Esta es la página sobre ${title}`}
        />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
      </Head>
      <NavBar />
      <main
        style={{
          padding: '0px 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
