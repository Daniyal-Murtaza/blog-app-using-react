import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Post3() {
  return (
    <Card className='mb-5' style={{ width: '100%'}}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>Algorithm</Card.Title>
        <Card.Text>
        Features like asynchronous programming (via promises and async/await), modular coding, and integration with APIs make JavaScript incredibly powerful. It continues to evolve, with updates through ECMAScript (ES) standards, adding features like optional chaining, destructuring, and arrow functions.
        </Card.Text>
        <Button variant="primary">Select</Button>
      </Card.Body>
    </Card>
  );
}

export default Post3;