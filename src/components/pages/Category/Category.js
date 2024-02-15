import { useSelector } from 'react-redux';
import { getPostsByCategory } from '../../../redux/postsRedux';
import { useParams } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const Category = () => {
  const category = useParams();
  const posts = useSelector(state => getPostsByCategory(state, category));
  return (
    <>
      <h2>Category: {category.name} </h2>
      <div className='d-flex flex-wrap '>
        {posts.map(post => (
          <SinglePost {...post} />
        ))}
      </div>
    </>
  );
};
export default Category;