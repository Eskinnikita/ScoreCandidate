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
                { title: "Java-разработчик", uri: "java", iconClass: "fab fa-java"},
                { title: "Python-разработчик", uri: "python", iconClass: "fab fa-python" },
                { title: "JavaScript-разработчик", uri: "javascript", iconClass: "fab fa-js-square" },
                { title: "Angular-разработчик", uri: "angular", iconClass: "fab fa-angular" },
                { title: "React-разработчик", uri: "react", iconClass: "fab fa-react" },
                { title: "Vue-разработчик", uri: "vue", iconClass: "fab fa-vuejs" }
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
