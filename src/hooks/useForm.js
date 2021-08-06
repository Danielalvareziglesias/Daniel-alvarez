import { useState } from 'react';

export const useForm = (initialState = {}) => 
{
    const [state, setState] = useState(initialState);

    // Cambio el valor de los input en le useState
    const handleInputChange = ({ target }) =>
    {
        setState({
            ...state,
            [target.name]: target.value
        });
        // El target.value apunta a name o a email porque así los llamé en su atributo name del input
    }

    return [state, handleInputChange];
}
