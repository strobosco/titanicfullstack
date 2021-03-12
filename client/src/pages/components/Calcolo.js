import { useState } from "react";

const Calcolo = () => {

    const [sex, setSex] = useState("")
    const [pclass, setPclass] = useState("")
    const [age, setAge] = useState("")
    const [embarked, setEmbarked] = useState("")
    const [risultato, setRisultato] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()

        console.log(sex, pclass, age, embarked)

        const data = {
            sex: sex === "male" ? (0) : (1),
            pclass: pclass,
            age: age,
            embarked: embarked
        }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const res = await fetch("titanicbackendservice:8080", options)
        const resjson = await res.json()

        console.log(resjson.confirmation)
        setRisultato(resjson.confirmation)

        setSex("")
        setAge("")
        setEmbarked("")
        setPclass("")

    }

    return (
        <>
            <div className="calcolo">
                <form onSubmit={onSubmit}>
                    <p className="inputDescriptor">What is your sex? <input type="text" id={"Sex"} value={sex} onChange={(e) => setSex(e.target.value)}></input></p> <br/>
                    <p className="inputDescriptor">What is your class? <input type="number" id={"Pclass"} placeholder="1, 2 or 3" value={pclass} onChange={(e) => setPclass(e.target.value)}></input></p> <br/>
                    <p className="inputDescriptor">How old are you? <input type="number" id={"Age"} value={age} onChange={(e) => setAge(e.target.value)}></input></p> <br/>
                    <p className="inputDescriptor">Where did you board? <input type="text" id={"Embarked"} value={embarked} onChange={(e) => setEmbarked(e.target.value)}></input></p> <br/>
                    <input type="submit" value="Calcola!" className="calcola" ></input>
                </form> <br/>
            </div>
            <div className="calcolo" style={{marginLeft: 10}}>
                <p>Did you survive or not?</p>
                <span id="risultato">{risultato}</span>
            </div>
        </>
    )
}

export default Calcolo
