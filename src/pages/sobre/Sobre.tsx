import React, { useContext } from "react";
import "./Sobre.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Sobre() {
  return (
    <div>
      <div>
        <h1 className="flex bg-gray-200 p-3 rounded shadow-md gap-4 items-center flex-col font-bold text-red-700">
          Sobre
        </h1>
      </div>
      <div>
        <h2 className="m-9">
          A FireFern, fundada em agosto de 2024, é uma empresa dedicada ao
          desenvolvimento de soluções tecnológicas para combater o desmatamento.
          Nosso principal objetivo é criar uma aplicação inovadora que monitora
          áreas de desmatamento e oferece respostas rápidas e eficazes para
          mitigar esse problema ambiental. Combinando tecnologia de ponta e um
          profundo compromisso com a sustentabilidade, buscamos preservar os
          ecossistemas e promover a conservação ambiental.
        </h2>
      </div>
      <hr className="flex border-slate-800 w-80 mx-auto " />
      <div>
        <h1 className="flex p-3 items-center flex-col font-bold text-red-700">
          Time de Desenvolvedores
        </h1>
        <div className="mx-10 my-7">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
                <div className="flex bg-gray-200 p-10 rounded shadow-md gap-4 items-center flex-col container mx-auto md:w-96">
                <img src={"https://github.com/danielthx23.png"} alt="" className="w-24 h-24 rounded-full" />
                <p>Daniel Saburo Akiyama </p>
                <p className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/daniel-akiyama/"
                    target="blank"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/joaopguima" target="blank">
                    <FaGithub />
                  </a>
                </p>
              </div></SwiperSlide>
            <SwiperSlide>
              <div className="flex bg-gray-200 p-10 rounded shadow-md gap-4 items-center flex-col container mx-auto mx-auto md:w-96">
                <img src={"https://github.com/joaopguima.png"} alt="" className="w-24 h-24 rounded-full" />
                <p>João Pedro Guimarães</p>
                <p className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/joaopguima/"
                    target="blank"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/joaopguima" target="blank">
                    <FaGithub />
                  </a>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex bg-gray-200 p-10 rounded shadow-md gap-4 items-center flex-col container mx-auto mx-auto md:w-96">
                <img src={"https://github.com/Leogb2014.png"} alt="" className="w-24 h-24 rounded-full" />
                <p>Leonardo Gobetti</p>
                <p className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/leonardo-gobetti/"
                    target="blank"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/Leogb2014" target="blank">
                    <FaGithub />
                  </a>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="flex bg-gray-200 p-10 rounded shadow-md gap-4 items-center flex-col container mx-auto mx-auto md:w-96">
                <img src={"https://github.com/Sara-Vasconcelos.png"} alt="" className="w-24 h-24 rounded-full" />
                <p>Sara Vasconcelos</p>
                <p className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/sara-vasconcelos-freitas-souza/"
                    target="blank"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/Leogb2014" target="blank">
                    <FaGithub />
                  </a>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
