import React from 'react';
import { Link } from 'lucide-react';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header />
      <main className='pt-20'>
      <h1>Welcome to ALX ProDev</h1>
      <p>This is the homepage of the ALX ProDev project.</p>
      </main>
    </div>
  );
}
