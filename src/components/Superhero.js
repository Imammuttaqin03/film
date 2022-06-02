import { Card, Container, Row, Col, Image} from "react-bootstrap"
import antmanImage from "../assets/images/trending/antman.jpg"
import batmanImage from "../assets/images/trending/batman.jpg"
import captainImage from "../assets/images/trending/captain.jpg"
import infinitywarImage from "../assets/images/trending/Infinitywar.jpeg"
import spidermanImage from "../assets/images/trending/spiderman.jpg"
import supermanImage from "../assets/images/trending/superman.jpg"

const Superhero = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={antmanImage} alt="Antman Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">ANTMAN</Card.Title>
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
                            <Image src={batmanImage} alt="Batman Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">THE BATMAN</Card.Title>
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
                            <Image src={captainImage} alt="Captain America Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">CAPTAIN AMERICA</Card.Title>
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
                            <Image src={infinitywarImage} alt="Infinity War Movies" className="images"/>
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
                            <Image src={spidermanImage} alt="Spiderman Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">SPIDERMAN</Card.Title>
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
                            <Image src={supermanImage} alt="Superman Movies" className="images"/>
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

export default Superhero