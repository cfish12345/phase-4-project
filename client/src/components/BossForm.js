import React, { useState } from 'react';

function BossForm ({ onAddBoss }) {

    const [formData, setFormData] = useState({
        name: "",
        image_url: "",
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newBoss = {
            ...formData,
            killcount: 0,
        };

        fetch("/bosses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newBoss),
        })
            .then((r) => r.json())
            .then((newBoss) => {
                setFormData({
                    name: "",
                    image_url: "",
                });
                onAddBoss(newBoss);
            });
    }


  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-boss-form">
        <h3>Create a Boss!</h3>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Enter a bosses name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image_url"
          onChange={handleChange}
          value={formData.image_url}
          placeholder="Enter a bosses image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Boss"
          className="submit"
        />
      </form>
    </div>
  );
}

export default BossForm