function HeadingTitle({descripcion, descripcion2}){
    return(
        <div className="heading">
            <h2 className="part1 font-bold">
              {descripcion}
              <span className="part2"> {descripcion2}</span>
            </h2>
          </div>
    );
}

export default HeadingTitle;