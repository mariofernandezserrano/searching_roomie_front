import React from 'react';

import '../styles/components/Account.scss'

//----------IMAGES DESCRIPTION ACCOUNT----------//

import InfoUserLine1 from '../assets/images/line.svg';
import RoomieAccount from '../assets/images/roomie-acount.svg';



const Account = () => {
  return (
    <React.Fragment>
      <main>
        <div class="container">
          <section class="tittle">
            <img src={InfoUserLine1} alt=""></img>
              <h1>Cuenta</h1>
          </section>
          <section class="info-user">
            <img class="info-user__line" src={InfoUserLine1} alt=""></img>
            <h2>INFORMACIÒN PERSONAL</h2>
              <form action=" ">
                <p>Nombre completo</p>
                <input type="text" placeholder="   Nombre completo"></input>
                <p>Correo electrònico</p>
                <input type="text" placeholder="   Correo electrònico"></input>
                <p>Numero de telèfono</p>
                <input type="text" placeholder="   Numero de telèfono"></input>
                <p>Fecha de nacimiento</p>
                <input type="text" placeholder="   Fecha de nacimiento"></input>
                <p>Sexo</p>
                <input type="checkbox" name="checkbox" id="Hombre"></input>
                <label for="Hombre">Hombre</label>
                <input type="checkbox" name="checkbox" id="Mujer"></input>
                <input type="checkbox" name="checkbox" id="Otro"></input>
                <label for="Otro">Otro</label>
              </form>
          </section>
          <section class="profile">
            <img class="info-user__line" src={InfoUserLine1} alt=""></img>
            <h2>AGREGAR FOTO DE PERFIL</h2>
            <section class="profile__photo">
              <img src={RoomieAccount} alt=""></img>
            <button>
              <a href="/">Adjuntar foto</a>
            </button>
            </section>
          </section>
          <section class="save-changes">
            <button>
            <a href="/">Guardar cambios</a>
            </button>
          </section>
        </div>
      </main>
</React.Fragment>
);
};

export default Account;