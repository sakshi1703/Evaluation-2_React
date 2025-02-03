import { useState } from "react";


const Pokemon = ()=>{

    const [pokemon, setPokemon] = useState(null);
    const[search, setSearch] = useState("");
    const [Error, setError] = useState("");

    const handlefetch = async ()=>{
        const LowerSearch = search.toLowerCase();
        if(!LowerSearch){
            return;
        }

        try{
            console.log("fetching pokemon...")
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${LowerSearch}`);
            if(!res.ok){
                throw new Error("sorry! Pokemon not found")
            }
            const data = await res.json();
            console.log("fetched pokemon", data)
            setPokemon(data);
            setError("");
        }
        catch(err){
            console.log(("error fetching pokemon"))
            setPokemon(null);
            setError("Try Again")
        }

    }

    console.log("current pokemon", pokemon)
    return(
        <div>

            <div>
                <h1>Pokemon game</h1>
                <input type="text" placeholder="Enter Pokemon name" value={search} onChange={((e)=>setSearch(e.target.value))} />
                <button onClick={handlefetch}>Search</button>
            </div>

            {Error && <p>{Error}</p>}

            {pokemon && (
                <div>
                    <h2>{pokemon.species.name?.toUpperCase()} (ID: {pokemon.id})</h2>
                    <img src={pokemon.sprites?.front_default} />


                    <h3>Abilities:</h3>
                    <ul>
                        {pokemon.abilities.length > 0 ? (pokemon.abilities.map((i, ele)=>(
                            <li key={i}>{ele.ability.name}</li>
                        ))) : (
                            <li>No abilities Available</li>
                        )
                        
                        }
                    </ul>


                    <h3>Types:</h3>
                    <ul>
                        {pokemon.types?.length > 0?(
                            pokemon.types.map((i, ele)=>(
                            <li key={i}>{ele.types.type.name}</li>
                        ))) : (
                            <li>No types Available</li>
                        )
                         }
                    </ul>

                </div>
            )}

        </div>

        
        
    )


}

export default Pokemon;