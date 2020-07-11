import React from 'react';

//----------STYLES ROOMIE----------//

import '../styles/components/Roomie.scss';

//----------IMAGES DESCRIPTION ROOMIE----------//

import ImageRoomie1 from '../assets/images/image_roomie1.png';
import ImageRoomie2 from '../assets/images/image_roomie2.png';
import ImageRoomie3 from '../assets/images/image_roomie3.png';

//----------ICONS USER ROOMIE----------//

import IconBoteella from '../assets/icons/botella-de-pet.png';
import IconCama from '../assets/icons/cama.png';
import IconDepartamento from '../assets/icons/departamento.png';
import IconFumar from '../assets/icons/fumar.png';

//----------ICONS USER----------//

import IconDispositivoDeJuego from '../assets/icons/dispositivo-de-juego.png';
import IconEmail from '../assets/icons/email.png';
import IconGimnasio from '../assets/icons/gimnasio.png';
import IconGuitarra from '../assets/icons/guitarra-electrica.png';
import IconWhatsApp from '../assets/icons/icon_whatsapp.png';
import IconMonitor from '../assets/icons/monitor.png';
import IconWifi from '../assets/icons/wifi.png';


const Roomie = () => {
  return (
    <React.Fragment>
      <main className="principal">
    <article className="principal__room">
      <figure className="room__image">
        <img src={ImageRoomie1} alt=""></img>
      </figure>
      <figure className="image__center-top">
        <img src={ImageRoomie2} alt=""></img>
      </figure>
      <figure className="image__center-bottom">
        <img src={ImageRoomie3} alt=""></img>
        <button className="see-more">Ver más fotos</button>
      </figure>
      <article className="principal__room-user">
        <div className="container__user">
          <figure className="container__user-image">
            <img src="./img/Elipse 1 (1).svg" alt=""></img>
          </figure>
          <h2>Jesus Lagos</h2>
        </div>
        <article className="container__user-why">
          <h3>¿Por qué deberías vivir conmigo?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
        <article className="container__user-roomie">
          <h3>Roomie Ideal</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Eligendi ratione similique est expedita veniam, quis iste dolorem.</p>
        </article>
        <article className="container__user-pleasures">
          <h3>Gustos</h3>
          <figure>
            <img src={IconMonitor} alt=""></img>
            <img src={IconGimnasio} alt=""></img>
            <img src={IconDispositivoDeJuego} alt=""></img>
            <img src={IconGuitarra} alt=""></img>
          </figure>
        </article>
        
        <article className="container__user-contact">
          <h3>Contactame</h3>
          <figure>
            <img src={IconEmail} alt=""></img>
            <img src={IconWhatsApp} alt=""></img>
          </figure>
        </article>
      </article>
    </article>
    <div className="container__description">
      <article className="description">
        <div>
          <div className="line"></div>
          <h2>Sobre el lugar</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere voluptatem distinctio expedita autem cumque velit molestias amet quaerat maxime doloremque provident rem minus qui porro, unde quis ut. Nulla, quasi.</p>
        </div>
      </article>
      <article className="description">
        <div>
          <div className="line"></div>
          <h2>Sobre la zona</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam facere officia explicabo laborum praesentium voluptatibus sapiente tempore tenetur consequatur. Rerum laborum fugiat quidem placeat eligendi, asperiores repellat odio dolor accusamus?</p>
        </div>
      </article>
      <article className="description">
        <div>
          <div className="line"></div>
          <h2>Caracteristicas</h2>
          <figure>
            <img src={IconWifi} alt=""></img>
            <img src={IconBoteella} alt=""></img>
            <img src={IconFumar} alt=""></img>
            <img src={IconDepartamento} alt=""></img>
            <img src={IconCama} alt=""></img>
          </figure>
        </div>
      </article>
    </div>
  </main>
    
    </React.Fragment>
  );
};

export default Roomie;