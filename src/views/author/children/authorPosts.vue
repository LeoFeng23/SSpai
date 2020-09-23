<template>
    <div class="user-posts">
        <author-posts-item></author-posts-item>
        <author-posts-item></author-posts-item>
        <author-posts-item></author-posts-item>
        <author-posts-item></author-posts-item>
        <author-posts-item></author-posts-item>
        <author-posts-item></author-posts-item>
        <author-posts-item></author-posts-item>
    </div>
</template>

<script>
import AuthorPostsItem from "@/views/author/children/authorPostsItem";
export default {
name: "userPosts",
    components: {AuthorPostsItem}
}
</script>

<style scoped lang="scss">
.user-posts {
  padding: 5px 13px 0;

}
</style>