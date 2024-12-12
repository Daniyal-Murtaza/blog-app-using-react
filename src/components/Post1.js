import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Post1() {
  return (
    <Card className='my-5' style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1733888749404-20cf6133e1b1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100px180" />
      <Card.Body>
        <Card.Title>Javascript</Card.Title>
        <Card.Text>
        JavaScript (JS) is a high-level, versatile programming language primarily used to create interactive and dynamic web content. Introduced in 1995, it has become a cornerstone of web development, alongside HTML and CSS. JS enables developers to implement complex features on web pages, such as real-time updates, form validations, and multimedia controls.
        </Card.Text>
        <Button variant="primary">Select</Button>
      </Card.Body>
    </Card>
  );
}

export default Post1;