import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //importing css file from react-responsive-carousel
import { Carousel } from "react-responsive-carousel";

class ProductComponent extends React.Component {
  render() {
    return (
      <div className="rowProd">
        <div className="side">
          <Carousel infiniteLoop useKeyboardArrows>
            <div className="image">
              <img src="../images/img_02.jpg" alt="screen" />
            </div>

            <div className="image">
              <img src="../images/img_03.jpg" alt="screen" />
            </div>

            <div className="image">
              <img src="../images/img_04.jpg" alt="screen" />
            </div>

            <div className="image">
              <img src="../images/img_05.jpg" alt="screen" />
            </div>
          </Carousel>
        </div>

        <div className="main">
          <h1>{this.props.data.title}</h1>
          <h2>{this.props.data.name}</h2>
          <br></br>

          <p>
            <tbody>
              <tr>
                <td>Brand:</td>
                <td>{this.props.data.Brand}</td>
              </tr>

              <tr>
                <td> Display Technology:</td>
                <td>{this.props.data.Display_Technology}</td>
              </tr>

              <tr>
                <td>Connectivity Technology:</td>
                <td>{this.props.data.Connectivity_Technology}</td>
              </tr>

              <tr>
                <td>Screen Size:</td>
                <td>{this.props.data.Screen_Size}</td>
              </tr>
            </tbody>
          </p>
        </div>
      </div>
    );
  }
}

export default ProductComponent;
