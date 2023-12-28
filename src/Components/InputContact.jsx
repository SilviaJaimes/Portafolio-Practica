import {Input} from "@nextui-org/react";

function InputContact({ descripcion }) {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 input1">
            <Input type="email" label={descripcion} />
        </div>
    );
}

export default InputContact;