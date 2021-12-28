import React from "react";

function UseState({ name })
{
    const [error, setError] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        console.log("Empezando efecto.");

        if (!!loading)
        {
            setTimeout(() => {
                console.log("Haciendo la validación.")
    
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

            <input placeholder="Código de Seguridad" />
            <button
                onClick={() => setLoading(true)}
            >Comprobar</button>
        </div>
    );
}

export { UseState };