import React, { useState } from 'react';
import BossCard from './BossCard';

function BossContainer ({ bosses, onDeleteBoss, onUpdateBoss }) {

    const bossCards = bosses.map((boss) => (
        <BossCard
            key={boss.id}
            boss={boss}
            onDeleteBoss={onDeleteBoss}
            onUpdateBoss={onUpdateBoss}
        />
    ));


  return (
    <div id="boss-collection">{bossCards}</div>
  )
}

export default BossContainer