import React, {Component} from 'react';
import {Button, Card, Col, Form, Row} from "react-bootstrap";

export default class Book extends Component{
    render(){
        return(
            <Card className={"border border-dark bg-white text-white"}>
                <Card.Header className={"text-dark"}>Add Book</Card.Header>
                <Form>
                    <Card.Body>
                       <Row>
                           <Form.Group as={Col}>
                               <Form.Label>Title</Form.Label>
                               <Form.Control type="text" placeholder="Enter Title" />
                           </Form.Group>
                           <Form.Group as={Col}>
                               <Form.Label>Author</Form.Label>
                               <Form.Control type="text" placeholder="Enter Author" />
                           </Form.Group>
                       </Row>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        );
    }
}