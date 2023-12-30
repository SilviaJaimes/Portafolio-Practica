import { Button } from "@nextui-org/react";

function ButtonIcon({ description, icon, href }) {
    return (
        <a href={href}>
            <Button className="boton1 text-[17px] w-144 text-[#BC8CF2] bg-[#bc8cf200] mt-[3%]">
                {description}
                { icon &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={icon}/>
                    </svg>
                }
            </Button>
        </a>
    );
}

export default ButtonIcon;