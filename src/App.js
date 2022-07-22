import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddCurriculam from "./Pages/AddCurriculam";
import AddTutionFee from "./Pages/AddTutionFee";
import CourseLists from "./Pages/CourseLists";
import Programs from "./Pages/Programs";
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
                    <Route path="/tutionfee" element={<AddTutionFee />} />
                    <Route path="/program" element={<Programs />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
