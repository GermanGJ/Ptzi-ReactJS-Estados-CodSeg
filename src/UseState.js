import React from "react";

const SECURITY_CODE = 'Paradigma';

function UseState({ name })
{
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    console.log(value);

    React.useEffect(() => {
        console.log("Empezando efecto.");

        if (!!loading)
        {
            setTimeout(() => {
                console.log("Haciendo la validación.")
    
                if (value !== SECURITY_CODE) {
                    setError(true);
                }
                setLoading(false);    
    
                console.log("Terminando la validación.")
            }, 3000);
        }

        console.log("Terminando efecto.");
    }, [loading]);

    return (
        <div>
            <h2>Eliminar {name}</h2>

            <p>Por favor, escribe el codigo de seguridad.</p>

            {error && (
                <p>Error: El código es incorrecto.</p>
            )}
            {loading && (
                <p>Cargando...</p>
            )}

            <input 
                placeholder="Código de Seguridad" 
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
            />
            <button
                onClick={() => {setLoading(true)
                    setError(false)    
                }}
            >Comprobar</button>
        </div>
    );
}

export { UseState };