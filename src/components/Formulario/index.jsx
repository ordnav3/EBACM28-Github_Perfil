import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('O componente Iniciou');

        return () =>{
            console.log('O componente finalizou')
        }
    }, []);

    useEffect(() => {
        console.log('O nome mudou')
    }, [nome]);

    useEffect(() => {
        console.log('As notas mudaram')
    }, [materiaA, materiaB, materiaC]);

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3;

        if (media >= 7) {
            return(
                <p>Olá {nome} você foi Aprovado</p>
            )
        }else{
            return(
                <p>Olá {nome} você foi Reprovado</p>
            )
        }
    }

    const alteraNome = (evento) => {

        setNome(() =>{
            return evento.target.value;
        })
    }


    return(
        <form>
            <ul>
                {[1,2,3,4,5,6,7].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Su Nome" onChange={alteraNome}  />
            <br/>
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(Number(target.value)) } />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(Number(evento.target.value)) } />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(Number(evento.target.value)) } />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;