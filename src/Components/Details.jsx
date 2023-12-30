import React, { useState, useEffect } from 'react';

const Details = ({limite, tiempo, description}) => {
  const [experiencia, setExperiencia] = useState(0);

  useEffect(() => {
    const incrementarExperiencia = () => {
      setExperiencia((prevExperiencia) => {
        if (prevExperiencia >= limite) {
          clearInterval(intervalo);
          return prevExperiencia;
        }
        return prevExperiencia + 1;
      });
    };

    const intervalo = setInterval(incrementarExperiencia, tiempo);
    return () => clearInterval(intervalo);
  }, []); 

  return (
    <div className="num p-[6%]">
            <h2 className="cant font-bold text-4xl text-[#BC8CF2]">
                {experiencia}+
            </h2>
            <p className="details font-bold text-xl text-[#ffffff]">
                {description}
            </p>
        </div>
  );
};

export default Details;