import ebookBiologico from "../assets/ebookBiologico.png";
import ebookSocial from "../assets/ebookSocial.png";
import ebookPrincipal from "../assets/ebookPrincipal.png";
import calcinha from "../assets/calcinha.png";

export default function HeroSection() {
  return (
    <section className="text-white relative bg-neutral-800 min-h-screen flex flex-col items-center text-center px-4 py-10">
      <h1 className="mt-12 text-[4vh] md:text-[5vh] font-bold">
        A atração não é sorte.<br></br>
      </h1>
      <p className="text-[3vh] w-3/4 md:w-1/2 font-bold">
        <span className="text-red-600 font-extrabold">
          Domine o jogo da atenção e do desejo
        </span>{" "}
        e descubra o que acontece quando voce tem o{" "}
        <span className="text-orange-600">controle</span> dela.
      </p>
      <div className="relative flex justify-center items-center h-auto my-20">
        {/* Glow / Vinheta */}

        {/* Ovos laterais (atrás) */}
        <img
          src={ebookBiologico}
          alt="Ovo esquerdo"
          className="absolute left-1/2 -translate-x-[100%] top-1/2 -translate-y-1/2 w-[160px] md:w-[360px] z-10 -rotate-12"
        />
        <img
          src={ebookSocial}
          alt="Ovo direito"
          className="absolute left-1/2 translate-x-[10%] top-1/2 -translate-y-1/2 w-[160px] md:w-[350px] z-10 rotate-12"
        />

        {/* Ovo central (na frente) */}
        <img
          src={ebookPrincipal}
          alt="Ovo central"
          className="relative z-20 w-[200px] md:w-[400px]"
        />
      </div>

      <button
        onClick={() => (window.location.href = "/checkout?produtos=main")}
        className="relative bg-red-700 text-black px-6 py-3 rounded-2xl w-3/4 border-2  border-dashed border-orange-400 md:w-1/3 text-[2vh] hover:bg-red-600 hover:scale-105 transition shadow-lg drop-shadow-2xl shadow-orange-400 font-bold my-5 md:my-20 uppercase"
      >
        <img
          src={calcinha}
          className="animate-bounce absolute size-16 lg:size-28 lg:-top-24 -top-14 right-0 transform scale-x-[-1] Z-50"
          alt=""
        />
        🔓 Aprender a seduzir
      </button>
      {/* Sessão 2: Reenforcement */}
    </section>
  );
}
