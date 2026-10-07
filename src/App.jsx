import { useState } from "react";
import "./App.css";


  function UrunKarti(props) {
  return <div  className="urun-karti"  onClick={() => console.log(props.urun.isim)}  >
           <img src={props.urun.resim} alt={props.urun.isim} />
            <h2>{props.urun.isim}</h2>
            <p>Fiyat: {props.urun.fiyat}  TL</p> 
          </div>;
}

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
      <div className="urun-listesi">
        {urunler.map((urun) => ( 
          <UrunKarti urun={urun} key={urun.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
