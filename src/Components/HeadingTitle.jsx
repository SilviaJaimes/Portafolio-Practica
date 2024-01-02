function HeadingTitle({descripcion, descripcion2}){
    return(
        <div className="heading mb-[4%] text-center bg-[#00000000]">
            <h2 className="part1 font-bold text-4xl text-[#BC8CF2]">
                {descripcion}{" "}
                <span className="part2 text-[#ffffff] border-b-4 border-[#BC8CF2]">{descripcion2}</span>
            </h2>
        </div>
    );
}

export default HeadingTitle;