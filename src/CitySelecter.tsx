import React, { useState } from 'react';
import './Style.css';

const variants = ['Новосибирск', 'Рио-де-Жанейро', 'Лондон'];

function CitySelecter() {
  const [value, setValue] = useState<number>(0);

  return (
    <div className="column">
      <select value={value} onChange={e => setValue(Number(e.target.value))}>
        {variants.map((variant, index) => (
          <option key={index} value={index}>
            {variant}
          </option>
        ))}
      </select>
      <div>
        Выбран: {variants[value]}
      </div>
      {variants[value] !== 'Рио-де-Жанейро' && (
        <div>Нет, это не Рио-де-Жанейро!</div>
      )}
    </div>
  );
}

export default CitySelecter;
