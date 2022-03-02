import { Card} from 'react-bootstrap';
import{connect} from 'react-redux';

type CantidadProps = {
    unidades: string,
};

const CantidadPokemon = (props: CantidadProps): React$Element<any> => {
    return (
        <>
<Card className="text-white bg-info overflow-hidden">
<Card.Body>
    <div className="toll-free-box text-center">
        <h4>
        Unidades: {props.unidades}
            <i className="mdi mdi-deskphone"></i> {props.value}
        </h4>
    </div>
</Card.Body>
</Card>
</>
    );
};

const mapStateToPropos=(state)=>{
    return{
        game_shop:state.game_shop
    }
}

export default connect(mapStateToPropos)(CantidadPokemon);