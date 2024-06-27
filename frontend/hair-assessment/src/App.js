import React, { useState } from "react";
import "./App.css";

function App() {
  const [mainStep, setMainStep] = useState(0);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    gender: "",
    baldDegree: "",
    familyBaldness: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mainStep === 0 && step < 4) {
      setStep(step + 1);
    } else if (mainStep === 0 && step === 4) {
      setMainStep(1);
      setStep(0);
    } else if (mainStep === 1 && step < 1) {
      setStep(step + 1);
    } else {
      fetch("http://localhost:5000/api/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setMainStep(2);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
          alert("Failed to save data. Please try again.");
        });
    }
  };

  const renderFormStep = () => {
    if (mainStep === 0) {
      switch (step) {
        case 0:
          return (
            <div className="form-group">
              <label>Your Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          );
        case 1:
          return (
            <div className="form-group">
              <label>Your Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          );
        case 2:
          return (
            <div className="form-group">
              <label>Your Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
          );
        case 3:
          return (
            <div className="form-group">
              <label>Your Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          );
        case 4:
          return (
            <div className="form-group">
              <label>Your Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          );
        default:
          return null;
      }
    } else if (mainStep === 1) {
      switch (step) {
        case 0:
          return (
            <div className="form-group">
              <label>Which degree of baldness are you experiencing?</label>
              <select
                name="baldDegree"
                value={formData.baldDegree}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="none">None</option>
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
              </select>
            </div>
          );
        case 1:
          return (
            <div className="form-group">
              <label>Who in your family is bald?</label>
              <select
                name="familyBaldness"
                value={formData.familyBaldness}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="none">None</option>
                <option value="father">Father</option>
                <option value="mother">Mother</option>
                <option value="both">Both</option>
              </select>
            </div>
          );
        default:
          return null;
      }
    } else {
      return (
        <div className="confirmation">
          <h2>Data saved successfully!</h2>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <div className="header">
        <div className={`main-tab ${mainStep === 0 ? "active" : ""}`}>
          About You
        </div>
        <div className={`main-tab ${mainStep === 1 ? "active" : ""}`}>
          Hair Health
        </div>
      </div>
      <div className="header">
        {mainStep === 0 && (
          <>
            <div className={`tab ${step === 0 ? "active" : ""}`}>Name</div>
            <div className={`tab ${step === 1 ? "active" : ""}`}>Email</div>
            <div className={`tab ${step === 2 ? "active" : ""}`}>Age</div>
            <div className={`tab ${step === 3 ? "active" : ""}`}>Phone</div>
            <div className={`tab ${step === 4 ? "active" : ""}`}>Gender</div>
          </>
        )}
        {mainStep === 1 && (
          <>
            <div className={`tab ${step === 0 ? "active" : ""}`}>
              Baldness Degree
            </div>
            <div className={`tab ${step === 1 ? "active" : ""}`}>
              Family Baldness
            </div>
          </>
        )}
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          {renderFormStep()}
          <button type="submit">
            {mainStep === 0 && step < 4
              ? "Next"
              : mainStep === 1 && step < 1
              ? "Next"
              : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
