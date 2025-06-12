import React from "react";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-white sticky top-0 z-50">
        <div className="text-xl font-bold">Conecta SmartCity</div>
        <div className="space-x-4">
          <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
            COLABORADORES
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
            PROJETOS
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
            CONTATO
          </button>
          <button className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
            ENTRAR/LOGIN
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 gap-8 bg-white">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold leading-snug">
            Unindo e transformando cidades
          </h1>
          <p className="text-lg">
            Na Conecta SmartCity, conectamos inovação, gestão pública e
            desenvolvimento urbano. Atuamos como ponte entre empresas e
            prefeituras, oferecendo consultoria estratégica, promovendo
            parcerias e captando recursos para impulsionar cidades mais
            inteligentes, sustentáveis e eficientes.
          </p>
          <button className="px-6 py-3 rounded-md bg-black text-white hover:bg-gray-800 transition">
            LEIA MAIS
          </button>
          <div className="flex space-x-6 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold">100+</div>
              <div>PROJETOS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">70+</div>
              <div>PARCERIAS</div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/images/building1.jpg"
            alt="Prédio"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Quem Somos */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 bg-gray-100">
        <div className="p-6 bg-white rounded-xl shadow-lg space-y-4">
          <h2 className="font-bold text-xl">QUEM SOMOS?</h2>
          <p>
            Há anos no mercado, a Conecta SmartCity se consolida como uma das
            principais empresas brasileiras na estruturação de projetos públicos
            inteligentes, conectando municípios, empresas e oportunidades de
            captação de recursos para transformar realidades.
          </p>
          <p>
            Com uma atuação sólida e estratégica, a Conecta SmartCity possui
            100% de aprovação junto aos órgãos governamentais, entregando
            soluções completas, viáveis e alinhadas às normas técnicas, legais e
            fiscais exigidas pelos entes públicos e financiadores nacionais e
            internacionais.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-lg space-y-4">
          <h2 className="font-bold text-xl">O QUE FAZEMOS?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Estruturamos projetos sob medida para prefeituras, consórcios e
              estados
            </li>
            <li>
              Facilitamos o acesso a programas de financiamento (Caixa, BNDES,
              PAC, entre outros)
            </li>
            <li>
              Conectamos empresas privadas e municípios em propostas inovadoras
              de desenvolvimento urbano e econômico
            </li>
            <li>
              Atuamos desde o estudo econômico até os projetos executivos de
              engenharia e arquitetura, conforme a complexidade de cada
              iniciativa.
            </li>
          </ul>
        </div>
      </section>

      {/* Planos */}
      <section className="p-8 bg-white">
        <h2 className="text-center text-2xl font-bold mb-8">
          Planos para realização de projetos para municípios.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Coluna 1 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow space-y-3">
            <h3 className="font-bold text-lg">ANÁLISE ECONÔMICO-FINANCEIRA</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Análise econômica e financeira do município</li>
              <li>Estudo técnico preliminar</li>
              <li>
                Verificação da dívida tributária e limite de endividamento
              </li>
            </ul>
          </div>

          {/* Coluna 2 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow space-y-3">
            <h3 className="font-bold text-lg">
              ESTUDO TÉCNICO + ENGENHARIA/ECONOMIA
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Verificação da dívida tributária e limite de endividamento
              </li>
              <li>Análise econômica e financeira do município</li>
              <li>Análise estrutural do projeto</li>
              <li>Análise do local projetado</li>
              <li>Análise de convênios</li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow space-y-3">
            <h3 className="font-bold text-lg">
              ARQUITETURA, URBANISMO E ESTRATÉGIA INTEGRADA
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Verificação da dívida tributária e limite de endividamento
              </li>
              <li>Análise econômica e financeira do município</li>
              <li>Análise estrutural do projeto</li>
              <li>Análise do local projetado</li>
              <li>Análise de convênios</li>
              <li>Maquete e alinhamento do projeto</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-6 font-medium">
          Planos personalizados ou assinaturas.
        </p>
      </section>

      {/* Contato */}
      <section className="p-8 bg-gray-100 flex justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg space-y-6 w-full md:w-1/2">
          <h2 className="text-center font-bold text-xl">
            Junte-se à Conecta SmartCity e acompanhe de perto como conectamos
            municípios, empresas e inovação.
          </h2>
          <input
            type="text"
            placeholder="Nome completo"
            className="w-full px-4 py-3 rounded-md border border-gray-300"
          />
          <input
            type="email"
            placeholder="E-mail para contato"
            className="w-full px-4 py-3 rounded-md border border-gray-300"
          />
          <button className="w-full px-4 py-3 rounded-md bg-black text-white hover:bg-gray-800 transition">
            ENVIAR
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
