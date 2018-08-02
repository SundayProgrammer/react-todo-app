import React from 'react';
import {
  Container
} from 'reactstrap';
import './Task.css';

const Task = ({ task }) => {
  const { title, priority, project, category, comment } = task;

  const colorOptions = [
    'White',
    'LightSkyBlue',
    'MidnightBlue'
  ];

  const priorityColor = colorOptions[priority];
  var priorityStyle = {
    background: priorityColor
  }

  return (
    <div>
      <Container>
        <div className="row">
          <div class="div-handler"></div>
          <div class="first-div" style={priorityStyle}></div>
          <div class="second-div">
            <div class="title">{title}</div>
            <div class="category">{category}</div>
          </div>
          <div class="third-div">
            <div>
              {project}
            </div>
          </div>
          <div style={{clear: 'both'}}></div>
        </div>

        <div className="row">
          <div class="div-handler" style={{width: 2 + 'em'}}></div>
          <div class="first-div" style={priorityStyle}></div>
          <div class="second-div">
            <div class="title">{title}</div>
            <div class="category">{category}</div>
          </div>
          <div class="third-div">
            <div>
              {project}
            </div>
          </div>
          <div style={{clear: 'both'}}></div>
        </div>

      </Container>
    </div>
  );
}

export { Task };
