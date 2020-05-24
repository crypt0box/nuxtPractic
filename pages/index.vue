<template>
<div>
  home
  <p>userUid: {{ $store.getters.getUserUid }}</p>
  <p>userEmail: {{ $store.getters.getUserEmail }}</p>
  <table class="table is-narrow">
    <tbody>
      <tr>
        <th>todo</th>
        <th>limit</th>
      </tr>
    </tbody>
    <tbody>
      <tr v-for="todo in $store.getters.getTodos" :key="todo.todo">
        <td>{{todo.todo}}</td>
        <td>{{todo.limit}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('fetchTodos')
  }
}
</script>
