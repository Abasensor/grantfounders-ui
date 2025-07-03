import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto flex items-center justify-between p-4'>
        <Link href='/'>
          <a className='text-2xl font-bold text-blue-600'>GrantFounders</a>
        </Link>
        <div className='space-x-4'>
          <Link href='/'><a>Home</a></Link>
          <Link href='/dashboard'><a>Dashboard</a></Link>
          <Link href='/login'>
            <a className='px-4 py-2 bg-blue-600 text-white rounded'>Entrar</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
