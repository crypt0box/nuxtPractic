<template>
<div>
  home
  <p>userUid: {{ $store.getters.getUserUid }}</p>
  <p>userEmail: {{ $store.getters.getUserEmail }}</p>
  <table>
    <tbody>
      <tr>
        <th>todo</th>
        <th>limit</th>
      </tr>
    </tbody>
    <tbody>
      <tr v-for="(todo, index) in $store.getters.getTodos" :key="`${index}`">
        <td>{{ todo.todo }}</td>
        <td>{{ todo.limit }}</td>
      </tr>
    </tbody>
  </table>
  <v-form>
    <v-container>
      <v-col cols="12" sm="6" md="3">
        <v-text-field v-model="newTodo" placeholder="todo" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
      <v-text-field v-model="newLimit" class="input" type="text" placeholder="limit" outlined></v-text-field>
      </v-col>
      <v-btn @click="addTodo">add</v-btn>
    </v-container>
  </v-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      newLimit: '',
    }
  },
  methods: {
    addTodo() {
      const todo = this.newTodo
      const limit = this.newLimit

      this.$store.dispatch('addTodo', {todo, limit})
      this.newTodo = ''
      this.newLimit = ''
    }
  },
  created() {
    this.$store.dispatch('fetchTodos')
  }
}
</script>
