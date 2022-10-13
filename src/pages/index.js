import { HomeCards } from '@containers/HomeCards';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>React Shop</title>
      </Head>
      <HomeCards />
    </>
  );
}
