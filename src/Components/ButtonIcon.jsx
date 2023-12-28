import { Button } from "@nextui-org/react";

function ButtonIcon({ description, icon, href }) {
    return (
        <a href={href}>
            <Button className="boton1">
                {description}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon}/>
                </svg>
            </Button>
        </a>
    );
}

export default ButtonIcon;