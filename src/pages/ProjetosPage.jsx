import React from "react";
import pdfFile from "../assets/smartpdf.pdf";

const ProjetosPage = () => {
  return (
    <div className="w-screen h-screen m-0 p-0 overflow-hidden">
      <iframe
        src={pdfFile}
        title="Apresentação Conecta SmartCity"
        className="w-full h-full"
      />
    </div>
  );
};

export default ProjetosPage;
