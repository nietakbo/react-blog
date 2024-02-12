import Posts from '../../features/Posts/Posts';

const Home = () => {
    
    return (
        <div>
            <div>
                <h1>All posts</h1>
            </div>
            <div className='d-flex justify-content-between'>
            <Posts />
            </div>
        </div>
    );
  };
  export default Home;