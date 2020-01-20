<template>
    <div class="rating-test">
        <div class="rating-test__top" v-if="!resumeIsOver">
            <button class="back-button" @click="backToResumeList">Вернуться к списку</button>
            <div class="rating-test__rate-buttons">
                <rate-button :color="'red'" :icon="'far fa-thumbs-down'" :onClick="setDislike"/>
                <rate-button :color="'green'" :icon="'far fa-thumbs-up'" :onClick="setLike"/>
            </div>
        </div>
        <div class="ration-test__bottom">
            <div class="resume-container" v-if="!resumeIsOver">
                        <resume :resume="resumeStore.resumeToRate"/>
            </div>
            <div class="message-container" v-else>
                <h2>Резюме закончились... Загрузить еще?</h2>
                <button class="load-button" @click="backToResumeList">Вернуться к списку</button>
                <button class="load-button">Загрузить</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Resume from "../components/Global/Resume";
    import rateButton from "../components/UI/rateButton";

    export default {
        components: {
            'resume': Resume,
            'rate-button': rateButton
        },
        data() {
            return {
                id: this.$route.params.id,
                resumeIsOver: false
            };
        },
        created() {
            this.$store.commit('INITIALIZE_ALLRESUMES')
            // this.$store.dispatch('getResumeById', {id: this.id})
        },
        methods: {
            setDislike() {
                const resumeStatus = false
                const resumeData = {
                    userId: this.authStore.user._id,
                    resumeId: this.resumeStore.resumeToRate.id,
                    status: resumeStatus
                }
                this.$store.dispatch('addResumeToRated', resumeData)
                this.goToNextResume()
            },
            setLike() {
                const resumeStatus = true
                const resumeData = {
                    userId: this.authStore.user._id,
                    resumeId: this.resumeStore.resumeToRate.id,
                    status: resumeStatus
                }
                this.$store.dispatch('addResumeToRated', resumeData)
                this.goToNextResume()
            },
            goToNextResume() {
                const currentIndex = this.resumeStore.allResumes.findIndex(el => {
                    return el.id === this.resumeStore.resumeToRate.id
                })
                // this.$store.commit('SET_RESUME_TO_RATE', this.resumeStore.allResumes[currentIndex + 1])
                if(currentIndex + 1 === this.resumeStore.allResumes.length) {
                    this.resumeIsOver = true
                }
                else {
                    this.$store.commit('SET_RESUME_TO_RATE', this.resumeStore.allResumes[currentIndex + 1])
                }
            },
            backToResumeList() {
                this.$router.push(`/resumes/${localStorage.getItem('current-spec')}`)
            }
        },
        computed: {
            ...mapState(['resumeStore', 'authStore'])
        },
        watch: {}
    };
</script>

<style lang="scss" scoped>
    .resume-container {
        position: relative;
    }

    .progress {
        position: absolute;
        left: 0;
        top: 0;
        width: 10%;
        height: 500px;
        /*border: 1px solid #000;*/
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 15px;
        box-sizing: border-box;
    }

    .rating-test__top_right {
        @include flexSpaceBetween
    }

    .rating-test__top {
        width: 80%;
        margin: 0 auto;
        @include flexSpaceBetween;
    }

    .rating-test__rate-buttons {
        @include flexSpaceBetween;
        //@include boxShadowBigBlur;
        /*position: fixed;*/
        /*right: 5%;*/
        /*bottom: 10px;*/
        width: 10%;
        min-width: 140px;
        padding: 10px 0;
        box-sizing: border-box;
        z-index: 1000;
        background-color: #fff;
    }

    .rating-test__finish-button {
        @include button-dark;
        margin-right: 20px;
    }

    .rating-test__process {
        margin-right: 10px;
    }

    .back-button {
        @include button-dark;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active до версии 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }

    .message-container {
        padding-top: 100px;
        text-align: center;
    }

    .load-button {
        @include button-light;
        border: 1px solid $main-color;
        margin: 0 15px;
    }
</style>
