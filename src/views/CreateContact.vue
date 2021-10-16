<template>
  <div class="create-contact-view mt-5">
    <div class="container">
      <contact-form action="create" />
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
  components: {
    ContactForm,
  },
};
</script>
