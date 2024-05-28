import { categoriesData } from "../data/CategoriesData";

const Categories = () => {
  return (
    <div className="categories py-10">
      <div className="container mx-auto w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoriesData.map((category) => (
            <div
              key={category.id}
              className="category relative overflow-hidden group"
            >
              <img
                src={category.img}
                alt={category.title}
                className="w-full h-full object-cover max-w-full transition-transform duration-300 transform hover:scale-105"
              />
              <h3 className="absolute bottom-0 left-0 w-full text-white text-center bg-black bg-opacity-70 py-2 transform transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
