import React, { useState } from 'react';
import './PersonalRanking.scss';
// Podiums images
import firstPodium from '../sharedImages/first.png';
import secondPodium from '../sharedImages/second.png';
import thirdPodium from '../sharedImages/third.png';
// Games images
import Nonogram from '../HomePage/imgmainPage/cardNonogram.jpg';
import OneToFifty from '../HomePage/imgmainPage/iframeOneToFifty.png';
import CityPlay from '../HomePage/imgmainPage/cityplaymini-100.png';
import Memory from '../HomePage/imgmainPage/cardMemoryGame.png';
import Snake from '../HomePage/imgmainPage/snake.png';
import Tickle from '../HomePage/imgmainPage/imagen_home_tt@2x.png';
import Geochallenge from '../HomePage/imgmainPage/imagen_home_gc@2x.png';
// Cards Games
import MyCardGame from './MyCardGame';

const PersonalRanking = () => {

    const [points, setPoints] = useState(25563);

    //Fetch para conseguir todas las puntuaciones
    const [allScores, setAllScores]= useState({
        Nonogram: 200,
        OneToFifty: 100,
        CityPlay: 50,
        Memory: 0,
        Snake: 90,
        Tickle: 16,
        Geochallenge: 0
    })

    //Ordenamos los juegos de mayor a menor puntuacion
    const allScoresSorted = (Object.keys(allScores).sort(function (a, b) { return allScores[a] - allScores[b] })).reverse()

    //Switch paramostrar las imagenes correspondientes en el podium
    const displayGameImg=(juego)=>{
        switch(juego){
            case 'Nonogram':
               return Nonogram;
            case 'OneToFifty':
                return OneToFifty;
            case 'CityPlay':
                return CityPlay;
            case 'Memory':
                return Memory;
            case 'Snake':
                return Snake;
            case 'Tickle':
                return Tickle;
            default:
                return Geochallenge;
        }
    }

    return (
        < div className="PersonalRanking">
            <div className="row records">
                <div className="col-12 textRecords">
                    <p>Tus récords</p>
                </div>
                <div className="col-12">
                    <div className="row justifyCenter">
                        <div className="col-4 col-md-2 columnPodium">
                            <div className="gameImage">
                                <img src={displayGameImg(allScoresSorted[2])} alt="thirdPodium" />
                            </div>
                            <div className="podium">
                                <img src={thirdPodium} alt="thirdPodium" />
                            </div>
                        </div>
                        <div className="col-4 col-md-2 columnPodium">
                            <div className="gameImage">
                                <img src={displayGameImg(allScoresSorted[0])} alt="firstPodium" />
                            </div>
                            <div className="podium">
                                <img src={firstPodium} alt="firstPodium" />
                            </div>
                        </div>
                        <div className="col-4 col-md-2 columnPodium">
                            <div className="gameImage">
                                <img src={displayGameImg(allScoresSorted[1])} alt="secondPodium" />
                            </div>
                            <div className="podium">
                                <img src={secondPodium} alt="secondPodium" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row yourGames">
                <div className="col-12 textYourGames">
                    <div className="row">
                        <div className="col-4 ">
                            <p>Tus juegos</p>
                        </div>
                        <div className="col-7 yourPoints">
                            <p>Tus puntos: <span className="points">{points}</span></p>
                        </div>
                    </div>
                </div>
                <div className="row cardGames">
                    <MyCardGame gameName={'Nonogram'} imgGame={Nonogram} record={allScores.Nonogram} date={'dd/mm/yy'} linkToPlay={'/nonogram'}/>
                    <MyCardGame gameName={'OneToFifty'} imgGame={OneToFifty} record={allScores.OneToFifty} date={'dd/mm/yy'} linkToPlay={'/OneToFifty'}/>
                    <MyCardGame gameName={'CityPlay'} imgGame={CityPlay} record={allScores.CityPlay} date={'dd/mm/yy'} linkToPlay={'/cityplay'}/>
                    <MyCardGame gameName={'Memory'} imgGame={Memory} record={allScores.Memory} date={'dd/mm/yy'} linkToPlay={'/MemoryGame'}/>
                    <MyCardGame gameName={'Snake'} imgGame={Snake} record={allScores.Snake} date={'dd/mm/yy'} linkToPlay={'/snake'}/>
                    <MyCardGame gameName={'Tickle'} imgGame={Tickle} record={allScores.Tickle} date={'dd/mm/yy'} linkToPlay={'/tacleclick'}/>
                    <MyCardGame gameName={'Geochallenge'} imgGame={Geochallenge} record={allScores.Geochallenge} date={'dd/mm/yy'} linkToPlay={'/geochallenge'}/>
                </div>
            </div>
        </div>
    )
}

export default PersonalRanking;