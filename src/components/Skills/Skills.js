import { React, useState, useEffect, Fragment } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./Skills.css";

const Skill = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "Java" },
  { id: 3, name: "C#" },
];

function Skills() {
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputName, setInputName] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [modal, setModal] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const openModal = (id) => {
    setSelectedId(id); // Set the selectedId when opening the modal
    setInputName("");
    setModal(true);
  };

  const closeModal = () => {
    setSelectedId(null); // Clear the selectedId when closing the modal
    setModal(false);
  };

  let history = useNavigate();

  // Delete Button
  const handleDelete = (id) => {
    let index = Skill.map((e) => {
      return e.id;
    }).indexOf(id);

    Skill.splice(index, 1);

    history("/addSkills");
  };

  // setter of skill
  const handleChange = (name) => {
    setName(name);
  };

  // Add skill
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Skill.length + 1;
    let a = inputValue;

    Skill.push({ id: id, name: a });
    setInputValue("");
    handleChange("");

    history("/addSkills");
  };

  // Edit

  const handleEdit = () => {
    if (selectedId !== null) {
      // Only proceed if a skill is selected
      const updatedItems = Skill.map((item) =>
        item.id === selectedId ? { ...item, name: inputName } : item
      );
      Skill.length = 0;
      Skill.push(...updatedItems);
      closeModal(); // Close the modal after editing
      history("/addSkills");
    }
  };

  useEffect(() => {
    inputValue !== "" ? setIsActive(true) : setIsActive(false);
  }, [inputValue]);

  return (
    <Fragment>
      <div className="full-section">
        <div className="skills-container">
          <h2>Existing Skills </h2>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Skill</th>
                <th>Actions </th>
              </tr>
            </thead>
            <tbody>
              {Skill && Skill.length > 0
                ? Skill.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td className="Button-table">
                          {/* start modal*/}
                          <button
                            onClick={() => {
                              openModal(item.id);
                            }}
                          >
                            Update
                          </button>
                          {modal && selectedId === item.id && (
                            <div className="modal">
                              <div className="modal-content">
                                <span className="close" onClick={closeModal}>
                                  &times;
                                </span>
                                <h2>Edit Skills</h2>
                                <input
                                  className="inputBox"
                                  type="text"
                                  placeholder="Edit name ... "
                                  value={inputName}
                                  onChange={(e) => setInputName(e.target.value)}
                                />
                                <Button
                                  onClick={() => {
                                    handleEdit();
                                  }}
                                >
                                  Submit
                                </Button>
                              </div>
                            </div>
                          )}
                          {/* end modal */}
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
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={(e) => handleSubmit(e)} disabled={!isActive}>
              Add Skill
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Skills;
