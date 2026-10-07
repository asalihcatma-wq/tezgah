import { useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate, useParams } from "react-router";

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


  function UrunKarti(props) {
  const navigate = useNavigate();
  return ( <div  className="urun-karti"  onClick={() => navigate(`/urun/${props.urun.id}`)}> {/*template literal*/} 
           <img src={props.urun.resim} alt={props.urun.isim} />
            <h2>{props.urun.isim}</h2>
            <p>Fiyat: {props.urun.fiyat}  TL</p> 
          </div>);
}

function UrunDetay() {
  const params = useParams();
  const urun = urunler.find((u) => u.id === parseInt(params.id));

  if (!urun) {
    return <h2>Ürün bulunamadı</h2>;
  }

  return (
    <div className="urun-detay">
      <img src={urun.resim} alt={urun.isim} />
      <h2>{urun.isim}</h2>
      <p>Fiyat: {urun.fiyat} TL</p>
      <button onClick={() => console.log("Sepete eklendi:", urun.isim)}>
        Sepete Ekle
      </button>
    </div>
  );
}


function App() {
  const [count, setCount] = useState(0);


  

  

  


  return (
    <div>
      <h1>Tezgah</h1>
       <Routes>
  <Route path="/" element={
   <div className="urun-listesi">
        {urunler.map((urun) => ( 
          <UrunKarti urun={urun} key={urun.id} />
        ))}
      </div>
  } />
  <Route path="/urun/:id" element={<UrunDetay />} />
</Routes>

    </div>
  );
}

export default App;
