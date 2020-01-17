<template>
    <div>
        <clip-loader/>
        <h2 class="loading__message">{{loaderMessage}}</h2>
    </div>
</template>

<script>
    import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
    import {mapState} from 'vuex'

    export default {
        components: {
            "clip-loader": ClipLoader
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
        padding-top: 17%;
    }

    .loading__message {
        margin-top: 30px;
    }
</style>
