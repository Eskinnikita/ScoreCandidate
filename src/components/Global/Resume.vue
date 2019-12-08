<template>
    <div class="resume">
        Имя: {{resume.name}}
    </div>
</template>

<script>
    export default {
        created() {
        },
        props: {
            resume: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .resume {
        width: 80%;
        padding: 20px;
        border-radius: 5px;
        box-sizing: border-box;
        margin: 10px auto 0 auto;
        border: $border-light-gray;
        height: 100vh;
    }
</style>