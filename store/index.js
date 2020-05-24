import firebase from '~/plugins/firebase'

export const state = () => ({
  userUid: '',
  userEmail: '',
})

export const mutations = {
  setUserUid(state, userUid) {
    state.userUid = userUid
  },
  setUserEmail(state, userEmail) {
    state.userEmail = userEmail
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
}

export const getters = {
  getUserUid(state) {
    return state.userUid
  },
  getUserEmail(state) {
    return state.userEmail
  }
}
