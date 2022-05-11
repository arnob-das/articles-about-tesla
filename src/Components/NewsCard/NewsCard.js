import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './NewsCard.css';

const NewsCard = (props) => {
    const { title, content, urlToImage, url } = props.news

    return (
        <Col className="col">
            <Card>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{content}</Card.Text>
                    <Button className="btn btn-primary">
                        <a className="text-white"
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Full News
                        </a>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default NewsCard;