<template>
    <div class="rating-test">
        <div class="rating-test__top">
            <h2>Оценка резюме {{ spec }}</h2>
            <div class="rating-test__rate-buttons">
                <dislike-button :onClick="logDislike"/>
                <like-button :onClick="logLike"/>
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
                if(this.resumeStore.testResume.length - 1 !== this.currentResumeIndex) {
                    this.currentResumeIndex++
                }
            },
            selectResume(index) {
                this.currentResumeIndex = index
            }
        },
        computed: {
            ...mapState(['resumeStore']),
            currentResume() {
                return this.resumeStore.testResume[this.currentResumeIndex]
            }
        }
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
    .rating-test__top {
        width: 80%;
        margin: 0 auto;
        @include flexSpaceBetween;
    }
    .rating-test__rate-buttons {
        @include flexSpaceBetween;
    }

    .progress__indicator {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-bottom: 5px;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
            opacity: 0.7;
        }
    }
</style>
