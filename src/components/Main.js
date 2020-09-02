import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Row, Col, Image, CardDeck, Card } from 'react-bootstrap'
import pfpImage from '../assets/PFP_TEST.png';
import AlbumImage from '../assets/ALBUM_TEST.png';

const Main = () => {
    return (
        
        <div className="MainStyle">
            <Row className="justify-content-md-center">
            <Col xs lg="10">
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
            </Col>
            </Row>
            <div className="CardDiv">
            <CardDeck className="justify-content-md-center">
                <Card className="CardStats">
                    <Card.Img variant="top" src={ AlbumImage } style={{padding : "5px"}} />
                    <Card.Body>
                    <Card.Title>Top Songs</Card.Title>
                    <Card.Text>
                        1. Come Together
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last 6 months</small>
                    </Card.Footer>
                </Card>
                <Card className="CardStats">
                    <Card.Img variant="top" src={ AlbumImage } style={{padding : "5px"}} />
                    <Card.Body>
                    <Card.Title>Top Albums</Card.Title>
                    <Card.Text>
                        1. Abby Road{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last 6 months</small>
                    </Card.Footer>
                </Card>
                <Card className="CardStats">
                    <Card.Img variant="top" src={ AlbumImage } style={{padding : "5px"}} />
                    <Card.Body>
                    <Card.Title>Top Artists</Card.Title>
                    <Card.Text>
                        1. Beatles
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last 6 months</small>
                    </Card.Footer>
                </Card>
                </CardDeck>


{/*                 
                <div class="card-columns custom-columns" className="justify-content-md-center">
                    <div class="card" style={{maxWidth : "33%"}}>
                        <div className="AlbumImageStyle">
                            <img class="card-img-top" src={ AlbumImage } alt="Card image cap"/>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title" style={{textAlign: "Center"}}>Top Songs</h5>
                        <p class="card-text">1.Come Together</p>
                        <p class="card-text"><small class="text-muted">Last 6 Weeks</small></p>
                        </div>
                    </div>
                    <div class="card" style={{maxWidth : "33%"}}>
                        <div className="AlbumImageStyle">
                            <img class="card-img-top" src={ AlbumImage } alt="Card image cap"/>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title" style={{textAlign: "Center"}}>Top Artists</h5>
                        <p class="card-text">1.The Beatles</p>
                        <p class="card-text"><small class="text-muted">Last 6 Weeks</small></p>
                        </div>
                    </div>
                    <div class="card" style={{maxWidth : "33%"}}>
                        <div className="AlbumImageStyle">
                            <img class="card-img-top" src={ AlbumImage } alt="Card image cap"/>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title" style={{textAlign: "Center"}}>Top Albums</h5>
                        <p class="card-text">1. Abby Road</p>
                        <p class="card-text"><small class="text-muted">Last 6 Weeks</small></p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Main