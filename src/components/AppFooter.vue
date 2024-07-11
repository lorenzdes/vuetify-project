<template>
  <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon.name"
        :icon="icon.name"
        class="mx-4"
        :to="icon.link"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, minima asperiores? Quas voluptates, ad itaque soluta aliquid provident dolores, eius labore nemo quidem veritatis exercitationem vitae ut quo omnis magni.
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>
<script>
export default {
  data() {
    return {
      icons: [
        { name: 'mdi-facebook', link: 'https://www.facebook.com' },
        { name: 'mdi-twitter', link: 'https://www.twitter.com' },
        { name: 'mdi-linkedin', link: 'https://www.linkedin.com' },
        { name: 'mdi-instagram', link: 'https://www.instagram.com' },
      ],
    };
  },
  methods: {
    openLink(link) {
      window.open(link, '_blank');
    },
  },
};
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>
