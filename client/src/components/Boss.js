import React, { useState, useEffect } from 'react';
import BossForm from "./BossForm"
import BossContainer from "./BossContainer"


function Boss() {

    const [bosses, setBosses] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch("/bosses", {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        })
          .then((r) => r.json())
          .then(setBosses);
      }, []);

      function handleAddBoss(newBoss) {
        setBosses([...bosses, newBoss]);
      }

      function handleClick() {
        setShowForm((showForm) => !showForm);
      }
    
      function handleDeleteBoss(bossToDelete) {
        const updatedBosses = bosses.filter((boss) => boss.id !== bossToDelete.id);
        setBosses(updatedBosses);
      }
    
      function handleUpdateBoss(updatedBoss) {
        const updatedBosses = bosses.map((boss) =>
          boss.id === updatedBoss.id ? updatedBoss : boss
        );
        setBosses(updatedBosses);
      }


  return (
    <div>
        {showForm ? <BossForm onAddBoss={handleAddBoss} /> : null}
        <div className="buttonContainer">
        <button onClick={handleClick}>Add a Boss</button>
        </div>
        <BossContainer
        bosses={bosses}
        onDeleteBoss={handleDeleteBoss}
        onUpdateBoss={handleUpdateBoss}
        />
    </div>
  )
}

export default Boss