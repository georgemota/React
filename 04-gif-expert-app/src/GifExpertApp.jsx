import {useState} from 'react';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch', 'Rick & Morty' ])
  
  const onAddCategory = () => {

    setCategories({
      ...categories,
      category: category
    })
  }

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
