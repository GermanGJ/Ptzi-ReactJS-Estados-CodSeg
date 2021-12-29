import React from "react";
import { Loading } from "./Loading";


class ClassState extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            error: false,
            loading: false,
        }
    }

    UNSAFE_componentWillMount () {
        console.log("UNSAFE_componentWillMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");

        if (!!this.state.loading)
        {
            setTimeout(() => {
                console.log("Haciendo la validación.")
    
                this.setState({ loading: false });
    
                console.log("Terminando la validación.")
            }, 3000);
        }
    }

    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>

                <p>Por favor, escribe el codigo de seguridad.</p>

                {this.state.error && (
                    <p>Error: El código es incorrecto.</p>
                )}

                {this.state.loading && (
                    <Loading></Loading>
                )}

                <input placeholder="Código de Seguridad" />
                <button
                    onClick={() => 
                        this.setState(prevState => ({ loading: true }))
                    }
                >Comprobar</button>
            </div>
        );
    }
}

export { ClassState };