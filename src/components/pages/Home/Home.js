import Posts from '../../features/Posts/Posts';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h2>All posts</h2>
                <Button as={Link} to={`/post/add`} variant='outline-primary'>Add post</Button>
            </div>
            <div className='d-flex justify-content-between'>
            <Posts />
            </div>
        </div>
    );
  };
  export default Home;