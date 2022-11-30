import React from 'react';
import Card from 'react-bootstrap/Card';

class Fruits extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <Card>
                <Card.Img variant="top" src={data.url} />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                </Card.Body>
            </Card>

        );
    }
}

export default Fruits;