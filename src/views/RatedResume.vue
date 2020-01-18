<template>
    <div>
        TUT TIPO RESUME LEZHAT
        <resume-snippet
                v-for="(resume, index) in resumeStore.approvedResume"
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
        created() {
            let idsString = ''
            this.authStore.user.approvedResume.forEach(el => {
                idsString += `ids[]=${el.id}&`
            })
            this.$store.dispatch('getApprovedResume', idsString)
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapState(['resumeStore', 'authStore'])
        }
    }
</script>

<style scoped>

</style>