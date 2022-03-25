const formatNumber = (x): String => {
  if (!x) { return null }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const formatDateTime = (x): String => {
  if (!x) { return null }
  return new Date(x).toLocaleString();
};

export {
  formatNumber,
  formatDateTime
};
