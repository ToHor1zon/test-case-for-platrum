<template>
  <span ref="tableArrow" :class="['table-arrow', isActive ? 'table-arrow--rotated' : '']">
    {{ isUpArrow ? '▲' : '▼' }}
  </span>
</template>

<script>
export default {
  name: 'TableArrow',
  props: {
    isUpArrow: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      required: true,
    }
  },
};
</script>

<style lang="scss">
.table-arrow {
  display: inline-block;
  font-size: 12px;
  transform-origin: 50% 47%;
  transition: 0.3s linear;
  transform: rotate(0deg);

  &--rotated {
    transform: rotate(180deg);
  }
}
</style>