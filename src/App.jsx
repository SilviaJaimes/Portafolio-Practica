import React from "react";
import './index.css';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";
import ButtonIcon from "./Components/ButtonIcon";
import Details from "./Components/Details";
import HeadingTitle from "./Components/HeadingTitle";
import ProgressPorcent from "./Components/ProgressPorcent";
import CardComponent from "./Components/CardComponent";
import CardInformation from "./Components/CardInformation";
import Contacto from "./Components/Contacto";
import InputContact from "./Components/InputContact";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function App() {
  const [selected, setSelected] = React.useState("all");
  const colors = [
    "secondary"
  ];

  const [text]= useTypewriter({
    words: ['Developer'],
    loop: {},
  });

  return (
    <>
      <div className="body">
        {/* <--------------------------------------- Menú ---------------------------------------> */}
        <Navbar classNames="navbar" id="navbar">
          <NavbarBrand>
            <p className="titulo font-bold text-2xl text-[#BC8CF2]">SILVIA</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3" justify="end">
            <NavbarItem className="navbarItem">
              <Link className="link text-lg text-[#ffffff]" href="#home">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem className="navbarItem">
              <Link className="link text-lg text-[#ffffff]" href="#about">
                About
              </Link>
            </NavbarItem>
            <NavbarItem className="navbarItem">
              <Link className="link text-lg text-[#ffffff]" href="#service">
                Service
              </Link>
            </NavbarItem>
            <NavbarItem className="navbarItem">
              <Link className="link text-lg text-[#ffffff]" href="#portfolio">
                Portfolio
              </Link>
            </NavbarItem>
            <NavbarItem className="navbarItem">
              <Link className="link text-lg text-[#ffffff]" href="#blogs">
                Blogs
              </Link>
            </NavbarItem>
            <NavbarItem className="navbarItem">
              <Link className="link text-lg text-[#ffffff]" href="#contact">
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>

        {/* <--------------------------------------- Contenedor principal ---------------------------------------> */}
        <div className="contenedor">

          {/* <--------------------------------------- Primer bloque/información básica ---------------------------------------> */}
          <div className="flex container" id="home">
            <div className="flex flex-col w-1/2 texto">
              <h2 className="titulo2 text-2xl text-[#BC8CF2] pt-[18%]">
                Hi There!
              </h2>

              {/* <--------------------------------------- Cursor ---------------------------------------> */}
              <h1 className="titulo3 text-5xl font-bold text-[#BC8CF2]">
                I am a {" "}
                <span>
                  {text}
                </span>
                <Cursor/>
              </h1>
              <p className="parrafo1 text-[17px] text-[#ffffff] pt-[1%]">
                Creative Web Developer Offering 4+ Years Of Experience Providing High-Impact Web Solutions For Many Diferrent Organizations.
              </p>
              <ButtonIcon description="About Me" icon="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" href="#container2" />
            </div>
            <div className="flex flex-col w-1/2 divImagen pl-[10%]">
              <img className="imagen" src="https://elora.asdesignsgalaxy.com/assets/images/Home/Home-Image.png" alt="" />
            </div>
          </div>

          {/* <--------------------------------------- Segundo bloque, información completa ---------------------------------------> */}
          <div className="flex container2 mt-[8%]" id="container2">
            <div className="image w-1/3">
              <img className="img" src="https://elora.asdesignsgalaxy.com/assets/images/About/About-Image.png" alt="" />
            </div>
            <div className="information w-2/3 ml-[-4%]">
              <h2 className="name text-3xl font-bold text-[#ffffff]">
                My name is Silvia.
              </h2>
              <p className="about text-[17px] text-[#ffffff] pt-[1%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, saepe at! Culpa reiciendis aperiam doloribus laudantium voluptates itaque labore consectetur nulla atque praesentium harum, quis esse veritatis beatae quisquam et.
              </p>

              {/* <--------------------------------------- Contenedor derecho ---------------------------------------> */}
              <div className="flex">
                <div className="info text-[17px] w-1/3 text-[#ffffff] pt-[1%]">
                  <p className="info-personal mt-[1%]"><strong>Age: </strong>18</p>
                  <p className="info-personal mt-[1%]"><strong>Gender: </strong>Female</p>
                  <p className="info-personal mt-[1%]"><strong>Language: </strong>Spanish</p>
                  <p className="info-personal mt-[1%]"><strong>Work: </strong>Back-end/Front-end Developer</p>
                  <p className="info-personal mt-[1%]"><strong>Freelance: </strong>Available</p>
                  <ButtonIcon description="Download CV" icon="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </div>

                {/* <--------------------------------------- Detalles de cantidades ---------------------------------------> */}
                <div className="w-1/3 detail ml-[10%]">
                  <Details limite={1} tiempo={100} description="Years Of Experience" />
                  <Details limite={50} tiempo={100} description="Happy Clients" />
                </div>
                <div className="w-1/3 detail2 ml-[2%]">
                  <Details limite={15} tiempo={100} description="Projects Completed" />
                  <Details limite={2} tiempo={100} description="Awards won" />
                </div>
              </div>
            </div>
          </div>

          {/* <--------------------------------------- Conocimientos ---------------------------------------> */}
          <div className="container-skills" id="about">
            <HeadingTitle descripcion="My" descripcion2=" Skills" />

            <div className="flex">
              <div className="w-1/2 pr-10">
                <ProgressPorcent descripcion="C#" porcentaje={95} />
                <ProgressPorcent descripcion="HTML5" porcentaje={85} />
                <ProgressPorcent descripcion="CSS3" porcentaje={80} />
                <ProgressPorcent descripcion="JavaScript" porcentaje={70} />
                <ProgressPorcent descripcion="Python" porcentaje={50} />
              </div>
              <div className="w-1/2 pr-10">
                <ProgressPorcent descripcion="MySQL" porcentaje={80} />
                <ProgressPorcent descripcion="MongoDB" porcentaje={65} />
                <ProgressPorcent descripcion="Angular" porcentaje={50} />
                <ProgressPorcent descripcion="React" porcentaje={70} />
                <ProgressPorcent descripcion="Bootstrap" porcentaje={90} />
              </div>
            </div>
          </div>

          {/* <--------------------------------------- Información de servicios ---------------------------------------> */}
          <div className="container-services" id="service">
            <HeadingTitle descripcion="My" descripcion2=" Services" />

            <div className="gap-5 grid grid-cols-2 sm:grid-cols-3">
              <CardComponent titulo="Web Design" descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure consequatur ipsa." icon="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              <CardComponent titulo="Graphic Design" descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure consequatur ipsa." icon="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
              <CardComponent titulo="Photography" descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure consequatur ipsa." icon="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" icon2="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
              <CardComponent titulo="Digital Marketing" descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure consequatur ipsa." icon="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
              <CardComponent titulo="Video Editing" descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure consequatur ipsa." icon="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
              <CardComponent titulo="SEO Marketing" descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure consequatur ipsa." icon="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </div>
          </div>

          {/* <--------------------------------------- Portafolio ---------------------------------------> */}

          <div className="container-portfolio" id="portfolio">
            <HeadingTitle descripcion="My" descripcion2=" Portfolio" />

            <center>
              {/* <--------------------------------------- Tabs ---------------------------------------> */}
              {colors.map((color) => (
                <Tabs
                  key={color}
                  color={color}
                  radius="full"
                  className="tab-principal"
                  aria-label="Options"
                  selectedKey={selected}
                  onSelectionChange={setSelected}>
                  <Tab key="all" title="All" className="tab-item text-lg">
                    <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
                      <CardInformation titulo="Web Development" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-1.png" />
                      <CardInformation titulo="Web Development" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-2.png" />
                      <CardInformation titulo="Graphic Design" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-3.png" />
                      <CardInformation titulo="Graphic Design" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-4.png" />
                      <CardInformation titulo="Photography" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-5.png" />
                      <CardInformation titulo="Photography" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-6.png" />
                    </div>
                  </Tab>
                  <Tab key="web" title="Web Development" className="tab-item text-xl">
                    <div className="gap-2 grid grid-cols-2 sm:grid-cols-2">
                      <CardInformation titulo="Web Development" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-1.png" />
                      <CardInformation titulo="Web Development" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-2.png" />
                    </div>
                  </Tab>
                  <Tab key="graphic" title="Graphic Design" className="tab-item text-xl">
                    <div className="gap-2 grid grid-cols-2 sm:grid-cols-2">
                      <CardInformation titulo="Graphic Design" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-3.png" />
                      <CardInformation titulo="Graphic Design" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-4.png" />
                    </div>
                  </Tab>
                  <Tab key="photography" title="Photography" className="tab-item text-xl">
                    <div className="gap-2 grid grid-cols-2 sm:grid-cols-2">
                      <CardInformation titulo="Photography" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-5.png" />
                      <CardInformation titulo="Photography" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-6.png" />
                    </div>
                  </Tab>
                </Tabs>
              ))}
            </center>
          </div>

          {/* <--------------------------------------- Información blogs ---------------------------------------> */}
          <div className="container-blog" id="blogs">
            <HeadingTitle descripcion="My" descripcion2=" Blog" />
          </div>

          {/* <--------------------------------------- Forma de contacto ---------------------------------------> */}
          <div className="container-contacto pb-[5%] mb-0" id="contact">
            <HeadingTitle descripcion="Contact" descripcion2=" Me" />

            <div className="flex">
              <div className="w-1/2">
                <h2 className="titulo4 font-bold text-3xl text-[#ffffff]">
                  Get In Touch
                </h2>
                <p className="parrafo4 text-[#ffffff] text-[17px] pt-[1%]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <Contacto titulo="Phone:" parrafo1="+57 316 2549650"  icon="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" icon2="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                <Contacto titulo="Email:" parrafo1="jaimessilvia338@gmail.com" parrafo2="silviajaimes615@gmail.com"  icon="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" icon2="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                <Contacto titulo="LinkedIn:" parrafo1="http://www.linkedin.com/in/silvia-jaimes-c"  icon="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"/>
                <Contacto titulo="GitHub:" parrafo1="https://github.com/SilviaJaimes"  icon="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"/>
              </div>
              <div className="w-1/2">
                <InputContact descripcion="Name" tipo="text" />
                <InputContact descripcion="Email" tipo="text"/>
                <InputContact descripcion="Subject" tipo="text"/>
                <InputContact descripcion="Message" tipo="text" altura="135px"/>
                <ButtonIcon description="Send message"/>
              </div>
            </div>
          </div>

          {/* <--------------------------------------- Redes sociales y contacto ---------------------------------------> */}
          <div className="text-center pb-[2%] pt-[3%] bg-[#BC8CF2]">
            <div className="item flex justify-center gap-6">
              <a href="https://www.instagram.com/silviajaimesc/" target="_blank" >
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
              </a>
              <a href="https://www.facebook.com/silvia.jaimes.372661/?locale=es_LA" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512">
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                </svg>
              </a>
              <a href="http://www.linkedin.com/in/silvia-jaimes-c" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 448 512">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
              </a>
              <a href="https://github.com/SilviaJaimes" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                </svg>
              </a>
            </div>
            <p className="parrafo-redes text-[#ffffff] text-xl mt-[2%]">
              Created by<span className="contacto-span text-[#000]"> Silvia</span> | All rights reserved
            </p>
          </div>
        </div>
      </div>

      
    </>
  )
}

export default App
