import React, { useState } from "react";
import api from "../api";

const Hotels = () => {
  const [hotels, setHotels] = useState(api.hotels.fetchAll());

  return (
    <>
      <h1>Все отели Марса</h1>
      <div className="d-flex flex-wrap">
        {hotels.map((hotel) => (
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.unsplash.com/photo-1573551461515-4c44d140a829?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1131&q=80"
              className="card-img-top"
              alt="htht"
            />
            <div className="card-body">
              <p className="card-text">{hotel.name}</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hotels;
