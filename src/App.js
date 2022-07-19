import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddCurriculam from "./Pages/AddCurriculam";
import CourseLists from "./Pages/CourseLists";
import Semester from "./Pages/Semester";

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/semester" element={<Semester />} />
                    <Route path="/courselist" element={<CourseLists />} />
                    <Route path="/curriculam" element={<AddCurriculam />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
