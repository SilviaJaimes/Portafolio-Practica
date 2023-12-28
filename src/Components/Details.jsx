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
    <div className="num">
            <h2 className="cant font-bold">
                {experiencia}+
            </h2>
            <p className="details font-bold">
                {description}
            </p>
        </div>
  );
};

export default Details;