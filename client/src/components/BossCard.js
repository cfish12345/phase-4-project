import React from 'react'

function BossCard ({ boss, onDeleteBoss, onUpdateBoss }) {

    
    const { id, name, location, image_url, killcount } = boss;

    function handleDeleteClick() {
        fetch(`/bosses/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        }).then((r) => {
            if (r.ok) {
                onDeleteBoss(boss);
            }
        });
    }

    // function handleUpdate() {
    //   fetch(`/bosses/${id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     },
    //     body: JSON.stringify(updateObj),
    //   })
    //       .then((r) => r.json())
    //       .then(()
    // }

    function handleKillcountClick() {
        const updateObj = {
            killcount: killcount + 1,
        };

        fetch(`/bosses/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updateObj),
        })
            .then((r) => r.json())
            .then((updatedBoss) => onUpdateBoss(updatedBoss));
    }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image_url} alt={name} className="boss-avatar" />
      <p>Killcount:{killcount} </p>
      <button className="killcount-btn" onClick={handleKillcountClick}>
        Killcount 
      </button>
      <button className="del-btn" onClick={handleDeleteClick}>
        Remove this Boss
      </button>
      <p></p>
      <p></p>
    </div>
  )
}

export default BossCard