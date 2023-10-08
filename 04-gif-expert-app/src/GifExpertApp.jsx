import {useState} from 'react';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One piece', 'Rick & Morty' ])
  
  const onAddCategory = () => {

    setCategories([ 'Zoro', ...categories ]);

  return (
    <>
    {/* Titulo */}
    <h1>GifExpertApp</h1>

    {/*  Input  */}

    {/* List of gifs */}
    <button onClick={ onAddCategory }>Agregar</button>
    <ol>
      {
        categories.map( category =>{
          return <li key={ category }>{category}</li>
        })
         
      }
       
    </ol>
    {/* gif item */}
    </>
    )
  }

}