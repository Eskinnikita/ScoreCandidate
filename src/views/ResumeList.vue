<template>
    <div class="resume-list">
        <div class="button-container">
            <button class="tab" @click="toggleToAll" :class="{'active': activeItem === 'all'}">Все резюме</button>
            <button class="tab" @click="toggleToRecommended" :class="{'active': activeItem === 'recommended'}">
                Рекомендованные
            </button>
        </div>
        <all-resume v-if="isAllShown"/>
        <recommended-resume v-else/>

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import AllResume from "../components/ResumeList/AllResume"
    import RecommendedResume from "../components/ResumeList/RecommendedResume"

    export default {
        components: {
            'all-resume': AllResume,
            'recommended-resume': RecommendedResume
        },
        data() {
            return {
                spec: this.$route.params.spec,
                activeItem: 'all',
                isAllShown: true
            }
        },
        created() {
            localStorage.setItem('current-spec', this.spec)
            // this.$store.dispatch('getApprovedResume', {userId: this.authStore.user._id})
            // this.$store.dispatch('getApprovedResumeForException', this.authStore.user._id)
            this.$store.dispatch('getResumes', {keyword: this.spec, userId: this.authStore.user._id})
        },
        methods: {
            toggleToAll() {
                this.activeItem = 'all'
                this.isAllShown = true
            },
            toggleToRecommended() {
                this.activeItem = 'recommended'
                this.isAllShown = false
            }
        },
        computed: {
            ...mapState(['resumeStore', 'authStore'])
        }
    }
</script>

<style lang="scss" scoped>

    .resume-list {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .button-container {
        margin-bottom: 30px;
    }

    .tab {
        @include tabs;
        margin-right: 10px;
    }


    .active {
        background-color: #2c3e50;
        color: #fff;
    }
</style>