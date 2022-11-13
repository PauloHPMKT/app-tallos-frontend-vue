import { createStore } from "vuex";
import userStore from "./users/user-store";
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  modules: {
    userStore,
  },
  plugins: [createPersistedState()],
})

export default store

