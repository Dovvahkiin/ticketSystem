const formatDate = (date) => {
  const today = new Date(date);

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");

  const finalDate = `${day}-${month}-${year} | ${hours}:${minutes}`;

  return finalDate;
};
