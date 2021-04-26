export const sortByName = (array, orderIsAsc) =>
  array.sort((item, itemNext) =>
    orderIsAsc
      ? item.name.localeCompare(itemNext.name)
      : itemNext.name.localeCompare(item.name)
  );
