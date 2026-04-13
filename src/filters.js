export function formattedRating(rating) {
  if (!rating && rating !== 0) return "0.0";
  return rating.toFixed(1).toString();
}
