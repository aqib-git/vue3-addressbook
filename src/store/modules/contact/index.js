import _ from 'lodash';

const loadCachedState = () => {
  const contacts = window.localStorage.getItem('contacts');

  if (!contacts) {
    return [];
  }

  try {
    return JSON.parse(contacts);
  } catch (e) {
    console.log(e.message);
  }

  return [];
};

export default {
  namespaced: true,
  state: () => ({
    contacts: loadCachedState(),
  }),
  getters: {
    contacts(state) {
      return state.contacts;
    },
    newContactId(state) {
      let maxId = 0;
      const { contacts } = state;

      for (let i = 0; i < contacts.length; i += 1) {
        if (contacts[i].id > maxId) {
          maxId = contacts[i].id;
        }
      }

      return maxId + 1;
    },
  },
  actions: {
    createContact({ commit }, data) {
      commit('createContact', data);
    },
    updateContact({ commit }, data) {
      commit('updateContact', data);
    },
    deleteContact({ commit }, data) {
      commit('deleteContact', data);
    },
  },
  mutations: {
    createContact(state, data) {
      state.contacts = [...state.contacts, data];

      window.localStorage.setItem(
        'contacts',
        JSON.stringify(state.contacts),
      );
    },
    updateContact(state, data) {
      const index = _.findIndex(state.contacts, { id: data.id });
      const { contacts } = state;

      contacts[index] = data;

      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    },
    deleteContact(state, data) {
      state.contacts = state.contacts
        .filter((c) => c.id !== parseInt(data.id, 10));

      window.localStorage.setItem(
        'contacts',
        JSON.stringify(state.contacts),
      );
    },
  },
};
