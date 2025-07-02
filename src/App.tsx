import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [firstname, setFirstname] = useState("");
  // pourquoi utiliser useEffect ?
  // useEffect permet de créer des méthode de cycle de vie dans les composants fonctionnels
  // donc quand il y a une mutation dans le useEffect, la mutation n'affecte pas tout le composant
  // et ya que ce qui change qui est re-rendu => gain de performances.
  // on peut aussi appeler une fonction de 'nettoyage'
  // ex : useEffect(() => {
  // window.addEventListener('event', e => handler);
  // ...
  // return () => window.removeEventListener('event', handler) } , []}
  //
  // On évite les setState dans le useEffect, dans la fonction de nettoyage pk pas
  const [timer, setTimer] = useState(5);
  const [remainingSeconds, setRemainingSeconds] = useState(5);
  let intervalRef = undefined;
  const handleChange = (e) => {
    setTimer(e);
    setRemainingSeconds(e);
  };

  useEffect(() => {
    intervalRef = setInterval(() => {
      setRemainingSeconds((value) => {
        if (value <= 1) {
          clearInterval(intervalRef);
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => {
      clearInterval(intervalRef);
    };
  }, [timer]);
  return (
    <div>
      <input
        value={timer}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Timer..."
      />
      <p id="text-timer">Il vous reste : {remainingSeconds}s</p>
    </div>
  );
}

export default App;
