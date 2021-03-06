import React, {Component} from 'react';
import {Col, Container, Navbar} from "react-bootstrap";
import Welcome from "./Welcome";

export default class Footer extends Component{

    render() {
        let fullYear = new Date().getFullYear();
        return(
            <Navbar bg="dark" fixed="bottom" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>
                            {fullYear}, All Rights Reserved by Godson Jonathan
                        </div>
                    </Col>
                </Container>
            </Navbar>
        )
    }
}