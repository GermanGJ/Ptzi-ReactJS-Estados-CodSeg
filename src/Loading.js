import React from "react";


class Loading extends React.Component
{   
    componentWillUnmount() {
        console.log("componentWillUnmount(Loading)");
    }

    render() {
        return (
            <p>Cargando...</p>
        );
    }
}

export { Loading };