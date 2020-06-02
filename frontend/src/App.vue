<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
    >
      <v-list dense>

        <v-list-item
                to="/"
        >
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link
                     to="intro"
        >
          <v-list-item-action>
            <v-icon>video_library</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Videos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link
                     to="dataset"
        >
          <v-list-item-action>
            <v-icon>storage</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dataset</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link
                to="ref"
        >
          <v-list-item-action>
            <v-icon>library_books</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Reference</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link
                     to="login"
        >
          <v-list-item-action>
            <v-icon>settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app
            clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title> &#128662; Car Classifier</v-toolbar-title>
    </v-app-bar>

    <v-content
        :grid-list-md="!$vuetify.breakpoint.xs"
        :class="$vuetify.breakpoint.xs ? '' : ''"
    >
      <router-view/>
    </v-content>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = false
    },
  }
</script>

