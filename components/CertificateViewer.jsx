"use client";

import React from "react";

const CertificateViewer = ({ file, link }) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-full relative hover:cursor-pointer">
        <img src={file} />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 text-white flex justify-center items-center opacity-0 transition-opacity duration-300 ease-in text-sm  font-bold text-center hover:opacity-100 ">
          Klik untuk Melihat Detail
        </div>
      </div>
    </a>
  );
};

export default CertificateViewer;
