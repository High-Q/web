<template>
    <div>
        <v-btn
        v-for="icon in icons"
        class="mx-4"
        :key="icon.id"
        :icon="icon"
        >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
        </v-btn>
    </div>
</template>

<script>
  export default {
    name: 'Icons',
    props: {
        icons: {
            type: Array,
        }
    },
  }
</script>