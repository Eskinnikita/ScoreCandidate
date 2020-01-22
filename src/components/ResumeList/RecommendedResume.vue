<template>
    <div class="recommended-resume">
        <div class="processing-status" v-if="loading">
            <component-loader :message="loaderMessage"/>
        </div>
        <div class="resumes-list" v-else>
            <resume-snippet v-for="(resume, index) in resumeStore.recommendedResumes" :key="index" :resume="resume"/>
        </div>
    </div>
</template>

<script>
    import ComponentLoader from "../Global/ComponentLoader"
    import ResumeSnippet from "../Global/ResumeSnippet"
    import {mapState} from 'vuex'

    export default {
        components: {
            'component-loader': ComponentLoader,
            'resume-snippet': ResumeSnippet
        },
        created() {
            this.$store.dispatch('getRecommendedResume', {keyword: this.spec})
            setTimeout(() => {
                this.loading = false
            }, Math.floor(Math.random() * (6000 - 3000)) + 3000)
        },
        data() {
            return {
                spec: this.$route.params.spec,
                loading: true,
                loaderMessage: 'Идет обработка. Пожалуйста, подождите...'
            }
        },
        computed: {
            ...mapState(['resumeStore'])
        }
    }
</script>

<style scoped>


</style>