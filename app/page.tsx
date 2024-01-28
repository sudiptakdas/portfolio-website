import Image from 'next/image';
import Intro from '@/components/intro';

export default function Home() {
  return (
    <main className='flex justify-center items-center px-4 '>
      <div>
        <Intro />
      </div>
    </main>
  );
}
