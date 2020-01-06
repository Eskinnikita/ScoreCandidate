<template>
    <div id="app">
        <page-header/>
        <div class="wrapper">
            <router-view v-if="!isLoading"/>
            <clip-loader v-else/>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
    import {mapState} from 'vuex'

    export default {
        components: {
            "page-header": Header,
            "clip-loader": ClipLoader
        },
        data() {
            return {};
        },
        created() {
            this.$store.commit('INITIALIZE_AUTH_STORE')
        },
        methods: {},
        computed: {
            ...mapState(['isLoading'])
        }
    };
</script>

<style lang="scss">
    #app {
        font-family: "Open Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .wrapper {
        margin: 0 auto;
        max-width: $wrapper-width;
        padding: 0 10px;
    }

    button {
        border: none;
    }
</style>
