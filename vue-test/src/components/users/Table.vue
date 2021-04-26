<template>
  <div class="container border border-secondary justify-content-center col-auto mx-2 col-lg-8 mx-lg-auto">
    <div class="row table-header">
      <div class="col p-2 pl-3 font-weight-bold">
        <span @click="$emit('sortUsers', !isAscUsersOrder)">
          ФИО
          <TableArrow
            :isUpArrow="false"
            :isActive="isAscUsersOrder"
            :refName="'tableHeaderArrow'"
            :className="'table-header-arrow'"
          />
        </span>
        
      </div>
      <div class="col p-2 pl-3 font-weight-bold">Телефон</div>
    </div>
    <TableItem v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import TableItem from './TableItem';
import TableArrow from '../Utils/TableArrow';

export default {
  name: 'Table',
  components: {
    TableItem,
    TableArrow,
  },
  props: {
    users: {
      type: Array,
      require: true,
    },
    isAscUsersOrder: {
      type: Boolean,
      require: true,
    }
  },
};
</script>

<style lang="scss">
.table-header {
    background-color: #E0E6F8;
}
</style>
