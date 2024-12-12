import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Post4() {
  return (
    <Card className='mb-5' style={{ width: '100%'}}>
      <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1677706393878-fd124fdae8f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>Computer Network</Card.Title>
        <Card.Text>
        Despite its quirks, JavaScript's ubiquity and versatility make it an essential skill for developers. Whether you're building a simple interactive webpage or a complex single-page application, JavaScript has the tools to bring your ideas to life.
        </Card.Text>
        <Button variant="primary">Select</Button>
      </Card.Body>
    </Card>
  );
}

export default Post4;