import { link } from "motion/react-client";
import React from "react";
import { useParams } from "react-router-dom";

const JobApply = () => {
  const { id } = useParams();
  console.log(id);

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const portfolio = form.portfolio.value;

    console.log(linkedin, github, resume, portfolio);
  };
  return (
    <div className="card-body justify-center bg-red-100 ">
      <div className="bg-green-100 ">
        <h1 className="text-5xl font-bold text-center">Fill up</h1>
        <form onSubmit={submitJobApplication} className="fieldset  grid-cols-2 m-5">
          <div className="grid ">
            <label className="label ">Linkedin URL</label>
            <input
              type="url"
              name="linkedin"
              className="input"
              placeholder="linkedin"
            />
          </div>

          <div className="grid ">
            <label className="label">Github URL</label>
            <input
              type="url"
              name="github"
              className="input"
              placeholder="Github"
            />
          </div>

          <div className="grid ">
            <label className="label">Resume URL</label>
            <input
              type="url"
              name="resume"
              className="input"
              placeholder="Resume"
            />
          </div>

          <div className="grid ">
            <label className="label">Portfolio URL</label>
            <input
              type="url"
              name="portfolio"
              className="input"
              placeholder="Portfolio"
            />
          </div>
          <div className="text-center">
            <input type="submit" value="Apply" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
