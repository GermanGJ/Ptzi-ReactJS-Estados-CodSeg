import React from "react";

function UseState({ name })
{
    const [error, setError] = React.useState(true);

    return (
        <div>
            <h2>Eliminar {name}</h2>

            <p>Por favor, escribe el codigo de seguridad.</p>

            {error && (
                <p>Error: El código es incorrecto.</p>
            )}

            <input placeholder="Código de Seguridad" />
            <button
                onClick={() => setError(!error)}
            >Comprobar</button>
        </div>
    );
}

export { UseState };