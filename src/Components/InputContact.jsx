function InputContact({ descripcion, tipo, altura }) {
    return (
        <input type={tipo} name="" id="" placeholder={descripcion} className="w-full p-3 bg-[#222222] text-[#ffffff] mb-4" style={{height:altura}}/>
    );
}

export default InputContact;