<template>
    <div class="spec">
            <div class="spec-container">
                {{spec.title}}
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
    width: 30%;
    height: 100px;
    padding: 10px;
    margin: 15px 0;
    box-sizing: border-box;
    border-radius: $border-radius;
    cursor: pointer;
    transition: 0.3s;
    @include flexCenter;
    @include boxShadowBigBlur;
    @include scaleHover;
}

.spec:last-child {
    justify-self: start;
}
</style>
