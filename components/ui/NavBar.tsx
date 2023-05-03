import { useTheme, Text, Spacer } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import NextLink from 'next/link';

export const NavBar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: '0px 20px',
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='Icono de la app'
        width={70}
        height={70}
      />
      <Text color='white' h2>
        P
      </Text>
      <Link href='/'>
        <Text color='white'> okémon</Text>
      </Link>
      <Spacer css={{ flex: 1 }} />
      <Link href='/favorites' style={{marginRight: '10px'}}>Favoritos</Link>
    </div>
  );
};
