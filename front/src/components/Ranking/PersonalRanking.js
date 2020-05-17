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
                                <img src={OneToFifty} alt="thirdPodium" />
                            </div>
                            <div className="podium">
                                <img src={thirdPodium} alt="thirdPodium" />
                            </div>
                        </div>
                        <div className="col-4 col-md-2 columnPodium">
                            <div className="gameImage">
                                <img src={Geochallenge} alt="firstPodium" />
                            </div>
                            <div className="podium">
                                <img src={firstPodium} alt="firstPodium" />
                            </div>
                        </div>
                        <div className="col-4 col-md-2 columnPodium">
                            <div className="gameImage">
                                <img src={Snake} alt="secondPodium" />
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
                    <MyCardGame gameName={'Nonogram'} imgGame={Nonogram} record={200} date={'dd/mm/yy'} linkToPlay={'/nonogram'}/>
                    <MyCardGame gameName={'OneToFifty'} imgGame={OneToFifty} record={40} date={'dd/mm/yy'} linkToPlay={'/OneToFifty'}/>
                    <MyCardGame gameName={'CityPlay'} imgGame={CityPlay} record={0} date={'dd/mm/yy'} linkToPlay={'/cityplay'}/>
                    <MyCardGame gameName={'Memory'} imgGame={Memory} record={0} date={'dd/mm/yy'} linkToPlay={'/MemoryGame'}/>
                    <MyCardGame gameName={'Snake'} imgGame={Snake} record={52} date={'dd/mm/yy'} linkToPlay={'/snake'}/>
                    <MyCardGame gameName={'Tickle'} imgGame={Tickle} record={100} date={'dd/mm/yy'} linkToPlay={'/tacleclick'}/>
                    <MyCardGame gameName={'Geochallenge'} imgGame={Geochallenge} record={90} date={'dd/mm/yy'} linkToPlay={'/geochallenge'}/>
                </div>
            </div>
        </div>
    )
}

export default PersonalRanking;