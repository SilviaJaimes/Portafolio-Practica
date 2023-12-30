function Contacto({ titulo, parrafo1, parrafo2, icon, icon2 }) {
    return (
        <div>
            <h4 className="subtitulo font-bold text-xl text-[#ffffff]">
                {titulo}
            </h4>
            <p className="parrafo4 text-[17px] text-[#ffffff]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svg-contact text-[#BC8CF2]">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg>
                {parrafo1}
            </p>

            {parrafo2 && <p className="parrafo4 text-[17px] text-[#ffffff]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svg-contact text-[#BC8CF2]">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon2} />
                </svg>
                {parrafo2}
            </p>}
        </div>
    );
}

export default Contacto;