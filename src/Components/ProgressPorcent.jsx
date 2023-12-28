import { Progress } from "@nextui-org/react";

function ProgressPorcent({descripcion, porcentaje}) {
    return(
        <div className="skill">
            <Progress 
                aria-label="Loading..." 
                label={descripcion}
                showValueLabel={true} 
                value={porcentaje} 
                color="secondary"
                className="max-w-lg progress"/>
        </div>
    );
}

export default ProgressPorcent;