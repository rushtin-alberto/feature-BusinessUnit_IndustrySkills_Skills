import { React, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import IndustrySkill from "../../dummy/IndustrySkill";

import "./addIndustrySkills.css";

function EditIndustrySkill() {
  const [index, setIndex] = useState("");
  const [name, setName] = useState("");

  let history = useNavigate();

  useEffect(() => {
    setIndex(localStorage.getItem("index"));
    setName(localStorage.getItem("name"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let upSkill = IndustrySkill[index];
    upSkill.name = name;

    history("/addIndustrySkills");
  };

  return (
    <div>
      <div className="edit-bar-container2">
        <div className="input-wrapper2">
          <h2>Edit Industry Skills</h2>
          <input
            className="inputBox2"
            type="text"
            placeholder="Edit Id ... "
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <Link to={"/addIndustrySkills"}>
            <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EditIndustrySkill;
