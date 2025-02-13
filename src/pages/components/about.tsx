import React from "react";

const About = () => {
  const situs=['https://browiwit-music-player.vercel.app/','https://browiwitapps.vercel.app/','https://jadwalsholat-six.vercel.app/']
   

  return (
    <div >    
    <div className="lg:flex lg:justify-center grid sm:grid-cols-2 lg:grid-cols-3 h-auto sm:py-28 py-5 gap-10 lg:gap- sm:px-10 px-3">
     
    <div className="card lg:w-[400px] border   shadow-2xl  ">  
        <div className="flex justify-center pt-3"><img className="rounded-md border" width={300} src="../assets/upwork3.png" alt="" /></div>      
        <div className="card-body">
          <div className="card-title">Aplikasi Waktu Sholat</div>
          ini adalah apliaksi Jadwal Sholat menggunakan Reactjs
          <a className="btn btn-warning" href={situs[2]}>kunjungi </a>
        </div>
      </div>

      <div className="card lg:w-[400px] border   shadow-2xl  ">  
        <div className="flex justify-center pt-3"><img className="rounded-md border" width={300} src="../assets/upwork4.png" alt="" /></div>      
        <div className="card-body">
          <div className="card-title">Aplikasi Music</div>
          ini adalah apliaksi Music menggunakan Reactjs
          <a className="btn btn-warning" href={situs[0]}>kunjungi </a>
        </div>
      </div>
      <div className="card lg:w-[400px] border   shadow-2xl ">  
        <div className="flex justify-center pt-3"><img className="rounded-md border" width={300} src="../assets/upwork5.png" alt="" /></div>      
        <div className="card-body">
          <div className="card-title">Aplikasi Calculator</div>
          Ini adalah Aplikasi Calculator dengan Reactjs
          <a className="btn btn-warning" href={situs[1]}>kunjungi </a>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default About;
