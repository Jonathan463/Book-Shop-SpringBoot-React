import React, {Component} from 'react';
import {Button, Card, Col, Form, Row, Toast} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare, faSave, faUndo} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import {MyToast} from "./MyToast";

export default class Book extends Component{
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
    }
    initialState = {
        title:'', author:'', coverPhotoURL:'', isbnNumber:'', price:'', language:''
    }
    submitBook = event =>{
        event.preventDefault();

        const book = {
                Title: this.state.title,
                author: this.state.author,
                coverPhotoURL: this.state.coverPhotoURL,
                isbnNumber: this.state.isbnNumber,
                price: this.state.price,
                language: this.state.language
        };

              axios.post("https://localhost:8081/rest/books",book)
                  .then(response =>{
                      if(response.data != null){
                          this.setState({"show":true});
                          setTimeout(() => this.setState({"show":false}), 3000);
                      }
                      else{
                          this.setState({"show" : false});
                      }
                  })
        this.setState(this.initialState);
    }

    resetBook = () => {
        this.setState(() => this.initialState);
    }


    //this method is used to prevent the values from displaying on the url
    bookChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    render(){
        const {title, author, coverPhotoURL, isbnNumber,price, language} = this.state;
        return(
            <div>
                <div style={{"display": this.state.show ? "block" : "none"}}>
                    <MyToast children = {{show:this.state.show, message:"Book Saved Successfully."}}/>
                </div>
                <Card className={"border border-dark bg-white text-white"}>
                    <Card.Header className={"text-dark"}><FontAwesomeIcon icon={faPlusSquare} />Add Book</Card.Header>
                    <Form onReset={this.resetBook} onSubmit={this.submitBook} id="bookFormId">
                        <Card.Body>
                            <Row>
                                <Form.Group as={Col} controlId="formGridTitle">
                                    <Form.Label className={"text-dark"}>Title</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text"
                                                  placeholder="Enter Title" name="title" value={title} onChange={this.bookChange}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridAuthor">
                                    <Form.Label className={"text-dark"}>Author</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text"
                                                  placeholder="Enter Author"
                                                  name="author" value={author} onChange={this.bookChange}
                                    />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} controlId="formGridCoverPhotoURL">
                                    <Form.Label className={"text-dark"}>Cover Photo URL</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text"
                                                  placeholder="Enter Book Cover Photo URL"
                                                  name="coverPhotoURL" value={coverPhotoURL} onChange={this.bookChange}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridISBNNumber">
                                    <Form.Label className={"text-dark"}>ISBN Number</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text"
                                                  placeholder="Enter Book ISBN Number"
                                                  name="isbnNumber" value={isbnNumber} onChange={this.bookChange}/>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} controlId="formGridPrice">
                                    <Form.Label className={"text-dark"}>Price</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text"
                                                  placeholder="Enter Book Price"
                                                  name="price" value={price} onChange={this.bookChange}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridLanguage">
                                    <Form.Label className={"text-dark"}>Language</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text"
                                                  placeholder="Enter Book Language"
                                                  name="language" value={language} onChange={this.bookChange}/>
                                </Form.Group>
                            </Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>>
                            <Button variant="primary" type="submit">
                                <FontAwesomeIcon icon={faSave} />Submit
                            </Button>{' '}
                            <Button variant="primary" type="reset">
                                <FontAwesomeIcon icon={faUndo} /> Reset
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>



        );
    }
}