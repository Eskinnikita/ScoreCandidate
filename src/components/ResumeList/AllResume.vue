<template>
    <div>
        <resume-snippet v-for="(resume, index) in resumeStore.allResumes" :key="index" :resume="resume"/>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import ResumeSnippet from "../Global/ResumeSnippet"
    export default {
        components: {
            'resume-snippet': ResumeSnippet
        },
        computed: {
            ...mapState(['resumeStore'])
        }
    }
</script>

<style scoped>

</style>