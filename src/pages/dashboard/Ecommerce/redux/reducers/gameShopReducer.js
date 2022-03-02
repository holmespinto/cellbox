import { Pokemoncomprar,Pokemonretornar } from "../actions/gameShopAction";

const default_game_shop={
    pokemon:0,
    game_shop:0
};
/*
const INIT_STATE = {
    user: api.getLoggedInUser(),
    loading: false,
};
const Auth = (state: State = INIT_STATE, action: AuthAction): any => {
*/


const game_shop=(state:state=default_game_shop,action)=>{
    switch(action.type){
        case Pokemoncomprar:{
            return{
                 ...state,
                 pokemon:state.pokemon - action.payload
            }
        }
        case Pokemonretornar:{
            return{
                ...state,
                pokemon: state.pokemon + action.payload
            }
        }
        default:return
    }
} 
 

export default game_shop;