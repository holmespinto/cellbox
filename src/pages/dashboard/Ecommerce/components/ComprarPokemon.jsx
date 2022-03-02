import { Card,Button,} from 'react-bootstrap';
import {connect} from 'react-redux';
import{Pokemoncomprar,Pokemonretornar} from '../redux/actions/gameShopAction';
type CompraProps = {
    value: string,
    nombre: string,
};

const ComprarPokemon = (props: CompraProps): React$Element<any> => {
    return (
        <>
                <Card>
            <Card.Body> 
         <div className="button-list">
                            <Button variant={'secondary'} 
                            onClick={() => props.onClick(Pokemoncomprar(1,30))} 
                            >props.nombre</Button>
                            <Button variant={'success'} 
                             onClick={() => props.onClick(Pokemonretornar(2,3))} 
                             >Regresar</Button>
                     
                </div>
            </Card.Body>
        </Card>
        
</>
    );
};

const mapDispatchToProps = {
    Pokemoncomprar,
    Pokemonretornar
};

export default connect(null,mapDispatchToProps)(ComprarPokemon);