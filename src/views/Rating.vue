<template>
    <div class="rating-test">
        <div class="rating-test__top">
            <button class="back-button" @click="backToResumeList">Вернуться к списку</button>
            <div class="rating-test__rate-buttons">
                <rate-button :color="'red'" :icon="'far fa-thumbs-down'" :onClick="logDislike"/>
                <rate-button :color="'green'" :icon="'far fa-thumbs-up'" :onClick="logLike"/>
            </div>
        </div>
        <div class="resume-container">
            <resume :resume="resumeStore.resumeToRate"/>
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
                currentResumeIndex: 0
            };
        },
        created() {

        },
        methods: {
            backToResumeList() {
                this.$router.push(`/resumes/${this.resumeStore.currentSpec}`)
            },
            logLike() {
                this.$store.commit('APPROVE_RESUME', {index: this.currentResumeIndex, status: true});
                this.goToNextResume()
            },
            logDislike() {
                this.$store.commit('APPROVE_RESUME', {index: this.currentResumeIndex, status: false});
                this.goToNextResume()
            },
            goToNextResume() {
            }
        },
        computed: {
            ...mapState(['resumeStore'])
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
</style>
