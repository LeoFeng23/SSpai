<template>
    <span class="article-tag-item">
        <span># {{ content }}</span>
    </span>
</template>

<script>
export default {
    name: "articleTagItem",
    props: {
        content: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped lang="scss">
.article-tag-item {
  display: inline-block;
  padding: 8px 16px;
  font-size: 12px;
  color: #888;
  background-color: #ddd;
  margin-right: 20px;
}
</style>