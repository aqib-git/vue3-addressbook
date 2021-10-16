<template>
  <div class="home-view mt-5">
    <div class="container">
      <div class="d-flex justify-content-end mb-5">
        <button class="btn btn-primary" @click="createContact">Create Contact</button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(contact, index) in contacts" :key="contact.id">
            <th scope="row">{{index + 1}}</th>
            <td>{{ contact.firstName }}</td>
            <td>{{ contact.lastName }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.phone}} </td>
            <th>
              <button
                class="btn btn-light" @click="() => editContact(contact.id)">Edit</button>
              <button
                class="btn btn-danger ml-5" @click="() => deleteContact(contact.id)">Delete</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  mounted() {
  },
  methods: {
    createContact() {
      this.$router.push({ name: 'createContact' });
    },
    editContact(id) {
      this.$router.push({ name: 'editContact', params: { id } });
    },
    deleteContact(id) {
      this.$store.dispatch('contact/deleteContact', { id });
    },
  },
  computed: {
    ...mapGetters('contact', [
      'contacts',
      'newContactId',
    ]),
  },
  watch: {
    contacts(from, to) {
      console.log(from, to);
    },
  },
};
</script>
