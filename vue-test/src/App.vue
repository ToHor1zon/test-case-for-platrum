<template>
  <div id="App">
    <div class="text-center my-4">
      <b-button
        v-b-modal.new-user-modal
        class="m-auto"
      >
        Добавить работника
      </b-button>
    </div>

    <Table
      :users="sortedUsers"
      @sortUsers="sortUsers"
      :isAscUsersOrder="isAscUsersOrder"
      v-if="users.length"
    />
    <Modal :parentOptions="parentOptions" @saveUser="saveUserToLocalStorage" />
  </div>
</template>

<script>
import Table from './components/users/Table';
import Modal from './components/users/Modal';
import { getRandomId } from './helpers/random';
import { sortByName } from './helpers/sort';

export default {
  name: 'App',
  components: {
    Table,
    Modal,
  },
  data() {
    return {
      users: [],
      isAscUsersOrder: true,
    };
  },
  mounted() {
    this.updateUsersFromLocalStorage();
  },
  computed: {
    parentOptions() {
      return this.users.map(({ id, name }) => ({
        value: id,
        text: name,
      }));
    },
    sortedUsers() {
      return sortByName(this.users, this.isAscUsersOrder);
    },
  },
  methods: {
    saveUserToLocalStorage(newUser) {
      const newUserId = getRandomId();
      let updatedUsers;
      newUser.id = newUserId;
      
      if (newUser.parentId) {
        updatedUsers = this.users.map(item => {
          item.childrenUsers = item.id === newUser.parentId ? [...item.childrenUsers, newUser] : item.childrenUsers;
          return item;
        })
      } else {
        updatedUsers = [...this.users, newUser];
      }

      const JsonUpdatedUsers = JSON.stringify(updatedUsers);
      localStorage.setItem('users', JsonUpdatedUsers);

      this.updateUsersFromLocalStorage();
    },
    sortUsers(isAscOrder) {
      this.isAscUsersOrder = isAscOrder;
    },
    updateUsersFromLocalStorage() {
      const usersFromLocalStorage = localStorage.getItem('users') || '[]';
      this.users = JSON.parse(usersFromLocalStorage); 
    }
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
