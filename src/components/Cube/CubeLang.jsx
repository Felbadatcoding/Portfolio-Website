import * as React from 'react';
import './Cube.css'
import Cube from 'react-3d-cube';
import { python, reactjs, tailwind, javascript, html, css} from '../../assets';
 
class LogoCubeLang extends React.Component {
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
                  src={python}
                  alt="Python"
                />
                <p>Python</p>
              </div>
              <div style={{ backgroundColor: "black" }}>
                <img
                  style={{ width: "280px", height: "277px" }}
                  src={tailwind}
                  alt="Tailwind CSS"
                />
                <p>Tailwind CSS</p>
              </div>
              <div style={{ backgroundColor: "black" }}>
                <img
                  style={{ width: "280px", height: "277px" }}
                  src={reactjs}
                  alt="React JS"
                />
                <p>React JS</p>
              </div>
              <div style={{ backgroundColor: "black" }}>
                <img
                  style={{ width: "280px", height: "277px" }}
                  src={javascript}
                  alt="javascript"
                />
                <p>JavaScript</p>
              </div>
              <div style={{ backgroundColor: "black" }}>
                <img
                  style={{ width: "280px", height: "277px" }}
                  src={html}
                  alt="html"
                />
                <p>HTML</p>
              </div>
              <div style={{ backgroundColor: "black" }}>
                <img
                  style={{ width: "280px", height: "277px" }}
                  src={css}
                  alt="css"
                />
                <p>CSS</p>
              </div>
            </Cube>
          </div>
        </div>
      </center>
    );
  }
}
export default LogoCubeLang;