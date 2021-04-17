<template>
  <div>
    <div
      @click="toggleShowChildren"
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
        <span ref="userParentArrow" class="user-parent-arrow">{{
          user.childrenUsers.length ? '▼' : ''
        }}</span>
        {{ user.name }}
      </div>
      <div class="col p-2 pl-3">{{ user.phone }}</div>
    </div>
    <template v-if="isDisplayed">
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
export default {
  name: 'TableItem',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isDisplayed: false,
    };
  },
  methods: {
    toggleShowChildren() {
      this.isDisplayed = !this.isDisplayed;
      this.$refs.userParentArrow.classList.toggle('user-parent-arrow--rotated');
    },
  },
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

  &-arrow {
    display: inline-block;
    font-size: 12px;
    transform-origin: 50% 47%;
    transition: 0.4s linear;
    transform: rotate(0deg);

    &--rotated {
      transform: rotate(-180deg);
    }
  }
}
</style>