import Hero from '../components/Hero';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className='grid md:grid-cols-3 gap-8 mt-12'>
        <div className='p-6 bg-white rounded shadow'>
          <h2 className='text-2xl font-semibold mb-2'>Diagnóstico Rápido</h2>
          <p>Faça o upload do seu projeto e receba um diagnóstico instantâneo.</p>
        </div>
        <div className='p-6 bg-white rounded shadow'>
          <h2 className='text-2xl font-semibold mb-2'>Otimização</h2>
          <p>Receba sugestões acionáveis para maximizar suas chances.</p>
        </div>
        <div className='p-6 bg-white rounded shadow'>
          <h2 className='text-2xl font-semibold mb-2'>Gestão de Projetos</h2>
          <p>Gerencie tudo em um só lugar, do upload à prestação de contas.</p>
        </div>
      </section>
    </>
  );
}
