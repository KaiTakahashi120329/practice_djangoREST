<template>
  <v-app>
    <v-app-bar color='success' dark app>
      <v-toolbar-title>求人情報</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-item>
        <v-btn text to='/'>TOP</v-btn>
        <v-btn text to='/editor'>求人を追加する</v-btn>
      </v-toolbar-item>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer color='success' dark app class="justify-center">
      Your Name
    </v-footer>
  </v-app>
</template>
