import { React, useState, useEffect, Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import "./addIndustrySkills.css";

import IndustrySkill from "../../dummy/IndustrySkill";

function AddIndustrySkill() {
  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(false);

  let history = useNavigate();

  useEffect(() => {
    name !== "" ? setIsActive(true) : setIsActive(false);
  }, [name]);

  // Update Button
  const handleEdit = (index, name) => {
    localStorage.setItem("index", index);
    localStorage.setItem("name", name);
  };

  // Delete Button
  const handleDelete = (id) => {
    let index = IndustrySkill.map((e) => {
      return e.id;
    }).indexOf(id);

    IndustrySkill.splice(index, 1);

    history("/addIndustrySkills");
  };

  // setter of skill
  const handleChange = (value) => {
    setName(value);
  };

  // Add skill
  const handleSubmit = (e) => {
    e.preventDefault();

    const id = IndustrySkill.length + 1;

    let a = name;

    IndustrySkill.push({ id: id, name: a });
    handleChange("");

    history("/addIndustrySkills");
  };

  return (
    <Fragment>
      <div className="full-section">
        <div className="skills-container">
          <h2>Existing Industry Skills </h2>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Skill</th>
                <th>Actions </th>
              </tr>
            </thead>
            <tbody>
              {IndustrySkill && IndustrySkill.length > 0
                ? IndustrySkill.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td className="Button-table">
                          <Link to={"/addIndustrySkills/edit"}>
                            <Button
                              onClick={() => {
                                let index = IndustrySkill.findIndex(
                                  (i) => i.id === item.id
                                );
                                handleEdit(index, item.name);
                              }}
                            >
                              Update
                            </Button>
                          </Link>
                          <Button onClick={() => handleDelete(item.id)}>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                : "No data available"}
            </tbody>
          </table>
        </div>
        <div className="search-bar-container">
          <div className="input-wrapper">
            <input
              className="inputBox"
              type="text"
              placeholder="Add Industry ... "
              value={name}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button onClick={(e) => handleSubmit(e)} disabled={!isActive}>
              Add IndustrySkill
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AddIndustrySkill;
