import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Post2() {
  return (
    <Card className='mb-5' style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1733986711401-b52b6b7a886a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>Data Structure</Card.Title>
        <Card.Text>
        Modern JavaScript has grown beyond its original purpose. Frameworks and libraries like React, Angular, and Vue.js make it easier to build scalable and maintainable applications. Additionally, Node.js allows developers to use JavaScript on the server side, enabling full-stack development with a single language.
        </Card.Text>
        <Button variant="primary">Select</Button>
      </Card.Body>
    </Card>
  );
}

export default Post2;