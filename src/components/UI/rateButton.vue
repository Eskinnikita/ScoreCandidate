<template>
    <div class="rate-button"
         :style="{border: `3px solid ${color}`, color: `${color}`}"
         @click="onClick">
        <i :class="icon"></i>
    </div>
</template>

<script>
    export default {
        props: {
            color: {
                type: String,
                required: true
            },
            icon: {
                type: String,
                required: true
            },
            onClick: {
                type: Function,
                required: true
            }
        }
    };
</script>

<style lang="scss" scoped>
    .rate-button {
        @include ratingButton;
        left: 0;
        .fa-thumbs-down {
            transform: scale(-1, 1)
        }
    }
</style>