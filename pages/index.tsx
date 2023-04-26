import Contact from '@/features/Contact';
import Cover from '@/features/Cover';
import Credits from '@/features/Credits';
import Experience from '@/features/Experience';
import Navigator from '@/features/Navigator';
import Resume from '@/features/Resume';
import Studies from '@/features/Studies';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zabai Armas Herrera</title>
        <meta name="description" content="Zabai Armas Herrera portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Navigator />
        <Cover />
        <Experience />
        <Studies />
        <Resume />
        <Contact />
        <Credits />
      </main>
    </>
  );
}
