import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Row, Col, Image, CardDeck, Card } from 'react-bootstrap'
import pfpImage from '../assets/PFP_TEST.png';
import AlbumImage from '../assets/ALBUM_TEST.png';

const BasicStats = () => {
    return (
        
        <div className="BasicStyle">
            <Row className="justify-content-md-center animate__animated animate__slideInLeft" style={{overflow : "hidden"}}>
            <Col xs lg="20" >
            <div class="card shadow-lg" className='UserCard'>
                    <div class="card-body">
                    <div className='PFP'>
                        <img src={ pfpImage } alt='' className="round-img"/>
                    </div>
                    <div className="AboutUser">
                    <h5 class="card-title" style={{fontFamily : "Lato-Bold", fontSize : "1.4rem", display: "inline"}}>MagpieMan43</h5>
                    <p style={{margin: "0", display: "inline", padding: "5px"}}> - </p>
                    <p style={{margin: "0", display: "inline"}}>Da Beatles</p>
                    <p style={{margin: "0", display: "inline", padding: "5px"}}> - </p>
                    <p style={{margin: "0", display: "inline", align:"right"}}>Psychedelic Rock</p>
                    </div>
                    </div>
            </div>
            </Col>
            </Row>
            <div className="CardDiv animate__animated animate__slideInRight">
            <CardDeck className="justify-content-md-center " style={{overflow : "hidden"}}> 
                <Card className="CardStats">
                    <Card.Img variant="top" src={ AlbumImage } style={{padding : "5px"}} />
                    <Card.Body>
                    <Card.Title>Top Songs</Card.Title>
                    <Card.Text>
                        <p>
                        1. Come Together - The Beatles
                        </p>
                        <p>
                        2. Come Together - The Beatles
                        </p>
                        <p>
                        3. Come Together - The Beatles
                        </p>
                        <p>
                        4. Come Together - The Beatles
                        </p>
                        <p>
                        5. Come Together - The Beatles
                        </p>
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
            </div>
        </div>
    )
}

export default BasicStats