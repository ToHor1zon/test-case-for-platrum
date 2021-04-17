<template>
  <div class="container border border-secondary justify-content-center col-auto mx-2 col-lg-8 mx-lg-auto">
    <div class="row table-header">
      <div class="col p-2 pl-3 font-weight-bold">ФИО</div>
      <div class="col p-2 pl-3 font-weight-bold">Телефон</div>
    </div>
    <TableItem v-for="[id, user] in Object.entries(users)" :key="id" :user="user" />
  </div>
</template>

<script>
import TableItem from './TableItem';

export default {
  name: 'Table',
  components: {
    TableItem,
  },
  props: {
    users: {
      type: Object,
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
