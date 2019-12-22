<template>
    <div class="error">
        {{error}}
    </div>
</template>

<script>
    export default {
        props: {
            error: {
                default: '',
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    .error {
        max-width: 100%;
        color: red;
        text-align: center;
        padding: 10px;
        height: 20px;
    }
</style>