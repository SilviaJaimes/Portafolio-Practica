import { Progress } from "@nextui-org/react";

function ProgressPorcent({descripcion, porcentaje}) {
    return(
        <div className="skill text-[#ffffff]">
            <Progress 
                aria-label="Loading..." 
                label={descripcion}
                showValueLabel={true} 
                value={porcentaje} 
                color="secondary"
                className="max-w-full progress text-[17px]"/>
        </div>
    );
}

export default ProgressPorcent;