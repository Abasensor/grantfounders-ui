import Navbar from '../components/Navbar';export const metadata = {
  title: 'GrantFounders',
  description: 'O GPS de Captação do Brasil',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <body className='min-h-screen flex flex-col bg-gray-50 text-gray-800'>
        <header>
          <Navbar />
        </header>
        <main className='flex-grow container mx-auto p-4'>
          {children}
        </main>
        <footer className='bg-white border-t py-4 text-center text-sm'>
          © 2025 GrantFounders. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}
