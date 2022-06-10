import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FacebookForm from './components/Form';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from "react-helmet";


function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{"body { background-color: #f0f2f5; }"}</style>
      </Helmet>
    <Container>
      <Row>
        <Col>
        <Banner/>
        </Col>
        <Col>
        <FacebookForm/>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
