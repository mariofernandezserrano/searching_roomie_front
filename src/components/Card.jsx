import React from 'react';
import Style from '../styles/components/Card.scss';

const Card = () => {
  return (
    <section className="principal">
      <div>
        <div className="line"></div>
        <h2>Alojamientos populares</h2>
      </div>
      <div className="principal__rooms-card">
        <div className="room-card">
          <div>
            <figure>
              <img src="https://images.ctfassets.net/8lc7xdlkm4kt/6bYolzLQSPgZawCDlHb9qr/ca35368f17fc3143fe969c9b074a73de/mint-apartamentos-barranquilla-sala.jpg?w=1366&q=100" alt="" ></img>
            </figure>
          </div>
          <div className="description__dept">
            <figure className="img__user">
              <img src="https://t1.pb.ltmcdn.com/es/posts/5/9/7/la_psicologia_de_los_colores_en_las_fotos_de_perfil_3795_1_600.jpg" alt=""></img>
            </figure>
            <article>
              <figure>
                <img src="./images/wifi.png" alt=""></img>
              </figure>
              <figure>
                <img src="./images/botella-de-pet.png" alt=""></img>
              </figure>
              <figure>
                <img src="./images/fumar.png" alt=""></img>
              </figure>
              <figure>
                <img src="./images/departamento.png" alt=""></img>
              </figure>
            </article>
            </div>
        </div>
      </div>
    </section>
  );
}


export default Card;