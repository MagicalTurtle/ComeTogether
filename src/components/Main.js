import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Rowm, Col, Image } from 'react-bootstrap'
import pfpImage from '../assets/PFP_TEST.png';
import AlbumImage from '../assets/ALBUM_TEST.png';

const Main = () => {
    return (
        
        <div className="MainStyle">
            <div class="card">
                    <div class="card-body" className='UserCard'>
                    <div className='PFP'>
                        <img src={ pfpImage } className="round-img"/>
                    </div>
                    <h5 class="card-title">MagpieMan43</h5>
                    <div className="AboutUser">
                    <p style={{margin: "0", display: "inline"}}>Beatle</p>
                    <p style={{margin: "0", display: "inline", padding: "5px"}}> - </p>
                    <p style={{margin: "0", display: "inline", align:"right"}}>Psychedelic Rock</p>
                    </div>
                    </div>
            </div>
            <div className="StatCards">
                <div class="card-columns custom-columns">
                    <div class="card">
                        <div className="AlbumImageStyle">
                            <img class="card-img-top" src={ AlbumImage } alt="Card image cap"/>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title" style={{textAlign: "Center"}}>Top Songs</h5>
                        <p class="card-text">1.Come Together</p>
                        <p class="card-text"><small class="text-muted">Last 6 Weeks</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <div className="AlbumImageStyle">
                            <img class="card-img-top" src={ AlbumImage } alt="Card image cap"/>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title" style={{textAlign: "Center"}}>Top Artists</h5>
                        <p class="card-text">1.The Beatles</p>
                        <p class="card-text"><small class="text-muted">Last 6 Weeks</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <div className="AlbumImageStyle">
                            <img class="card-img-top" src={ AlbumImage } alt="Card image cap"/>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title" style={{textAlign: "Center"}}>Top Albums</h5>
                        <p class="card-text">1. Abby Road</p>
                        <p class="card-text"><small class="text-muted">Last 6 Weeks</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main