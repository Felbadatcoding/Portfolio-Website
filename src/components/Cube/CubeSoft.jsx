import * as React from 'react';
import './Cube.css'
import Cube from 'react-3d-cube';
import { figma, git, excel, vsc, imovie, css, xcode} from '../../assets';
 
class LogoCubeSoft extends React.Component {
  render() {
    return (
      <center>
        <div>
          <div
            style={{
              width: 300,
              height: 300,
            }}
          >
            <Cube size={300} index="front">
              <div style={{ backgroundColor: "black" }}>
                <img
                  style={{ width: "280px", height: "277px" }}
                  src={vsc}
                  alt="Visual Studio Code"
                />
                <p>Visual Studio Code</p>
              </div>
              <div style={{ backgroundColor: "black" }}>
                <img
                  style={{ width: "280px", height: "277px" }}
                  src={git}
                  alt="GitHub"
                />
                <p>GitHub</p>
              </div>
              <div style={{ backgroundColor: "black" }}>
                <img
                  style={{ width: "280px", height: "277px" }}
                  src={excel}
                  alt="Microsoft Excel"
                />
                <p>Microsoft Excel</p>
              </div>
              <div style={{ backgroundColor: "black" }}>
                <img
                  style={{ width: "280px", height: "277px" }}
                  src={xcode}
                  alt="Xcode"
                />
                <p>Xcode</p>
              </div>
              <div style={{ backgroundColor: "black" }}>
                <img
                  style={{ width: "280px", height: "277px" }}
                  src={figma}
                  alt="figma"
                />
                <p>Figma</p>
              </div>
              <div style={{ backgroundColor: "black" }}>
                <img
                  style={{ width: "280px", height: "277px" }}
                  src={imovie}
                  alt="iMovie"
                />
                <p>iMovie</p>
              </div>
            </Cube>
          </div>
        </div>
      </center>
    );
  }
}
export default LogoCubeSoft;