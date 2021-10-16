<template>
  <div class="create-contact-view mt-5">
    <div class="container">
      <contact-form action="update" :id="id" />
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
  components: {
    ContactForm,
  },
  computed: {
    id() {
      return parseInt(this.$route.params.id, 10);
    },
  },
};
</script>
