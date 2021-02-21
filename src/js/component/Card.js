import { React, useContext } from "react";
import Context from '../store/appContext';
import { useParams } from "react-router-dom";

const Card = () => {
    const [store, actions] = useContext(Context);
    const params = useParams();

    return (
        <div>
            <h1>Characters</h1>
            <div className="row p-2 w-6">
                {!!store.characters && store.characters.map((character, index) => {
                    return (
                        <div key={index} className="card col-3" style="width: 18rem;">
                            <img clasName="card-img-top" src="https://via.placeholder.com/800x600" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <ul key={index} className="characters">
                                    <li>Gender: {character.gender}</li>
                                    <li>Eye color: {character.eye_color}</li>
                                    <li>Hair color: {character.hair_color}</li>
                                </ul>
                                <a href="#" className="btn btn-outline-primary">Learn more!</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        // <div className="card col-3" style="width: 18rem;">
        //     <img clasNames="card-img-top" src="https://via.placeholder.com/800x600" alt="Card image cap" />
        //     <div className="card-body">
        //         <h5 className="card-title">Card title</h5>
        //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
        //         {!!store.characters && store.characters.map((character, index) => {
        //             return (
        // <ul key={index} className="characters">
        //     <li>Gender: {character.gender}</li>
        //     <li>Eye color: {character.eye_color}</li>
        //     <li>Hair color: {character.hair_color}</li>
        // </ul>
        //             );
        //         })}
        //         <a href="#" className="btn btn-outline-primary">Learn more!</a>
        //     </div>
        // </div>
    );
};