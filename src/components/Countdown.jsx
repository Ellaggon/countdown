import { useEffect, useState } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    dias: "00",
    horas: "00",
    minutos: "00",
    segundos: "00",
  });
  
  const date = "Jan, 1, 2024 00:00:00";
  
  useEffect(() => {
    const countdownTempo = setInterval(() => {
      const countdownDate = new Date(date).getTime();
      let now = new Date().getTime();
      let rest = countdownDate - now;
    
      let days = (Math.floor(rest / (1000*60*60*24)));
      let hour = ("0" + Math.floor(rest % (1000*60*60*24)/(1000*60*60) )).slice(-2);
      let min = ("0" + Math.floor(rest % (1000*60*60)/(1000*60) )).slice(-2);
      let sec = ("0" + Math.floor(rest % (1000*60)/(1000))).slice(-2);

      setCountdown({
        dias: days,
        horas: hour,
        minutos: min,
        segundos: sec,
      })
      
    }, 1000);
  
    return () => {
      countdownTempo
    }
  }, [date])

  return (
    <section className="flex justify-end">
      <article
        className="bg-cover bg-center bg-no-repeat h-screen w-full"
        style={{ backgroundImage: "url('/images/copyMoon.jpeg')" }}
      >
        {}
        <div className="text-white w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-55">
          <h1 className="text-5xl font-extrabold">Countdown</h1>
          <h3>Faltan {countdown.dias} dias, {countdown.horas} horas, {countdown.minutos} minutos, {countdown.segundos} segundos para...</h3>
          <h2>2024</h2>
        </div>
      </article>
    </section>
  );
};

export default Countdown;
