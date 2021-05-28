import React, { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {

    const [ strawberries, setStrawberries ] = useState(0)
    const [ bananas, setBananas ] = useState(0)
    const [ apples, setApples ] = useState(0)
    const [ kiwi, setKiwi ] = useState(0)


    function resetButton () {
        setStrawberries(0)
        setKiwi(0)
        setApples(0)
        setBananas(0)
    }

    const { handleSubmit, formState: { errors }, register, watch } = useForm();

    const selectedReferrer = watch('found-through');

    function onFormSubmit (data) {
        console.log(data)
    }

  return (
    <>
        <div className="titel">
                <h1>Fruitmand bezorgservice</h1>
                <p>Je mag toch niet naar buiten</p>
        </div>

        <h1>Aardbijen
            <button
                type="submit"
                name="plusButton"
                value={strawberries}
                onClick={()=> setStrawberries(strawberries + 1)}>+
            </button>
            {strawberries}
            <button
                type="submit"
                name="plusButton"
                value={strawberries}
                onClick={()=> strawberries>0?setStrawberries(strawberries -1):strawberries}>-</button>
        </h1>

        <h1>Bananen
            <button
                type="submit"
                name="plusButton"
                value={bananas}
                onClick={()=> setBananas(bananas + 1)}>+
            </button>
            {bananas}
            <button
                type="submit"
                name="plusButton"
                value={bananas}
                onClick={()=> bananas>0?setBananas(bananas -1):bananas}>-</button>
        </h1>

        <h1>Appels
            <button
                type="submit"
                name="plusButton"
                value={apples}
                onClick={()=> setApples(apples + 1)}>+
            </button>
            {apples}
            <button
                type="submit"
                name="plusButton"
                value={apples}
                onClick={()=> apples>0?setApples(apples -1):apples}>-</button>
        </h1>

        <h1>Kiwi
            <button
                type="submit"
                name="plusButton"
                value={kiwi}
                onClick={()=> setKiwi(kiwi + 1)}>+
            </button>
            {kiwi}
            <button
                type="submit"
                name="plusButton"
                value={kiwi}
                onClick={()=> kiwi>0?setKiwi(kiwi -1):kiwi}>-</button>
        </h1>
        <button
                type="submit"
                name="reset"
                onClick={()=>resetButton()}

        >Reset</button>

        <form onSubmit={handleSubmit(onFormSubmit)}>
            <div>
                Voornaam <input
                type="text"
                {...register("firstName", {
                    required:true,
                    })}
            />{errors.firstName && errors.firstName.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
            </div>
            <div>
                Achternaam <input
                    type="text"
                    {...register("lastName",{
                        required: true,
                    })}
                    />{errors.lastName && errors.lastName.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
            </div>
            <div>
                Leeftijd <input
                    type="text"
                    {...register("age",{
                        required: true,
                    })}
                    />{errors.age && errors.age.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
            </div>
            <div>
                Postcode <input
                    type="text"
                    {...register("postCode", {
                        required:true,
                    })}
                    /> {errors.postCode && errors.postCode.type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
            </div>


            <label>
                    <h3>Bezorgfrequentie</h3>

            <input
                    type="checkbox"
                    {...register("Iedere week")}
                    /> Iedere week
            <input
                    type="checkbox"
                    {...register("Om de week")}
                    /> Om de week
            <input
                type="checkbox"
                {...register("Iedere maand")}
            /> Iedere maand
            <input
                type="checkbox"
                {...register("anders")}
            /> Anders
        </label>

            <h3>Opmerkingen</h3>
            <textarea cols="30" rows="20"
                {...register("opmerkingen", {
                    required: true
                }   )}/>{errors.opmerkingen && errors.opmerkingen.type === "required" && <span className="errorMessage">Dit veld is verplicht</span>}

            <div>
            <input type="checkbox"
                   {...register("check", {
                       required:true
                       })}/>Ik ga akkoord met de voorwaarden {errors.check && errors.check.type === "required" && <span className="errorMessage"> Dit veld is verplicht</span>}
            </div>
            <div>
            <input type="submit"/>
            </div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>


        </form>
    </>
  );
}

export default App;
