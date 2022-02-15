import React, {Component} from 'react';
import {Button, Card, Col, Form} from "react-bootstrap";

export default class Book extends Component{
    render(){
        return(
            <Card className={"border border-dark bg-white text-white"}>
                <Card.Header>Add Book</Card.Header>
                <Form>
                <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="test" className={"bg-white text-dark"} placeholder="Enter Book Title" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="test" className={"bg-white text-dark"} placeholder="Enter Book Title" />
                            </Form.Group>
                        </Form.Row>
                </Card.Body>
                <Card.Footer style={{"textAlign":"right"}}>
                    <Button size="sm" variant="success" type="submit">
                        Submit
                    </Button>
                </Card.Footer>
            </Form>
            </Card>
        );
    }
}