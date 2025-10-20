import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState()
    
    const onInputChange = ({target}) => setInputValue(target.value);
   
    const onSubmit = ( event ) => {
        event.preventDefault();
        const inputValueCleaned = inputValue.trim();
        if( inputValueCleaned.length <= 1 ) return

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValueCleaned );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Search gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
