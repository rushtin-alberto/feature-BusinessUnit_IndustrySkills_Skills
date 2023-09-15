import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddIndustrySkill from "./components/IndustrySkills/AddIndustrySkill";
import EditIndustrySkill from "./components/IndustrySkills/EditIndustrySkill";
import Skills from "./components/Skills/Skills";
import BusinessUnit from "./components/BusinessUnit/addBusinessUnit";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/addIndustrySkills" element={<AddIndustrySkill />} />
          <Route
            path="/addIndustrySkills/edit"
            element={<EditIndustrySkill />}
          />
          <Route path="/addSkills" element={<Skills />} />
          <Route path="/addBusinessUnit" element={<BusinessUnit />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
