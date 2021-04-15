const formatNumber = (x) => {
    if (!x) { return null }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const formatDateTime = (x) => {
    if (!x) { return null }
    return new Date(x).toLocaleString();
  };

module.exports = {
    formatNumber,
    formatDateTime
};
