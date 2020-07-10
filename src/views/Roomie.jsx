import React from 'react';
import '../styles/components/Roomie'


const Roomie = () => {
  return (
    <React.Fragment>
      <main className="principal">
    <article className="principal__room">
      <figure className="room__image">
        <img src="./img/roberto-nickson-oQ56kobbYLM-unsplash (1).png" alt=""></img>
      </figure>
      <figure className="image__center-top">
        <img src="./img/roberto-nickson-oQ56kobbYLM-unsplash (1).png" alt=""></img>
      </figure>
      <figure className="image__center-bottom">
        <img src="./img/christian-lambert-hlOpCML8twI-unsplash (1).png" alt=""></img>
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
            <img src="./img/monitor.png" alt=""></img>
            <img src="./img/gimnasio.png" alt=""></img>
            <img src="./img/dispositivo-de-juego.png" alt=""></img>
            <img src="./img/guitarra-electrica.png" alt=""></img>
          </figure>
        </article>
        
        <article className="container__user-contact">
          <h3>Contactame</h3>
          <figure>
            <img src="./img/correo.png" alt=""></img>
            <img src="./img/whatsapp.png" alt=""></img>
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
            <img src="./img/wifi.png" alt=""></img>
            <img src="./img/botella-de-pet.png" alt=""></img>
            <img src="./img/fumar.png" alt=""></img>
            <img src="./img/departamento.png" alt=""></img>
            <img src="./img/cama.png" alt=""></img>
          </figure>
        </div>
      </article>
    </div>
  </main>
    
    </React.Fragment>
  );
};

export default Roomie;