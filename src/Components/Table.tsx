import { useState } from 'react';
import Die from './die';

export const Table = () => {

  // List of the dice combinations
  const diceCombinations = [
    '1 pair',
    '2 pair',
    '3 of a kind',
    'full house',
    '4 of a kind',
    'flush',
    'straight',
    '6 of a kind',
  ];
  const chudovishta = [
    'Плъх',
    'Паяк, Прилеп',
    'Мумия',
    'Скелет с ключ',
    'Скелет с меч',
    'Скелет с брадва',
    'Скелет Маг, Гул',
    'Дракон',
  ];

  // Function to shuffle an array
  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // Function to generate a random permutation
  function getRandomPermutation() {
    return shuffleArray(diceCombinations);
  }

  const [generate, setGenerate] = useState(getRandomPermutation());

  const onePair = (text) => {
    return (
      <div className="row">
        <span className="monster-text">{text}</span>
        <div className="container">
          <Die value={5} />
          <Die value={5} />
        </div>
      </div>
    );
  };

  const twoPair = (text) => {
    return (
      <div className="row">
        <span className="monster-text">{text}</span>
        <div className="container">
          <Die value={2} />
          <Die value={2} />
          <div className="monster-text">+</div>
          <Die value={5} />
          <Die value={5} />
        </div>
      </div>
    );
  };

  const three = (text) => {
    return (
      <div className="row">
        <span className="monster-text">{text}</span>
        <div className="container">
          <Die value={3} />
          <Die value={3} />
          <Die value={3} />
        </div>
      </div>
    );
  };
  const full = (text) => {
    return (
      <div className="row">
        <span className="monster-text">{text}</span>
        <div className="container">
          <Die value={2} />
          <Die value={2} />
          <Die value={2} />
          <div className="monster-text">+</div>
          <Die value={5} />
          <Die value={5} />
        </div>
      </div>
    );
  };
  const four = (text) => {
    return (
      <div className="row">
        <span className="monster-text">{text}</span>
        <div className="container">
          <Die value={6} />
          <Die value={6} />
          <Die value={6} />
          <Die value={6} />
        </div>
      </div>
    );
  };
  const flush = (text) => {
    return (
      <div className="row">
        <span className="monster-text">{text}</span>
        <div className="container">
          <Die value={1} />
          <Die value={2} />
          <Die value={3} />
          <Die value={4} />
          <Die value={5} />
          <div className="monster-text">/</div>
          <Die value={6} />
        </div>
      </div>
    );
  };
  const straight = (text) => {
    return (
      <div className="row">
        <span className="monster-text">{text}</span>
        <div className="container">
          <Die value={1} />
          <Die value={2} />
          <Die value={3} />
          <Die value={4} />
          <Die value={5} />
        </div>
      </div>
    );
  };
  const six = (text) => {
    return (
      <div className="row">
        <span className="monster-text">{text}</span>
        <div className="container">
          <Die value={6} />
          <Die value={6} />
          <Die value={6} />
          <Die value={6} />
          <Die value={6} />
        </div>
      </div>
    );
  };

  const reset = () => {
    setGenerate(() => getRandomPermutation());
  };
    return (
        <>
            <button className="btn-reset" onClick={reset}>
              Нова поредица
            </button>
            {generate.map((combo, index) => {
              switch (combo) {
                case '1 pair':
                  return (
                    <div key={`combo-${index}`}>{onePair(chudovishta[index])}</div>
                  );
                case '2 pair':
                  return (
                    <div key={`combo-${index}`}>{twoPair(chudovishta[index])}</div>
                  );
                case '3 of a kind':
                  return (
                    <div key={`combo-${index}`}>{three(chudovishta[index])}</div>
                  );
                case 'full house':
                  return (
                    <div key={`combo-${index}`}>{full(chudovishta[index])}</div>
                  );
                case '4 of a kind':
                  return (
                    <div key={`combo-${index}`}>{four(chudovishta[index])}</div>
                  );
                case 'flush':
                  return (
                    <div key={`combo-${index}`}>{flush(chudovishta[index])}</div>
                  );
                case 'straight':
                  return (
                    <div key={`combo-${index}`}>{straight(chudovishta[index])}</div>
                  );
                case '6 of a kind':
                  return (
                    <div key={`combo-${index}`}>{six(chudovishta[index])}</div>
                  );
              }
            })}
        </>
      );
}