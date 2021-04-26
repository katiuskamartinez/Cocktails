import React, { useState } from "react";

const initialForm = {
  drink: "",
};

function Formulario({ handleSearch }) {
  const [form, setForm] = useState(initialForm);

  function handleSubmit(e) {
    //console.log("enviando");
    e.preventDefault();
    if (!form.drink) {
      alert("dato incompleto");
      return;
    }
    handleSearch(form);
    setForm(initialForm);
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Cocktail"
          name="drink"
          value={form.drink}
          onChange={handleChange}
        />
        <button type="submit" value="enviar">
          Search
        </button>
      </form>
    </>
  );
}
export default Formulario;
