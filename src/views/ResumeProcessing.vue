<template>
    <div class="processing">
        <clip-loader v-if="loading"/>
        <h2 class="processing__message">Обработка резюме, пожалуйста, подождите</h2>
    </div>
</template>

<script>
    import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

    export default {
        components: {
            'clip-loader': ClipLoader
        },
        data() {
            return {
                loading: true
            }
        },
        created() {
            setTimeout(() => {
              this.$router.push('/')
            }, 3000)
        },
        computed: {

        }
    }
</script>

<style scoped>
    .processing {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20%;
    }

    .processing__message {
        margin-top: 30px;
    }
</style>