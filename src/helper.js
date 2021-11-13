export const languages = [
  "For You",
  "Hindi",
  "Tamil",
  "Telugu",
  "English",
  "Punjabi",
  "Marathi",
  "Gujarati",
  "Bengali",
  "Kannada",
  "Bhojpuri",
  "Malayalam",
  "Urdu",
  "Haryanvi",
  "Rajasthani",
  "Odia",
  "Assamese",
];

export const truncate = (string, n) => {
  return string?.length > n ? string.substr(0, n - 1) + "..." : string;
};
