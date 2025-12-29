import { Link } from "react-router-dom";
import { ReviewsGQL } from "../types/Review";
import { useQuery } from "@apollo/client";
import { REVIEWS } from "../graphql/review/reviews";
import ReactMarkdown from "react-markdown";

const Home = () => {
  const { loading, error, data } = useQuery<ReviewsGQL>(REVIEWS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error D:</p>;

  return (
    <div>
      {data?.reviews.data.map((review) => (
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

export default Home;
