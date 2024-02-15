import { useSelector } from 'react-redux';
import { getCategories } from '../../../redux/categoriesRedux';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const Categories = () => {
  const allCategories = useSelector(getCategories);

  return (
    <div className='mx-5'>
      <h2 className='mb-4'>All categories</h2>
      <ListGroup as='ul' className='d-flex flex-column w-100 d'>
        {allCategories.map(category => (
          <ListGroup.Item
            as={Link}
            key={category.id}
            to={`/category/${category.name}`}>
            <b>{category.name}</b>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
export default Categories;