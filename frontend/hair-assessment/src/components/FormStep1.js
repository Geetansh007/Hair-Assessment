import React from "react";
import "./styles.css";

const FormStep1 = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="next-button">
        Next
      </button>
    </form>
  );
};

export default FormStep1;
