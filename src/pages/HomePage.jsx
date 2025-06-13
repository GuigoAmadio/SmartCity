import React from "react";
import heroImage from "../assets/PrediosLuzes.svg";
import { useNavigate, Link } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="font-sans bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Navbar fixa */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-white fixed top-0 w-full z-50">
        <div className="text-xl font-bold">Conecta SmartCity</div>
        <div className="space-x-4">
          <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-sky-200 transition duration-500 hover:scale-105 ">
            Colaboradoes
          </button>
          <button
            onClick={() => navigate("/projetos")}
            className="px-4 py-2 rounded-full bg-gray-200 hover:bg-sky-200 transition duration-500 hover:scale-105 "
          >
            Projetos
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-sky-200 transition duration-500 hover:scale-105  ">
            Contato
          </button>
          <button className="px-4 py-2 rounded-full bg-black text-white hover:bg-white shadow-lg shadow-neutral-300 hover:text-black transition duration-500 hover:scale-105 ">
            Entrar/Login
          </button>
        </div>
      </nav>

      {/* Seção 1 - HERO */}
      <section
        className="relative h-[80vh] flex flex-col justify-center items-center text-center p-8"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "bottom",
        }}
      >
        {/* Decoração */}
        <div className="absolute w-72 h-72 bg-purple-300 rounded-full opacity-20 top-10 -left-20 blur-3xl"></div>

        <h1 className="text-5xl font-bold mb-6">
          Unindo e transformando cidades
        </h1>
        <p className="max-w-3xl text-lg mb-8">
          Na Conecta SmartCity, conectamos inovação, gestão pública e
          desenvolvimento urbano. Atuamos como ponte entre empresas e
          prefeituras, oferecendo consultoria estratégica, promovendo parcerias
          e captando recursos para impulsionar cidades mais inteligentes,
          sustentáveis e eficientes.
        </p>
        <button
          onClick={() => navigate("/ChatPage")}
          className="w-48 px-8 py-3 rounded-lg text-white font-semibold bg-gradient-to-tr from-pink-400 to-blue-400 hover:brightness-90 transition duration-300 hover:scale-105 mb-8"
        >
          Leia Mais
        </button>

        <div className="flex gap-12 text-center">
          <div>
            <div className="text-3xl font-bold">100+</div>
            <div>PROJETOS</div>
          </div>
          <div>
            <div className="text-3xl font-bold">70+</div>
            <div>PARCERIAS</div>
          </div>
        </div>
      </section>

      {/* Nova Seção Unificada com as imagens posicionadas e 100% responsivo */}
      <section className="relative bg-gray-100 px-4 py-24">
        {/* Luzes de fundo com o estilo atual */}
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full opacity-20 -top-40 -right-40 blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full opacity-20 bottom-20 -left-40 blur-3xl"></div>

        <div className="max-w-7xl mx-auto flex flex-col gap-32">
          {/* BLOCO 1 - Quem Somos */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Texto */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-left">Quem Somos</h2>
              <p className="text-left">
                Há anos no mercado, a Conecta SmartCity se consolida como uma
                das principais empresas brasileiras na estruturação de projetos
                públicos inteligentes, conectando municípios, empresas e
                oportunidades de captação de recursos para transformar
                realidades.
              </p>
              <p className="text-left">
                Com uma atuação sólida e estratégica, a Conecta SmartCity possui
                100% de aprovação junto aos órgãos governamentais, entregando
                soluções completas, viáveis e alinhadas às normas técnicas,
                legais e fiscais exigidas pelos entes públicos e financiadores
                nacionais e internacionais.
              </p>
            </div>

            {/* Área para futura imagem */}
            <div className="flex-1 flex justify-center items-center">
              <div className="w-72 h-72 bg-blue-200 rounded-full opacity-80"></div>
            </div>
          </div>

          {/* BLOCO 2 - O Que Fazemos com linha conectando os pontos */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            {/* Texto com barra vertical */}
            <div className="flex-1 space-y-10">
              <h2 className="text-3xl font-bold text-left">O Que Fazemos</h2>

              <div className="relative flex flex-col gap-10 ml-5">
                {/* Linha vertical */}
                <div className="absolute top-2 bottom-2 left-[7px] w-1 bg-blue-200 rounded-full z-0"></div>

                {/* Lista de itens */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-4 aspect-square bg-blue-300 rounded-full shrink-0"></div>
                  <p>
                    Estruturamos projetos sob medida para prefeituras,
                    consórcios e estados
                  </p>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-4 aspect-square bg-blue-300 rounded-full shrink-0"></div>
                  <p>
                    Facilitamos o acesso a programas de financiamento (Caixa,
                    BNDES, PAC, entre outros)
                  </p>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-4 aspect-square bg-blue-300 rounded-full shrink-0"></div>
                  <p>
                    Conectamos empresas privadas e municípios em propostas
                    inovadoras de desenvolvimento urbano e econômico
                  </p>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-4 aspect-square bg-blue-300 rounded-full shrink-0"></div>
                  <p>
                    Atuamos desde o estudo econômico até os projetos executivos
                    de engenharia e arquitetura, conforme a complexidade de cada
                    iniciativa.
                  </p>
                </div>
              </div>
            </div>

            {/* Área para futura imagem */}
            <div className="flex-1 flex justify-center items-center">
              <div className="w-72 h-72 bg-blue-200 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a href="/projetos">
            <Link to="/projetos">
              <button className="bg-black w-52 h-10 rounded hover:scale-105 hover:bg-neutral-800 transition duration-300 text-white font-bold ">
                Ver nossos projetos
              </button>
            </Link>
          </a>
        </div>
      </section>

      {/* Seção de Planos com borda gradiente e rounded funcionando */}
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-gray-50 p-8 text-center">
        <div className="absolute w-72 h-72 bg-green-200 rounded-full opacity-20 top-24 left-10 blur-3xl"></div>

        <h2 className="text-3xl font-bold mb-12">
          Planos para realização de projetos para municípios
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          {/* Card 1 */}
          <div className="p-[2px] rounded-2xl bg-gradient-to-tr from-pink-300 to-blue-300">
            <div className="bg-white p-10 rounded-2xl shadow-lg h-full">
              <h3 className="font-bold text-xl mb-6">
                ANÁLISE ECONÔMICO-FINANCEIRA
              </h3>
              <ul className="list-disc list-inside space-y-4 text-left">
                <li>Análise econômica e financeira do município</li>
                <li>Estudo técnico preliminar</li>
                <li>
                  Verificação da dívida tributária e limite de endividamento
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-[2px] rounded-2xl bg-gradient-to-tr from-pink-300 to-blue-300">
            <div className="bg-white p-10 rounded-2xl shadow-lg h-full">
              <h3 className="font-bold text-xl mb-6">
                ESTUDO TÉCNICO + ENGENHARIA/ECONOMIA
              </h3>
              <ul className="list-disc list-inside space-y-4 text-left">
                <li>
                  Verificação da dívida tributária e limite de endividamento
                </li>
                <li>Análise econômica e financeira do município</li>
                <li>Análise estrutural do projeto</li>
                <li>Análise do local projetado</li>
                <li>Análise de convênios</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-[2px] rounded-2xl bg-gradient-to-tr from-pink-300 to-blue-300">
            <div className="bg-white p-10 rounded-2xl shadow-lg h-full">
              <h3 className="font-bold text-xl mb-6">
                ARQUITETURA, URBANISMO E ESTRATÉGIA INTEGRADA
              </h3>
              <ul className="list-disc list-inside space-y-4 text-left">
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
        </div>

        <p className="text-center mt-12 font-medium">
          Planos personalizados ou assinaturas.
        </p>
      </section>

      {/* Seção 5 - Contato */}
      <section className="relative min-h-screen flex justify-center items-center bg-white p-8">
        <div className="absolute w-80 h-80 bg-yellow-300 rounded-full opacity-20 bottom-0 right-0 blur-3xl"></div>

        <div className="bg-gray-100 p-10 rounded-xl shadow-lg space-y-6 w-full max-w-xl">
          <h2 className="text-center font-bold text-2xl">
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
          <button className="w-full px-4 py-3 rounded-md text-white font-semibold bg-gradient-to-tr from-pink-400 to-blue-400 hover:brightness-90 transition">
            ENVIAR
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
