function CardInformation({imagen, titulo}) {
    return (
        <div className="card-info relative">
            <img src={imagen} alt="" className="imagen-info" />
            <div className="container-info absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-80 p-4" style={{ width: '330px', borderRadius: '10px' }}>
                <h2 className="titulo3 font-bold text-2xl text-[#BC8CF2]">{titulo}</h2>
                <p className="parrafo-info text-[17px] text-[#ffffff] pt-[1%]">Category</p>
                <center>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 svg-lupa text-[#BC8CF2] mt-[5%]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                    </svg>
                </center>
            </div>
        </div>
    );
}

export default CardInformation;