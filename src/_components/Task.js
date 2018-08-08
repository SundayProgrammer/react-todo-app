import React from 'react';
import {
  Container
} from 'reactstrap';
import './Task.css';

const Task = ({ task }) => {
  const { title, priority, project, category, comment } = task;

  const colorOptions = [
    'LightSkyBlue',
    'DodgerBlue ',
    'MidnightBlue'
  ];

  const priorityColor = colorOptions[priority];
  var priorityStyle = {
    'border-color': priorityColor
  }
  // LightSkyBlue

  return (
    <div>
      <Container>
        <div className="row hover-class">
          <table className="item_table">
            <tbody>
              <tr>
                <td>
                  <div class="first-div" style={priorityStyle}></div>
                </td>
                <td>
                  <div class="second-div">
                    <div class="title">{title}</div>
                    <div class="category">{category}</div>
                  </div>
                </td>
                <td>
                  <div className="hover-comment">
                    <svg-icon><src href="../_icons/si-glyph-bubble-message.svg" /></svg-icon>
                  </div>
                </td>
                <td>
                  <div class="third-div">
                    <div>
                      {project}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="hover-edit">
                    <svg-icon><src href="../_icons/si-glyph-pencil.svg" /></svg-icon>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
{/*
          <div class="div-handler"></div>

          <div class="second-div">
            <div class="title">{title}</div>
            <div class="category">{category}</div>
          </div>
          <div className="hover-comment">
            <svg-icon><src href="../_icons/si-glyph-bubble-message.svg" /></svg-icon>
          </div>
          <div class="third-div">
            <div>
              {project}
            </div>
          </div>
          <div className="hover-edit">
            <svg-icon><src href="../_icons/si-glyph-pencil.svg" /></svg-icon>
          </div>
          <div style={{clear: 'both'}}></div> */}

        </div>
      </Container>
    </div>
  );
}

export { Task };
