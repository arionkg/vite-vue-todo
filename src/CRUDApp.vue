<template>
  <v-app id="inspire">
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> arion.com </v-list-item-title>
          <v-list-item-subtitle>  </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Todo List</v-toolbar-title>
    </v-app-bar>

    <v-main>
        <router-view/>
    </v-main>
  </v-app>
</template>
  
  <script>
import TodoInput from "./components/TodoInput.vue";
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Todo-List", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/Hello" },
    ],
    right: null,
  }),
  components: {
    TodoInput,
  },
};
</script>