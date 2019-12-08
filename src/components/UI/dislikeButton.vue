<template>
    <div class="dislike-button" @click="onClick">
        <i class="far fa-thumbs-down"></i>
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
.dislike-button {
    @include ratingButton(red);
    left: 0;
    .fa-thumbs-down {
        transform: scale(-1, 1)
    }
}
</style>
