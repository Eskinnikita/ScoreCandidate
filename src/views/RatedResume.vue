<template>
    <div class="rated-resume">
        <h2 class="rated-resume__title">Просмотренные резюме</h2>
        <input type="text" v-model="search" class="rated-resume__search" placeholder="Поиск">
        <div class="resumes-container" v-if="filteredResumes.length">
            <resume-snippet-rated
                    v-for="(resume, index) in filteredResumes"
                    :key="index"
                    :resume="resume"
            />
        </div>
        <h3 v-else>Ничего не найдено...&nbsp;<i class="fas fa-ghost"></i></h3>
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
                search: ''
            }
        },
        methods: {
        },
        computed: {
            ...mapState(['resumeStore', 'authStore']),
            filteredResumes() {
                return this.resumeStore.approvedResume.filter(el => {
                    return el.profession.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .rated-resume {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .rated-resume__search {
        @include input;
        width: 600px;
    }
</style>