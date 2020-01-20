<template>
    <div>
        <h2>Кого ищем?</h2>
        <div class="specs-container">
            <spec-item
                v-for="(spec, index) in specs"
                @click.native="goToRating(spec.uri)"
                :key="index"
                :spec="spec"
            />
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
                { title: "Java-разработчики", uri: "java", iconClass: "fab fa-java"},
                { title: "Python-разработчики", uri: "python", iconClass: "fab fa-python" },
                { title: "JavaScript-разработчики", uri: "javascript", iconClass: "fab fa-js-square" },
                { title: "Angular-разработчики", uri: "angular", iconClass: "fab fa-angular" },
                { title: "React-разработчики", uri: "react", iconClass: "fab fa-react" },
                { title: "VueJS-разработчики", uri: "vue", iconClass: "fab fa-vuejs" },
                { title: "PHP-разработчики", uri: "php", iconClass: "fab fa-php" },
                { title: "NODE.JS-разработчики", uri: "nodejs", iconClass: "fab fa-node-js" },
                { title: "Android-разработчики", uri: "android", iconClass: "fab fa-android" }
            ]
        };
    },
    methods: {
        goToRating(uri) {
            console.log(uri)
            this.$router.push({path: `/resumes/${uri}`})
        }
    }
};
</script>

<style lang="scss" scoped>
.specs-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
}
</style>
