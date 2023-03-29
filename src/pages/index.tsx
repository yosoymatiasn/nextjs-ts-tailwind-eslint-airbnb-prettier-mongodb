import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import clientPromise from '../lib/mongodb';

export async function getServerSideProps(context) {
  try {
    await clientPromise;

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>APP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">You are NOT connected to MongoDB</h2>
        )}
      </main>
    </>
  );
}
