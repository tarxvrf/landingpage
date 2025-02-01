import React from "react";

const Slogan = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 sm:px-16 sm:py-28 sm:gap-10 gap-5 py-5">
      <div className="bg-transparent lg:col-start-2 flex justify-center">
        <img className="w-1/2 sm:w-full" src="../assets/bgsholat.png" alt="" />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-purple-500">
          Apa yg mungkin kami bisa bantu ?
        </h1>
        <p className="sm:pt-5">
          <span className="text-xl text-info font-bold">Aplikasi sholat</span> adalah aplikasi yang dirancang untuk membantu umat
          Muslim dalam menjalankan ibadah sholat dengan cara memberikan
          informasi yang berkaitan Jadwal Waktu Sholat: Menyediakan waktu sholat
          sesuai dengan lokasi pengguna, baik itu waktu sholat <span className="text-info"><i> Subuh, Dzuhur,
          Ashar, Maghrib, maupun Isya</i></span>
        </p>
        <p className="pt-3">
          <button className="btn btn-warning btn-sm px-5">klik</button>
        </p>
      </div>
    </div>
  );
};

export default Slogan;
