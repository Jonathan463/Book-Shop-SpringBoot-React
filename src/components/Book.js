import React, {Component} from 'react';
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare, faSave} from '@fortawesome/free-solid-svg-icons';

export default class Book extends Component{
    constructor(props) {
        super(props);
        this.state = {title:'', author:'', coverPhotoURL:'', isbnNumber:'', price:'', language:''};
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
    }
    submitBook(event){
        alert('Title: '+this.state.title+', Author: '+this.state.author+', Cover Photo URL: '+this.state.coverPhotoURL+", ISBN Number: "+this.state.isbnNumber+', Price: '+this.state.price+", Language: "+this.state.language);
        event.preventDefault();
    }
    //this method is used to prevent the values from displaying on the url
    bookChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    render(){
        const {title, author, coverPhotoURL, isbnNumber,price, language} = this.state;
        return(
            <Card className={"border border-dark bg-white text-white"}>
                <Card.Header className={"text-dark"}><FontAwesomeIcon icon={faPlusSquare} />Add Book</Card.Header>
                <Form onSubmit={this.submitBook} id="bookFormId">
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
                                   name="author" value={this.state.author} onChange={this.bookChange}
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
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        );
    }
}