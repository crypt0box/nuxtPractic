import firebase from '~/plugins/firebase'

export const actions = {
  register({ dispatch }, authData) {
    firebase.auth().createUserWithEmailAndPassword(
      authData.email,
      authData.password,
    )
  }
}
