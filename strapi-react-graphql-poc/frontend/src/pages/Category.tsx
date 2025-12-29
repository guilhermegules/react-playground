import { useQuery } from "@apollo/client";
import { CATEGORY } from "../graphql/category/category";
import { Link, useParams } from "react-router-dom";
import { CategoryWithReview } from "../types/Category";
import ReactMarkdown from "react-markdown";

const Category = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery<CategoryWithReview>(CATEGORY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error D:</p>;

  return (
    <div>
      <h2>{data?.category.data.attributes.name}</h2>
      {data?.category.data.attributes.reviews.data.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>

          {review.attributes.categories.data.map((category) => (
            <small key={category.id}>{category.attributes.name}</small>
          ))}

          <ReactMarkdown>
            {review.attributes.body
              .flatMap((b) => b.children.map((c) => c.text))
              .join("")
              .substring(0, 200) + "..."}
          </ReactMarkdown>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
