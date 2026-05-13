import { reviews } from "@/data/reviews";

export function calculateAnalytics() {

  const totalReviews = reviews.length;

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) /
    totalReviews;

  const positiveReviews = reviews.filter(
    (review) => review.sentiment === "positive"
  ).length;

  const negativeReviews = reviews.filter(
    (review) => review.sentiment === "negative"
  ).length;

  const positivePercentage = Math.round(
    (positiveReviews / totalReviews) * 100
  );

  const negativePercentage = Math.round(
    (negativeReviews / totalReviews) * 100
  );

  const issuesMap: Record<string, number> = {};

  reviews.forEach((review) => {

    if (!issuesMap[review.issue]) {
      issuesMap[review.issue] = 0;
    }

    issuesMap[review.issue]++;

  });

  const sortedIssues = Object.entries(issuesMap).sort(
    (a, b) => b[1] - a[1]
  );

  const topIssue = sortedIssues[0]?.[0] || "None";

  return {
    totalReviews,
    averageRating: averageRating.toFixed(1),
    positivePercentage,
    negativePercentage,
    topIssue,
  };
}