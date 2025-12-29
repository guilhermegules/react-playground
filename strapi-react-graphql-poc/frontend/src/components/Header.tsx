import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { CATEGORIES } from "../graphql/category/categories";
import { Categories } from "../types/Category";

const Header = () => {
  const { data, loading, error } = useQuery<Categories>(CATEGORIES);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error D:</p>;

  return (
    <header className="main-header">
      <Link to="/">
        <p>Reviews</p>
      </Link>
      <nav className="categories">
        <span>Filter reviews by category:</span>
        {data?.categories.data.map((category) => (
          <Link key={category.id} to={`/category/${category.id}`}>
            {category.attributes.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
