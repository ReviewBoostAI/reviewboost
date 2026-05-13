import { reviews } from "./reviews";

const issueCounts: Record<string, number> = {};

reviews.forEach((review) => {
  if (review.sentiment === "negative") {
    issueCounts[review.issue] =
      (issueCounts[review.issue] || 0) + 1;
  }
});

const sortedIssues = Object.entries(issueCounts).sort(
  (a, b) => b[1] - a[1]
);

const topIssue = sortedIssues[0];

export const priorityData = {
  issue: topIssue?.[0] || "No Issues",

  count: topIssue?.[1] || 0,

  severity:
    topIssue?.[1] >= 3
      ? "High"
      : topIssue?.[1] >= 2
      ? "Medium"
      : "Low",
};