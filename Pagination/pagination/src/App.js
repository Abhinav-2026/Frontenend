import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [products,setProducts]=useState([]);
  const [page,setPage]=useState(1);
  const fetchProducts=async()=>{
    const res=await fetch("https://dummyjson.com/products");
    const data=await res.json();
    if(data && data.products){
      setProducts(data.products);
    }
    console.log(data);
  }
  useEffect(()=>{
  fetchProducts();
  },[])
  const selectPageHandler=(selectedPage)=>{
    if(selectedPage>=1 && selectedPage<=products.length/5 && selectedPage!==page)
    setPage(selectedPage)
  }
  return (
    <div>
        {
    products.length>0 && <div className='products'>
    {
      products.slice(page*5-5,page*5).map((prod)=>{
        return <span className='products__single' key={prod.id}>
          <img src={prod.thumbnail} alt={prod.title}></img>
          <span>{prod.title}</span>
        </span>
      })
    }
    </div>
  }
  {
    products.length>0 && <div className='pagination'>
      <span onClick={()=>selectPageHandler(page-1)}>⬅️</span>
      {
        [... Array(products.length/5)].map((_,i)=>{
          return<span key={i} onClick={()=>selectPageHandler(i+1)} className={page===i+1 ? "pagination__selected":"hell"}>{i+1}</span>
        })
      }
      <span onClick={()=>selectPageHandler(page+1)}>➡️</span>
    </div>
  }
  </div>
  )
}

export default App;
