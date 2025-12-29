import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { REVIEW } from "../graphql/review/review";
import { ReviewGQL } from "../types/Review";

const ReviewDetails = () => {
  const { id } = useParams();

  const { data, error, loading } = useQuery<ReviewGQL>(REVIEW, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error D:</p>;

  console.log(data);

  return (
    <div className="review-card">
      <div className="rating">{data?.review.data.attributes.rating}</div>
      <h2>{data?.review.data.attributes.title}</h2>
      <small>Console list</small>
      <p>{JSON.stringify(data?.review.data.attributes.body)}</p>
    </div>
  );
};

export default ReviewDetails;
