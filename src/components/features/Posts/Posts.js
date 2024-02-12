import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import SinglePost from '../../pages/SinglePost/SinglePost';

const Posts = () => {
  const allPost = useSelector(getAllPosts);

  return (
    <>
    <div className='d-flex flex-wrap '>
      {allPost.map(post => (
        <SinglePost key={post.id} {...post} />
      ))}
    </div>
    </>
  );
};
export default Posts;