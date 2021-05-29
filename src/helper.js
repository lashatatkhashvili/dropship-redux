export const sortProducts = (sort, data) => {
  sort === "asc" && data.sort((a, b) => b.price - a.price);
  sort === "desc" && data.sort((a, b) => a.price - b.price);
  sort === "az" && data.sort((a, b) => (a.title > b.title ? 1 : -1));
  sort === "za" && data.sort((a, b) => (a.title > b.title ? -1 : 1));

  return data;
};

export const filterProducts = (filter, data) => {
  filter &&
    filter.value &&
    (data = data.filter((item) =>
      filter.type === "$"
        ? item.price >= filter.value[0] && item.price <= filter.value[1]
        : Math.round(item.price / 8) >= filter.value[0] &&
          Math.round(item.price / 8) <= filter.value[1]
    ));

  return data;
};
