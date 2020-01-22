<template>
    <div class="loading">
        <clip-loader/>
        <h2 class="loading__message">{{message}}</h2>
    </div>
</template>

<script>
    import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
    import {mapState} from 'vuex'

    export default {
        components: {
            "clip-loader": ClipLoader
        },
        props: {
            message: String
        },
        created() {

        },
        data() {
            return {

            };
        },
        methods: {},
        computed: {
            ...mapState(['loading', 'loaderMessage'])
        }
    };
</script>

<style lang="scss">
    .loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        /*padding-top: 50%;*/
    }

    .loading__message {
        margin-top: 30px;
    }
</style>
