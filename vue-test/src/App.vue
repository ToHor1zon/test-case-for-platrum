<template>
  <div id="App">
    <div class="text-center my-4">
      <b-button v-b-modal.new-user-modal class="m-auto"
        >Добавить работника</b-button
      >
    </div>

    <Table :users="users" />
    <Modal :parentOptions="parentOptions" @saveUser="saveUserToLocalStorage" />
  </div>
</template>

<script>
import Table from './components/users/Table';
import Modal from './components/users/Modal';
import { randomId } from './helpers/random';

export default {
  name: 'App',
  components: {
    Table,
    Modal,
  },
  data() {
    return {
      usersFromLocalStorage: localStorage.getItem('users') || '{}',
    };
  },
  computed: {
    users() {
      return JSON.parse(this.usersFromLocalStorage);
    },
    parentOptions() {
      return Object.entries(this.users).map(([id, user]) => ({
        value: Number.parseInt(id),
        text: user.name,
      }));
    },
  },
  methods: {
    saveUserToLocalStorage(user) {
      const newUserId = randomId();
      const currentUsers = this.users;

      if (user.parentId) {
        currentUsers[user.parentId].childrenUsers.push(user);
      } else {
        currentUsers[newUserId] = user;
      }

      const updatedUsers = JSON.stringify(currentUsers);

      localStorage.setItem('users', updatedUsers);
      this.usersFromLocalStorage = localStorage.getItem('users');
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
