<template>
  <div class="home">
    <div class="container">
      <form>
        <div class="mb-3">
          <label for="firstName" class="col-form-label">First Name</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="Enter your first name"
            v-model="form.firstName">
        </div>
        <div class="mb-3">
          <label for="lastName" class="col-form-label">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Enter your last name"
            v-model="form.lastName">
        </div>
        <div class="mb-3">
          <label for="phoneNumber" class="col-sm-2 col-form-label">Phone Number</label>
          <input
            type="text"
            class="form-control"
            id="phoneNumber"
            placeholder="Enter your phone number"
            v-model="form.phone">
        </div>
        <div class="mb-3">
          <label for="email" class="col-form-label">Email</label>
          <input
            type="text"
            class="form-control"
            id="email" placeholder="email@example.com" v-model="form.email">
        </div>
        <div class="d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-primary mb-3"
            @click="() => action === 'create' ? createContact() : updateContact()">
            {{ actionText }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  props: {
    action: String,
    id: {
      type: Number,
      default: null,
    },
  },
  mounted() {
    this.loadContact();
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
    };
  },
  methods: {
    loadContact() {
      if (this.action === 'create') {
        return;
      }

      const contact = _.find(this.contacts, { id: this.id });

      if (!contact) {
        this.$router.push({ name: 'listContacts' });

        return;
      }

      this.form.firstName = contact.firstName;
      this.form.lastName = contact.lastName;
      this.form.email = contact.email;
      this.form.phone = contact.phone;
      this.form.id = contact.id;
    },
    createContact() {
      this.$store
        .dispatch('contact/createContact', { ...this.form, id: this.newContactId })
        .then(() => {
          this.$router.push({ name: 'listContacts' });
        });
    },
    updateContact() {
      this.$store
        .dispatch('contact/updateContact', { ...this.form })
        .then(() => {
          this.$router.push({ name: 'listContacts' });
        });
    },
  },
  computed: {
    newContactId() {
      return this.$store.getters['contact/newContactId'];
    },
    contacts() {
      return this.$store.getters['contact/contacts'];
    },
    actionText() {
      return this.action === 'create' ? 'Create' : 'Update';
    },
  },
};
</script>
