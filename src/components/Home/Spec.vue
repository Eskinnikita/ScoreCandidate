<template>
    <div class="spec">
        <div class="spec__container">
            <div><i :class="spec.iconClass" class="spec__icon"></i></div><div>{{ spec.title }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        spec: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.spec {
    width: 100%;
    height: 100px;
    padding: 10px 30px;
    // margin: 15px auto;£
    box-sizing: border-box;
    border-radius: $border-radius;
    cursor: pointer;
    transition: 0.3s;
    @include flexCenter;
    @include boxShadowBigBlur;
    @include scaleHover;
    .spec__container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .spec__icon {
        font-size: 40px;
        margin-right: 15px;
    }
}

.spec:last-child {
    justify-self: start;
}
</style>
