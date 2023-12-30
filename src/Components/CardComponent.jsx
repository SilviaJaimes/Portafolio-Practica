import { Card, CardBody } from "@nextui-org/react";

function CardComponent({descripcion, titulo, icon, icon2}) {
    return (
        <Card className="card-principal py-5 px-5 text-[#ffffff]">
            <CardBody className="cards">
                <center>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d={icon}/>
                        <path strokeLinecap="round" strokeLinejoin="round" d={icon2}/>
                    </svg>
                </center>
                <h4 className="font-bold text-xl title2">{titulo}</h4>
                <p className="parrafo-card text-[17px] text-[#ffffff] pt-[1%]">{descripcion}</p>
            </CardBody>
        </Card>
    );
}

export default CardComponent;