import React, { Component } from "react";
import ReactDOM from "react-dom";

import jobs from "./data/Jobs";
import JobItem from "./components/JobListElement/SimpleJobElement";
import JobCreationForm from "./JobCreationForm/JobCreationForm";

import "./styles.css";

class App extends Component {
  state = { isformVisible: true };

  toggleForm = () => {
    let formVisibility = this.state.isformVisible;
    this.setState({ isformVisible: !formVisibility });
  };

  displayForm = () => {
    if (this.state.isformVisible) {
      return <JobCreationForm />;
    } else {
      return "";
    }
  };
  render() {
    return (
      <div className="App">
        {this.displayForm()}

        {jobs.map(job => (
          <JobItem key={job.id} {...job} />
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
