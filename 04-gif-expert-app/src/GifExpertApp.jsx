import { useState } from 'react';
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

  //console.log('Hola mundo')
  const [categories, setCategories] = useState([ 'One piece', 'Rick & Morty' ])
  
  const onAddCategory = ( newCategory ) => {
    
    if( categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories ]);
  }

  return (
    <>
    {/* Titulo */}
    <h1>GifExpertApp</h1>

    {/*  Input  */}
    <AddCategory 
      onNewCategory={ onAddCategory }
    />

    {/* List of gifs */}
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