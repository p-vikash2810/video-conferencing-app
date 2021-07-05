import React from "react";
import FormInput from "../form-input/form-input.component";
import "./Room.scss";
import FormRadioButton from "../form-radio-button/form-radio-button.component";

import { FaMicrophone, FaVideo } from "react-icons/fa";
import CustomButton from "../custom-button/custom-button.component";

class Room extends React.Component {
  constructor() {
    super();
    this.state = {
      roomId: "",
      roomPin: "",
      optRoom: "enter",
      roomName: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      console.log(this.state.optRoom);
    });
  };

  mesiboApi = (e) => {
    e.preventDefault();
    fetch(" https://api.mesibo.com/api.php?op=vikash").then((res) =>
      console.log(res)
    );
  };
  render() {
    console.log(this.state.roomId);
    console.log(this.state.roomPin);
    // console.log(this.state.optRoom);
    return (
      <div className="roomSec">
        <div className="room-body">
          <h1 className="room-header">Conference Room</h1>
          <div className="radio-button-section">
            <FormRadioButton
              handleChange={this.handleChange}
              label="Enter Existing Room"
              value="enter"
              name="optRoom"
            />

            <FormRadioButton
              handleChange={this.handleChange}
              label="Create New Room"
              value="create"
              name="optRoom"
              // subLabel=""
            />
          </div>

          {this.state.optRoom === "enter" ? (
            <div className="input-section">
              <FormInput
                type="number"
                name="roomId"
                value={this.state.roomId}
                handleChange={this.handleChange}
                label="Enter Room-ID"
                required
              />

              <FormInput
                type="number"
                name="roomPin"
                value={this.state.roomPin}
                handleChange={this.handleChange}
                label="Enter Pin"
                required
              />
            </div>
          ) : (
            <div className="input-section">
              <FormInput
                type="text"
                name="roomName"
                value={this.state.roomName}
                handleChange={this.handleChange}
                label="Room Name"
                required
              />

              <div className="resolution-section">
                <FormRadioButton
                  handleChange={this.handleChange}
                  label="Default"
                  value="Default"
                  name="optResolution"
                />
                <FormRadioButton
                  handleChange={this.handleChange}
                  label="Standard"
                  subLabel="640x480"
                  value="Standard"
                  name="optResolution"
                />
                <FormRadioButton
                  handleChange={this.handleChange}
                  label="HD"
                  subLabel="640x480"
                  value="HD"
                  name="optResolution"
                />
                <FormRadioButton
                  handleChange={this.handleChange}
                  label="Full HD"
                  subLabel="1920x1080"
                  value="Full HD"
                  name="optResolution"
                />
                <FormRadioButton
                  handleChange={this.handleChange}
                  label="4K"
                  subLabel="3840x2160"
                  value="4K"
                  name="optResolution"
                />
                <FormRadioButton
                  handleChange={this.handleChange}
                  label="QVGA"
                  subLabel="320x240"
                  value="QVGA"
                  name="optResolution"
                />
              </div>
            </div>
          )}

          <div className="media-control-section">
            <FaMicrophone
              style={{ width: "30px", height: "30px", color: "green" }}
            />
            <FaVideo
              style={{ width: "30px", height: "30px", color: "green" }}
            />
          </div>

          <div className="buttons-section">
            <CustomButton type="button">Enter Room</CustomButton>
            <CustomButton type="button">My Room</CustomButton>
            <CustomButton type="button">Logout</CustomButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Room;
