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
      <v-text-field v-model="newTodo" class="input" type="text" placeholder="todo"></v-text-field>
      <v-text-field v-model="newLimit" class="input" type="text" placeholder="limit"></v-text-field>
      <v-btn @click="addTodo">add</v-btn>
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
