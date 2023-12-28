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

function App() {
  const [selected, setSelected] = React.useState("all");
  const colors = [
    "secondary"
  ];

  return (
    <>
      <div className="body">
        {/* <--------------------------------------- Menú ---------------------------------------> */}
        <Navbar classNames="navbar" id="navbar">
          <NavbarBrand>
            <p className="titulo font-bold">SILVIA</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3" justify="end">
            <NavbarItem className="navbarItem">
              <Link className="link" href="#navbar">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem className="navbarItem">
              <Link className="link" href="#about">
                About
              </Link>
            </NavbarItem>
            <NavbarItem className="navbarItem">
              <Link className="link" href="#service">
                Service
              </Link>
            </NavbarItem>
            <NavbarItem className="navbarItem">
              <Link className="link" href="#portfolio">
                Portfolio
              </Link>
            </NavbarItem>
            <NavbarItem className="navbarItem">
              <Link className="link" href="#testimonials">
                Testimonials
              </Link>
            </NavbarItem>
            <NavbarItem className="navbarItem">
              <Link className="link" href="#blogs">
                Blogs
              </Link>
            </NavbarItem>
            <NavbarItem className="navbarItem">
              <Link className="link" href="#contact">
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>

        {/* <--------------------------------------- Contenedor principal ---------------------------------------> */}
        <div className="contenedor">

          {/* <--------------------------------------- Primer bloque/información básica ---------------------------------------> */}
          <div className="flex container">
            <div className="flex flex-col w-1/2 texto">
              <h2 className="titulo2">
                Hi There!
              </h2>
              <h1 className="titulo3 font-bold">
                I Am a
              </h1>
              <p className="parrafo1">
                Creative Web Developer Offering 4+ Years Of Experience Providing High-Impact Web Solutions For Many Diferrent Organizations.
              </p>
              <ButtonIcon description="About Me" icon="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" href="#container2" />
            </div>
            <div className="flex flex-col w-1/2 divImagen">
              <img className="imagen" src="https://elora.asdesignsgalaxy.com/assets/images/Home/Home-Image.png" alt="" />
            </div>
          </div>

          {/* <--------------------------------------- Segundo bloque, información completa ---------------------------------------> */}
          <div className="flex container2" id="container2">
            <div className="image w-1/3">
              <img className="img" src="https://elora.asdesignsgalaxy.com/assets/images/About/About-Image.png" alt="" />
            </div>
            <div className="information w-2/3">
              <h2 className="name font-bold">
                My name is Silvia.
              </h2>
              <p className="about">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, saepe at! Culpa reiciendis aperiam doloribus laudantium voluptates itaque labore consectetur nulla atque praesentium harum, quis esse veritatis beatae quisquam et.
              </p>

              {/* <--------------------------------------- Contenedor derecho ---------------------------------------> */}
              <div className="flex">
                <div className="info w-1/3">
                  <p className="info-personal"><strong>Age: </strong>18</p>
                  <p className="info-personal"><strong>Gender: </strong>Female</p>
                  <p className="info-personal"><strong>Language: </strong>Spanish</p>
                  <p className="info-personal"><strong>Work: </strong>Back-end/Front-end Developer</p>
                  <p className="info-personal"><strong>Freelance: </strong>Available</p>
                  <ButtonIcon description="Download CV" icon="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </div>

                {/* <--------------------------------------- Detalles de cantidades ---------------------------------------> */}
                <div className="w-1/3 detail">
                  <Details limite={1} tiempo={100} description="Years Of Experience" />
                  <Details limite={50} tiempo={100} description="Happy Clients" />
                </div>
                <div className="w-1/3 detail2">
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
              <div className="w-1/2">
                <ProgressPorcent descripcion="C#" porcentaje={95} />
                <ProgressPorcent descripcion="HTML5" porcentaje={85} />
                <ProgressPorcent descripcion="CSS3" porcentaje={80} />
                <ProgressPorcent descripcion="JavaScript" porcentaje={70} />
                <ProgressPorcent descripcion="Python" porcentaje={50} />
              </div>
              <div className="w-1/2">
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
                  <Tab key="all" title="All" className="tab-item">
                    <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
                      <CardInformation titulo="Web Development" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-1.png" />
                      <CardInformation titulo="Web Development" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-2.png" />
                      <CardInformation titulo="Graphic Design" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-3.png" />
                      <CardInformation titulo="Graphic Design" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-4.png" />
                      <CardInformation titulo="Photography" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-5.png" />
                      <CardInformation titulo="Photography" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-6.png" />
                    </div>
                  </Tab>
                  <Tab key="web" title="Web Development" className="tab-item">
                    <div className="gap-2 grid grid-cols-2 sm:grid-cols-2">
                      <CardInformation titulo="Web Development" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-1.png" />
                      <CardInformation titulo="Web Development" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-2.png" />
                    </div>
                  </Tab>
                  <Tab key="graphic" title="Graphic Design" className="tab-item">
                    <div className="gap-2 grid grid-cols-2 sm:grid-cols-2">
                      <CardInformation titulo="Graphic Design" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-3.png" />
                      <CardInformation titulo="Graphic Design" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-4.png" />
                    </div>
                  </Tab>
                  <Tab key="photography" title="Photography" className="tab-item">
                    <div className="gap-2 grid grid-cols-2 sm:grid-cols-2">
                      <CardInformation titulo="Photography" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-5.png" />
                      <CardInformation titulo="Photography" imagen="https://elora.asdesignsgalaxy.com/assets/images/Portfolio/portfolio-6.png" />
                    </div>
                  </Tab>
                </Tabs>
              ))}
            </center>
          </div>

          {/* <--------------------------------------- Testimonios ---------------------------------------> */}
          <div className="container-test" id="testimonials">
            <HeadingTitle descripcion2="Testimonials" />
          </div>

          {/* <--------------------------------------- Información blogs ---------------------------------------> */}
          <div className="container-blog" id="blogs">
            <HeadingTitle descripcion="My" descripcion2=" Blog" />
          </div>

          {/* <--------------------------------------- Forma de contacto ---------------------------------------> */}
          <div className="container-contacto" id="contact">
            <HeadingTitle descripcion="Contact" descripcion2=" Me" />

            <div className="flex">
              <div className="w-1/2">
                <h2 className="titulo4 font-bold">
                  Get In Touch
                </h2>
                <p className="parrafo4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <Contacto titulo="Phone:" parrafo1=" +123-456-789" parrafo2=" +111-444-777"  icon="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" icon2="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                <Contacto titulo="Email:" parrafo1=" abc@gmail.com" parrafo2=" yxz@gmail.com"  icon="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" icon2="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                <Contacto titulo="LinkedIn:" parrafo1="http://www.linkedin.com/"  icon="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"/>
                <Contacto titulo="GitHub:" parrafo1="https://github.com/"  icon="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
              </div>
              <div className="w-1/2">
                {/* <InputContact descripcion="Name"/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
