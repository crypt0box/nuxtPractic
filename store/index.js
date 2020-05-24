import firebase from '~/plugins/firebase'

const db = firebase.firestore();
const todoRef = db.collection('todos')

export const state = () => ({
  userUid: '',
  userEmail: '',
  todos: []
})

export const mutations = {
  setUserUid(state, userUid) {
    state.userUid = userUid
  },
  setUserEmail(state, userEmail) {
    state.userEmail = userEmail
  },
  addTodo(state, todo) {
    state.todos.push(todo)
  }
}

export const actions = {
  register({ dispatch }, authData) {
    firebase.auth().createUserWithEmailAndPassword(
      authData.email,
      authData.password,
    )
    .then(response => {
      console.log(response)
      this.$router.push('/')
    })
  },
  login({ commit }, authData) {
    firebase.auth().signInWithEmailAndPassword(
      authData.email,
      authData.password,
    )
    .then(function (result) {
      const user = result.user;
      console.log('success :' + user)
      console.log('success :' + user.uid + ' : ' + user.email)
      commit('setUserUid', user.uid)
      commit('setUserEmail', user.email)
    },
    this.$router.push('/')
    )
  },
  fetchTodos({ commit }) {
    todoRef
      .get()
      .then(response => {
        response.forEach((doc) => {
          console.log('success : ' + `${doc.id} => ${doc.data()}`);
          commit('addTodo', doc.data())
      })
    })
  }
}

export const getters = {
  getUserUid(state) {
    return state.userUid
  },
  getUserEmail(state) {
    return state.userEmail
  },
  getTodos(state) {
    return state.todos
  }
}
