<template>
  <div class="mydiv">
    <p class="greeting">{{ greeting }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: "Index Page",
    };
  },
};
</script>

<style lang="less" scoped>
@color: blue;
.mydiv {
  .greeting {
    color: @color;
    font-weight: bold;
  }
}
</style>