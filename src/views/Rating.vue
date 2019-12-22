<template>
    <div class="rating-test">
        <div class="rating-test__top">
            <h2>Оценка резюме {{ spec }}</h2>
            <div class="rating-test__top_right">
                <div class="rating-test__process">
                    <button v-if="isFinished" class="rating-test__finish-button" @click="goToProcessing">Перейти к
                        обработке
                    </button>
                    <span v-else>оценено {{ratedResumeCount}} из {{resumeStore.testResume.length}}</span>
                </div>
                <div class="rating-test__rate-buttons">
                    <dislike-button :onClick="logDislike"/>
                    <like-button :onClick="logLike"/>
                </div>
            </div>
        </div>
        <div class="resume-container">
            <div class="progress">
                <div
                        class="progress__indicator"
                        v-for="(indicator, index) in resumeStore.testResume"
                        :key="index"
                        @click="selectResume(index)"
                        :style="{backgroundColor: indicator.approved ? 'green' : indicator.approved == null ? 'transparent' : 'red'}"
                ></div>
            </div>
            <resume :resume="currentResume"/>
        </div>

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Resume from "../components/Global/Resume";
    import likeButton from "../components/UI/likeButton";
    import dislikeButton from "../components/UI/dislikeButton";

    export default {
        components: {
            resume: Resume,
            "like-button": likeButton,
            "dislike-button": dislikeButton
        },
        data() {
            return {
                spec: this.$route.params.spec,
                currentResumeIndex: 0
            };
        },
        created() {
            this.$store.commit('RESET_APPROVE')
        },
        methods: {
            logLike() {
                this.$store.commit('APPROVE_RESUME', {index: this.currentResumeIndex, status: true});
                this.goToNextResume()
            },
            logDislike() {
                this.$store.commit('APPROVE_RESUME', {index: this.currentResumeIndex, status: false});
                this.goToNextResume()
            },
            goToNextResume() {
                if (this.resumeStore.testResume.length - 1 !== this.currentResumeIndex) {
                    this.currentResumeIndex++
                }
            },
            goToProcessing() {
                this.$router.push('/processing')
            },
            selectResume(index) {
                this.currentResumeIndex = index
            }
        },
        computed: {
            ...mapState(['resumeStore']),
            currentResume() {
                return this.resumeStore.testResume[this.currentResumeIndex]
            },
            ratedResumeCount() {
                const sum = this.resumeStore.testResume.reduce((sum, resume) => {
                    if (resume.approved != null) {
                        sum += 1
                    }
                    return sum
                }, 0)
                console.log(sum)
                return sum
            },
            isFinished() {
                return this.ratedResumeCount === this.resumeStore.testResume.length
            }
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

    .progress__indicator {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-bottom: 5px;
        margin-right: 5px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            opacity: 0.7;
        }
    }

    .rating-test__finish-button {
        @include button-dark;
        margin-right: 20px;
    }

    .rating-test__process {
        margin-right: 10px;
    }
</style>
