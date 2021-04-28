<template>
  <div>
    <div
      @click="openParentItem"
      :class="[
        'row',
        'border',
        'border-secondary',
        'border-left-0',
        'border-right-0',
        'border-bottom-0',
        'user-parent__wrapper',
        user.childrenUsers.length ? 'user-parent__wrapper--parent' : '',
      ]"
    >
      <div class="text-capitalize col p-2 pl-3">
        <TableArrow v-if="user.childrenUsers.length" :isUpArrow="true" :isActive="isOpenedParent" />
        {{ user.name }}
      </div>
      <div class="col p-2 pl-3">{{ user.phone }}</div>
    </div>
    <template v-if="isOpenedParent">
      <div
        v-for="childUser in user.childrenUsers"
        class="border-top row"
        :key="childUser.id"
      >
        <div class="col p-2 pl-5">
          {{ childUser.name }}
        </div>
        <div class="col p-2 pl-5">
          {{ childUser.phone }}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import TableArrow from '../Utils/TableArrow';

export default {
  name: 'TableItem',
  components: {
    TableArrow,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOpenedParent: false
    };
  },
  methods: {
    openParentItem() {
      this.isOpenedParent = !this.isOpenedParent;
    },
  }
};
</script>

<style lang="scss">
.user-parent {
  &__wrapper:hover {
    background-color: #efeffb;
  }

  &__wrapper--parent:hover {
    cursor: pointer;
  }
}
</style>