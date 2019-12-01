<template>
    <div id="app">
        <page-header />
        <div class="wrapper">
            <router-view />
        </div>
    </div>
</template>

<script>
import Header from "./components/Header";
export default {
    components: {
        "page-header": Header
    },
    data() {
        return {};
    },
    created() {
        this.$store.commit('INITIALIZE_AUTH_STORE')
    },
    methods: {
        
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
</style>
