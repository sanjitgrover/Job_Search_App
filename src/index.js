import React from "react";
import ReactDOM from "react-dom";

import jobs from "./data/Jobs";
import JobItem from "./components/JobListElement/SimpleJobElement";
import JobCreationForm from "./JobCreationForm/JobCreationForm";

import "./styles.css";

function App() {
  return (
    <div className="App">
      My Job search App
      <JobCreationForm />
      {jobs.map(job => (
        <JobItem key={job.id} {...job} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
