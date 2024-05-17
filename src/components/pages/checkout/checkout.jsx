import "bootstrap/dist/css/bootstrap.min.css";
import "./Checkout.css";

import React from "react";

const Checkout = ({ info, handleChange, handleSubmit, orderId }) => {
  return (
    <div className="containerStyles">
      {orderId ? (
        <h1>su id es:{orderId}</h1>
      ) : (
        <div>
          <h2>Formulario de Contacto</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                placeholder="Ingrese su nombre"
                value={info.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="tel"
                className="form-control"
                id="telefono"
                name="telefono"
                placeholder="Ingrese su teléfono"
                value={info.telefono}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Ingrese su correo electrónico"
                value={info.email}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
