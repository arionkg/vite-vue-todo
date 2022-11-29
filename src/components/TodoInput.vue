<template>
  <div class="home pa-4">
    <v-text-field
            solo
            label="Add Task"
            clearable
            append-icon="mdi-plus"
            v-model="newTaskTitle"
            @click:append="addTask"
            @keyup.enter="addTask"
          ></v-text-field>
    <v-list flat>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item
          @click="doneTask(task.id)"
          :class="{ 'blue lighten-5': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
              >
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon @click="deleteTask(task.id)">
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    newTaskTitle: "what",
    tasks: [
      { id: 1, title: "Wakup", done: true },
      { id: 2, title: "Sleep", done: false },
    ],
  }),
  methods: {
    doneTask(taskid) {
      console.log("doneTask taskid:", taskid);
      let task = this.tasks.filter((task) => task.id === taskid)[0];
      task.done = !task.done;
      console.log("task.done: ", task.done);
    },
    deleteTask(taskid) {
        this.tasks = this.tasks.filter((task) => task.id !== taskid)
        console.log("delete task: ", taskid);
    },
    addTask() {
      this.tasks.push({id: new Date(), title: this.newTaskTitle, done: false})
      this.newTaskTitle = '' 
    }
  },
};
</script>
