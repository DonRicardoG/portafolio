export const dateformat = (date) => {
  const newDate = new Date(date);

  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return newDate.toLocaleDateString("en-En", options);
};
