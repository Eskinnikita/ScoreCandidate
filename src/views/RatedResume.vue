<template>
    <div class="rated-resume">
        <h2 class="rated-resume__title">Просмотренные резюме</h2>
        <resume-snippet-rated
                v-for="(resume, index) in this.resumeStore.approvedResume"
                :key="index"
                :resume="resume"
        />
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import ResumeSnippetRated from "../components/Global/ResumeSnippetRated"
    export default {
        components: {
            'resume-snippet-rated': ResumeSnippetRated
        },
        created() {
            let idsString = ''
            this.authStore.user.approvedResume.forEach(el => {
                idsString += `ids[]=${el.id}&`
            })
            this.$store.dispatch('getApprovedResume', {searchString: idsString, userId: this.authStore.user._id})
        },
        data() {
            return {

            }
        },
        methods: {
        },
        computed: {
            ...mapState(['resumeStore', 'authStore'])
        }
    }
</script>

<style scoped>
    .rated-resume {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>