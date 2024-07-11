<template>
  <v-app-bar color="teal-darken-4" dense>
    <!-- Menu with Burger Icon -->
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- App Bar Title -->
    <v-app-bar-title>
      <v-btn text to="/" exact>
    VUETIFY APP
  </v-btn></v-app-bar-title>

    <v-spacer></v-spacer>

    <!-- Magnify Icon Button -->
    <!-- Search Bar -->
    <v-text-field
      v-model="searchQuery"
      solo
      dense
      hide-details
      placeholder="Search Google"
      style="max-width: 200px"
    />
    <v-btn icon @click="searchGoogle">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>


    <!-- Heart Icon Button to GraphDashboard -->
    <v-btn icon to="/graph-dashboard">
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
  data: () => ({
    searchQuery: '',
    items: [
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
  methods: {
    searchGoogle() {
      const url = `https://www.google.com/search?q=${encodeURIComponent(this.searchQuery)}`
      window.open(url, '_blank')
    },
}}
</script>

<style scoped>
/* Add your scoped styles here */
</style>
