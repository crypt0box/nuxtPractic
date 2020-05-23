import firebase from '~/plugins/firebase'

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
  login({ dispatch }, authData) {
    firebase.auth().signInWithEmailAndPassword(
      authData.email,
      authData.password,
    )
    .then(response => {
      console.log(response)
      this.$router.push('/')
    })
  },
}
