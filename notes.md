function App() {
const [count, setCount] = useState(0);
/**
_ // pour muter des objects
_ const [data, setData] = useState({key1: value1, key2: value2 ... });
_ const handleEvent = () => {
_ setData(...data, keyK: data.keyK: newValueK) parce qu'on ne peut pas faire de mutation dans un setter, on écrase la valeur
_ attention je ne peux pas mettre un hook dans une condition, ou qu'il y ait de return avant
_ je veux hook(function ) et non function(hook) \* \*/
const handleClick = () => {
setCount((count) => count +1);
};
/**
_ attention aux input :
_ Avec react il y a deux types d'input : les input contrôlés par react et ceux qui ne le sont pas (les input html classiques)
_ input contrôlés doivent avoir une valeur et un handler : <input type="type" value={value} onChange={handleChange}/>
_ Attention : value ne peut pas être null ou undefined
_ input non-contrôlés ne doivent avoir ni valeur ni handler (on peut mettre une valeur par défaut defaultValue="value"
_ Si on veut quand meme accéder à la valeur d'un input non contrôlé, on le met à l'intérieur d'un form sur lequel on place
_ un handler.
_ _/
/\*\*
_ Data Flow :
_ normal Data Flow : parent -> enfant via props
_ reverse Data Flow : enfant -> parent via props \*
_ ex : voir setIsChecked
_ \*/

    const [firstname, setFirstname] = useState('');
    const handleChange = (e) => {
    	setFirstname(e.target.value);
    }

    const [isChecked, setIsChecked] = useState(false);

return <>

<p> Compteur {count} </p>
<button onClick={handleClick} >Incrémenter</button>
<form>
<input type="text" value={firstname} onChange = {handleChange}/>
<CGUCheckbox checked={isChecked} onCheck={setIsChecked}/>
<button disabled={!isChecked}> Valider ! </button>
</form>
</>
}

const CGUCheckbox = ({checked, onCheck}) => {
return <input type="checkbox" onChange={e => onCheck(e.target.checked)} checked={checked} />
}


		// Si j'ai besoin d'un Id, je peux utiliser le hook useId()

		// Si j'ai besoin de mémoriser une information je peux utiliser useMemo() : Attention, useMemo n'est à utiliser

		// que si vraiment mon composant est lent



on peut améliorer useIncrement en utilisant useCallback au lieu de useState (gain de perf ), on peut lui passer le handler parce que dans ce cas là le handler ne change pas (pas d'arguments typiquement)
