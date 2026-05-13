import { reviews } from "./reviews";

const positiveReviews = reviews.filter(
  (review) => review.sentiment === "positive"
);

const negativeReviews = reviews.filter(
  (review) => review.sentiment === "negative"
);

const issuesCount: Record<string, number> = {};

reviews.forEach((review) => {
  issuesCount[review.issue] =
    (issuesCount[review.issue] || 0) + 1;
});

const mainIssue =
  Object.entries(issuesCount).sort(
    (a, b) => b[1] - a[1]
  )[0][0];

const totalRating =
  reviews.reduce((acc, review) => acc + review.rating, 0);

const reputationScore =
  totalRating / reviews.length;

export const analytics = {
  totalReviews: reviews.length,

  positivePercentage: Math.round(
    (positiveReviews.length / reviews.length) * 100
  ),

  negativePercentage: Math.round(
    (negativeReviews.length / reviews.length) * 100
  ),

  mainIssue,

  reputationScore:
    reputationScore.toFixed(1),
};