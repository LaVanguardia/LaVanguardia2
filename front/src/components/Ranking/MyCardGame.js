import React from 'react';
import './MyCardGame.scss';
import {Link} from 'react-router-dom';

const MyCardGame = (props) => {
    return (
        <div className="col-9 col-md-3 MyCardGame">
            <div className="row imgGame">
                <img src={props.imgGame} alt={props.gameName} />
            </div>
            <div className="row dateAndScore">
                {props.record === 0
                    ? <div className="col-12">
                        <p>Todavía no has jugado...</p>
                    </div>
                    : <>
                        <div className="col-12 col-lg-6 record">
                            <p>{`Récord: ${props.record} pts`}</p>
                        </div>
                        <div className="col-12 col-lg-6 date">
                            <p>{props.date}</p>
                        </div>
                    </>
                }
            </div>
            <div className="row justifyCenter">
                <Link to={props.linkToPlay}>
                    <p className="buttonPlay">Juega ahora!</p>
                </Link>
            </div>
        </div>
    )
}

export default MyCardGame;
