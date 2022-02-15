import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import {Col, Container, Row} from "react-bootstrap";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Book from "./components/Book";
import BookList from "./components/BookList";



function App() {
    const marginTop ={
        marginTop:"120"
    }

  return (
    <Router>
        <NavigationBar/>
        <Container>
            <Row>
                <Col lg={12} style={marginTop}>
                    <Routes>
                        <Route path="/"  element={<Welcome/>}/>
                        <Route path="/add" element={<Book/>}/>
                        <Route path="/list" element={<BookList/>}/>
                    </Routes>
                    {/*<Welcome/>*/}
                    {/*<Book/>*/}
                    {/*<BookList/>*/}
                </Col>
            </Row>
        </Container>
        <Footer/>
    </Router>
  );
}

export default App;
