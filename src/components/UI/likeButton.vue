<template>
    <div class="like-button" @click="onClick">
        <i class="far fa-thumbs-up"></i>
    </div>
</template>

<script>
export default {
    props: {
        onClick: {
            type: Function,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.like-button {
    @include ratingButton(green);
    right: 0;
}
</style>
