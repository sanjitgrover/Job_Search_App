import React, { Component } from "react";

import TextInputField from "../components/form-elements/TextInputField";
import CheckBoxField from "../components/form-elements/CheckBoxField";
import SelectField from "../components/form-elements/SelectField";
const initialState = {
  title: "Job Title",
  company: "Company Name",
  salary: 0,
  isRemoteFriendly: "",
  location: ""
};
const locationOptions = [
  { value: "", label: "Blank" },
  { value: "London", label: "London" },
  {
    value: "Washington",
    label: "Washington"
  },
  {
    value: "Paris",
    label: "Paris"
  },
  {
    value: "New York",
    label: "New York"
  },
  {
    value: "Berlin",
    label: "Berlin"
  },
  { value: "Rome", label: "Rome" }
];
export default class JobCreationForm extends Component {
  state = initialState;
  onChangeHandler = e => {
    const { type, name, value, checked } = e.target;

    if (type === "checkbox") {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInputField
          name="title"
          label="Title"
          onChange={this.onChangeHandler}
          value={this.state.title}
        />
        <TextInputField
          name="company"
          label="Company"
          onChange={this.onChangeHandler}
          value={this.state.company}
        />
        <TextInputField
          name="salary"
          label="Salary"
          onChange={this.onChangeHandler}
          value={this.state.salary}
        />
        <CheckBoxField
          name="isRemoteFriendly"
          label="Remote Friendly"
          onChange={this.onChangeHandler}
          value={this.state.isRemoteFriendly}
        />
        <SelectField
          name="location"
          label="Location"
          options={locationOptions}
          onChange={this.onChangeHandler}
          value={this.state.location}
        />
        <button>Submit Job</button>
      </form>
    );
  }
}
