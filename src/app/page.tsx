import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen items-center justify-between p-24'>
      <Image
        src='/sample1.jpg'
        alt='sample1 image'
        width={300}
        height={500}
        priority
      />
      <Image
        src='/sample2.jpg'
        alt='sample2 image'
        width={300}
        height={500}
        priority
      />
    </main>
  );
}
