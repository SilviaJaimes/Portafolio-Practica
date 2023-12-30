function Contacto({ titulo, parrafo1, parrafo2, icon, icon2 }) {
    return (
        <div>
            <h4 className="subtitulo font-bold text-xl text-[#ffffff] mt-[2%]">
                {titulo}
            </h4>
            <p className="parrafo4 text-[17px] text-[#ffffff] pt-[1%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svg-contact mr-[2%]">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} stroke="#BC8CF2"/>
                </svg>
                {parrafo1}
            </p>

            {parrafo2 && <p className="parrafo4 text-[17px] text-[#ffffff] pt-[1%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svg-contact mr-[2%]">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon2} stroke="#BC8CF2"/>
                </svg>
                {parrafo2}
            </p>}
        </div>
    );
}

export default Contacto;