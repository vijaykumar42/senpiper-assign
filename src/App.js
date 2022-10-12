import "./App.css";
import { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Feedbackform from "./components/Feedbackform";
import Popup from "./components/Popup";
import Viewdetails from "./components/Viewdetails";

const localStorageData = () => {
  const data = localStorage.getItem("storedData");
  return data ? JSON.parse(data) : [];
};

function App() {
  const [storedData, setStoredData] = useState(localStorageData());
  const [formData, setFormData] = useState({
    name: "",
    gmail: "",
    phone: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
  });
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    localStorage.setItem("storedData", JSON.stringify(storedData));
  }, [storedData]);
  return (
    <div className="App">
      <Tabs
        defaultActiveKey="feedback"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="feedback" title="Feedback">
          {popup ? (
            <Popup setPopup={setPopup} />
          ) : (
            <Feedbackform
              formData={formData}
              setFormData={setFormData}
              storedData={storedData}
              setStoredData={setStoredData}
              setPopup={setPopup}
            />
          )}
        </Tab>
        <Tab eventKey="details" title="View Details">
          <Viewdetails storedData={storedData} setStoredData={setStoredData} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
