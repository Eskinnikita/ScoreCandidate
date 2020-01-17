<template>
    <div id="app">
        <page-header/>
        <div class="loading" v-show="loading">
            <clip-loader/>
            <h2 class="loading__message">{{loaderMessage}}</h2>
        </div>
        <div class="wrapper" v-show="!loading">
                <transition name="fade">
                    <router-view/>
                </transition>
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
            ...mapState(['loading', 'loaderMessage'])
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

    .loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 17%;
    }

    .loading__message {
        margin-top: 30px;
    }

    button {
        border: none;
    }

    .fade-enter-active, .fade-leave-active {
        transition-property: opacity;
        transition-duration: .25s;
    }

    .fade-enter-active {
        transition-delay: .25s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
