<template>
    <div>
        <h2>Кого ищем?</h2>
        <div class="specs-container">
            <spec-item @click.native="goToRating(spec.uri)" v-for="(spec, index) in specs" :key="index" :spec="spec"/>
        </div>
    </div>
</template>

<script>
import Spec from "../components/Home/Spec";
export default {
    components: {
        "spec-item": Spec
    },
    data() {
        return {
            specs: [
                {title: 'Java-разработчик', uri: 'java'},
                {title: 'Python-разработчик', uri: 'python'},
                {title: 'JavaScript-разработчик', uri: 'javascript'},
                {title: 'Аналитик', uri: 'analytics'},
                {title: 'Опытный пользователь ПК', uri: 'pc-user'}
            ]
        };
    },
    methods: {
        goToRating(uri) {
            this.$router.push({path:`/profession/${uri}`})
        }
    }
};
</script>

<style lang="scss" scoped>
    .specs-container {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
</style>
