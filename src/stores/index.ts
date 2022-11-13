import { createStore } from "vuex";
import userStore from "./users/user-store";

export const store = createStore({
  modules: {
    userStore,
  }
})
