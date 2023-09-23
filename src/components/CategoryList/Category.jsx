import PropTypes from 'prop-types';

const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="p-12 bg-violet-50 rounded-lg">
      <div className="p-4 bg-violet-100 w-16 rounded-lg mb-8">
        <img className='h-10 w-10 ' src={logo} alt={category_name} />
      </div>
      <h2 className="text-xl font-extrabold text-gray-800 mb-1">{category_name}</h2>
      <p className="font-medium">{availability}</p>
    </div>
  );
};
Category.propTypes = {
    category: PropTypes.object.isRequired,
}
export default Category;
