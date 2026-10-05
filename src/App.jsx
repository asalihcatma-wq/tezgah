import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const urunler = [
    {
      id: 1,
      isim: "Ürün 1",
      fiyat: 100,
      resim: "/urunler/urun1.png",
    },
    {
      id: 2,
      isim: "Ürün 2",
      fiyat: 200,
      resim: "/urunler/urun2.png",
    },
    {
      id: 3,
      isim: "Ürün 3",
      fiyat: 300,
      resim: "/urunler/urun3.png",
    },
  ];


  return (
    <div>
      <h1>Tezgah</h1>
      <div>
        {urunler.map((urun) => (
          <div key={urun.id}>
            <h2>{urun.isim}</h2>
            <p>Fiyat: {urun.fiyat} TL</p>
            <img src={urun.resim} alt={urun.isim} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
