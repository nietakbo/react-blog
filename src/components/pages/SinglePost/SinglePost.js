import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SinglePost = props => {
  return (
    <Card style={{ width: '25rem' }} className='m-3'>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <b>Author:</b> {props.author}
          <br />
          <b>Published:</b> {props.publishedDate}
          <br />
          {props.shortDescription}
        </Card.Text>
        <Button as={Link} to={`/post/${props.id}`} variant='primary'>
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
};
export default SinglePost;