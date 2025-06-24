import { useState } from "react";
import "./assets/main.css";
type ProductCategoryProps = Pick<Product, "categorie">;
type ProductRowProps = Pick<Product, "nom" | "prix">;
const CategoryOptions = [
  "Fruits",
  "Légumes",
  "Boissons",
  "Épicerie",
  "Produits laitiers",
  "Boulangerie",
] as const;
type Product = {
  category: (typeof CategoryOptions)[number];
  prix: number;
  nom: string;
  stock: boolean;
};

const PRODUCTS: Product[] = [
  { categorie: "Fruits", prix: 3, nom: "Mangue", stock: true },
  { categorie: "Fruits", prix: 5, nom: "Maracuja", stock: true },
  { categorie: "Légumes", prix: 2, nom: "Carotte", stock: true },
  { categorie: "Légumes", prix: 1.5, nom: "Concombre", stock: false },
  { categorie: "Boissons", prix: 4, nom: "Jus d'orange", stock: true },
  { categorie: "Épicerie", prix: 2.5, nom: "Riz basmati", stock: true },
  { categorie: "Épicerie", prix: 6, nom: "Huile d'olive", stock: false },
  {
    categorie: "Produits laitiers",
    prix: 3.2,
    nom: "Lait entier",
    stock: true,
  },
  {
    categorie: "Produits laitiers",
    prix: 2.8,
    nom: "Yaourt nature",
    stock: true,
  },
  { categorie: "Boulangerie", prix: 1.2, nom: "Baguette", stock: true },
];

function App() {
  const [onCheck, setOnCheck] = useState(false);
  const handleOnCheck = (e) => setOnCheck(e);
  const [onFilled, setOnFilled] = useState("");
  const handleOnFilled = (e) => setOnFilled(e);

  return (
    <>
      <SearchBar
        checked={onCheck}
        handleOnCheck={handleOnCheck}
        onFilled={onFilled}
        handleOnFilled={handleOnFilled}
      />
      {onCheck && !!onFilled ? (
        <ProductTable
          products={PRODUCTS.filter((product) => product.stock).filter(
            (product) => product.nom.includes(onFilled),
          )}
        />
      ) : onCheck && !onFilled ? (
        <ProductTable products={PRODUCTS.filter((product) => product.stock)} />
      ) : !onCheck && onFilled ? (
        <ProductTable
          products={PRODUCTS.filter((product) =>
            product.nom.includes(onFilled),
          )}
        />
      ) : (
        <ProductTable products={PRODUCTS} />
      )}
      <p>{onFilled}</p>
    </>
  );
}

function SearchBar({ checked, handleOnCheck, filled, handleOnFilled }) {
  return (
    <>
      <ProductSearch
        filled={filled}
        onChange={(e) => handleOnFilled(e.target.value)}
        onFilled={(e) => handleOnFilled(e)}
      />
      <Checkbox checked={checked} onCheck={(e) => handleOnCheck(e)} />
    </>
  );
}
type ProductSearchProps = { filled: string; onFilled: Function };
function ProductSearch({ filled, onFilled }: ProductSearchProps) {
  return (
    <>
      <input
        id="recherche-produit"
        className="recherche-produit"
        type="search"
        value={filled}
        onChange={(e) => onFilled(e.target.value)}
      />{" "}
    </>
  );
}
function Checkbox({ checked, onCheck }) {
  return (
    <div className="produits-en-stock">
      <input
        id="produits-en-stock"
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheck(e.target.checked)}
      />
      <p>N'afficher que les produits en stocks ? </p>
    </div>
  );
}

function ProductTable({ products }: ProductRowProps[]) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">Nom du Produit</th>
            <th scope="col">Prix</th>
          </tr>
        </thead>
        <tbody>
          {CategoryOptions.map((_categorie, index) => (
            <ProductCategory
              key={index}
              categorie={_categorie}
              products={products}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
function ProductCategory({ categorie, products }) {
  return (
    <>
      <ProductCategoryRow categorie={categorie} />
      {products
        .filter((product) => product.categorie == categorie)
        .map((product, index) => (
          <ProductRow key={index} nom={product.nom} prix={product.prix} />
        ))}
    </>
  );
}

function ProductCategoryRow({ categorie }: ProductCategoryProps) {
  return (
    <>
      <tr className="categorie-produit">
        <td>{categorie}</td>
      </tr>
    </>
  );
}

function ProductRow({ nom, prix }: ProductRowProps) {
  return (
    <>
      <tr className="produit">
        <td>{nom}</td>
        <td>{prix} €</td>
      </tr>
    </>
  );
}

export default App;
