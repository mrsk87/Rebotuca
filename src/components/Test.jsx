import React from "react";
import slid1 from "../assets/img/design-de-games.jpg";
import slid2 from "../assets/img/design-de-interiores.jpg";
import slid3 from "../assets/img/coffe.jpg";

function Test() {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img class="d-block w-100" src={slid1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={slid2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={slid3} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}
export default Test;
