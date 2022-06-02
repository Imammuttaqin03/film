import { Card, Container, Row, Col, Image} from "react-bootstrap"
import blackpantherImage from "../assets/images/trending/blackpanther.png"
import sonicImage from "../assets/images/trending/sonic.jpg"
import fastfuriousImage from "../assets/images/trending/fastfurious.jpg"
import infinitywarImage from "../assets/images/trending/Infinitywar.jpeg"
import nunImage from "../assets/images/trending/nun.jpg"
import supermanImage from "../assets/images/trending/superman.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={blackpantherImage} alt="Black Panther Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">THE BLACK PANTHER</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={sonicImage} alt="Sonic Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">SONIC THE HEDGHEOG</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={fastfuriousImage} alt="Fast & Furious Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">FAST AND FURIOUS</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={infinitywarImage} alt="Antman Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">INFINITY WAR</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={nunImage} alt="The Nun Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">THE NUN</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={supermanImage} alt="Antman Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">SUPERMAN</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending