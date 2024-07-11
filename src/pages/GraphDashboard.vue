<template>
  <app-header />
  <v-card
    class="mx-auto text-center"
    color="green"
    max-width="600"
    dark
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :model-value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">
            ${{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="text-h4 font-weight-thin">
        Sales Last 24h
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn
        variant="text"
        block
      >
        Go to Report
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-card
    class="mt-8 mx-auto overflow-visible"
    max-width="400"
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)"
      rounded="lg"
    >
      <v-sparkline
        :labels="labels"
        :model-value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="text-h6 font-weight-light mb-2">
        User Registrations
      </div>
      <div class="subheading font-weight-light text-grey">
        Last Campaign Performance
      </div>
      <v-divider class="my-2"></v-divider>
      <v-icon
        class="me-2"
        size="small"
      >
        mdi-clock
      </v-icon>
      <span class="text-caption text-grey font-weight-light">last registration 26 minutes ago</span>
    </v-card-text>
  </v-card>
  <app-footer />
</template>
<script>
  export default {
    data: () => ({
      value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
    }),
  }
</script>
