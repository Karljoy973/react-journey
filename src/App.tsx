import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [firstname, setFirstname] = useState("");
  const [timer, setTimer] = useState(5);
  let timeHandlerInterval = null;
  const timeHandler = (value: number) => {
    if (!!timeHandlerInterval) {
      clearInterval(timeHandlerInterval);
      timeHandlerInterval = null;
    }
    setTimer((timer) => (timer = value));
    timeHandlerInterval = setInterval(() => {
      setTimer((timer) => {
        if (timer > 0) timer--;
        else timer = 0;
      });
    }, 1000);
  };
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
  useEffect(() => {
    const originalTitle = document.title;
    document.title = title;
    return () => (document.title = originalTitle);
  }, [title]);

  useEffect(() => {
    const timerText = document.getElementById("text-timer") as HTMLElement;
    const currentText = timerText.innerText;
    timerText.innerText = `Il vous reste ${timer} s`;
    return () => (timerText.innerText = currentText);
  }, [timer]);

  return (
    <div>
      <input
        placeholder="modifier le titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="modifier le nom"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <input
        type="number"
        placeholder=""
        value={timer}
        min="10"
        max="100"
        id="timer"
        onChange={(e) => setTimer(e.target.value)}
      />
      <p id="text-timer">Entrez un nombre plus grand que 0</p>
    </div>
  );
}

export default App;
