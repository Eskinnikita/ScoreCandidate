<template>
    <div>
        <resume-snippet
                v-for="(resume, index) in approvedResume"
                :key="index"
                :resume="resume"
        />
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import ResumeSnippet from "../components/Global/ResumeSnippet"
    export default {
        components: {
            'resume-snippet': ResumeSnippet
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapState(['resumeStore']),
            approvedResume() {
                return this.resumeStore.testResume.filter(resume => {
                    return resume.approved !== null && resume.approved !== undefined
                })
            }
        }
    }
</script>

<style scoped>

</style>