import React, { Component } from 'react';
import {
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { EditTask } from '../_containers';
import './Task.css';
import commentIcon from '../_icons/si-glyph-bubble-message.svg';
import editIcon from '../_icons/si-glyph-pencil.svg';

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentExpanded: false,
      isEdited: false
    }
  }

  handleCommentClick = () => {
    this.setState({
      commentExpanded: !this.state.commentExpanded
    });
  }

  handleEditClick = () => {
    if (this.state.isEdited === false) {
      this.setState({
        isEdited: !this.state.isEdited
      });
    }
  }

  render() {
    const { title, priority, project, category, comment } = this.props.task;

    const colorOptions = [
      'LightSkyBlue',
      'DodgerBlue ',
      'MidnightBlue'
    ];

    const priorityColor = colorOptions[priority];
    var priorityStyle = {
      'border-color': priorityColor
    }

    return (
      <div>
        { this.state.isEdited
          ? (
            <EditTask task={this.props.task} />
          )
          : (
            <Container>
              <div className="row hover-class">
                <table className="item_table">
                  <tbody>
                    <tr>
                      <td className="item_priority">
                        <div class="first-div" style={priorityStyle}></div>
                      </td>
                      <td className="item_title_category_comment">
                        <div class="second-div">
                          <div class="title">
                            {title}{' '}
                            <img src={commentIcon} className="hover-item comment-icon icon" alt="comment edit icon"
                              onClick={this.handleCommentClick} />
                            </div>
                            <div class="category">{category}</div>
                          </div>
                        </td>
                        <td className="item_project">
                          <div class="third-div">
                            {project}
                          </div>
                        </td>
                        <td className="item_edit">
                          <div className="hover-item">
                            <img src={editIcon} className="comment-icon icon" alt="task edit icon" onClick={this.handleEditClick} />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Container>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isEdited } = state;

  return {
    isEdited
  };
}

const connectedTask = connect(mapStateToProps)(Task);

export { connectedTask as Task };
