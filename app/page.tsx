import CardList from './_components/CardList';
import Hero from './_components/Hero';
import { Suspense } from 'react';
import Spinner from './_components/Spinner';

export default function Home() {
  return (
    <section>
      <Hero />
      <Suspense fallback={<Spinner />}>
        <CardList />
      </Suspense>
    </section>
  );
}
