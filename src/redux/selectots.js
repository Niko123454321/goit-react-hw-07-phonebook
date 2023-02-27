export const getAllContacts = store => store.contacts;
export const getFilter = ({ filter }) => filter;
export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts;
  }
  const normalizFilter = filter.toLowerCase();
  const result = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizFilter);
  });
  return result;
};
