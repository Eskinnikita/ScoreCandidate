<template>
    <div class="resume-snippet">
        <div class="resume__experience" v-if="resume.experience_text">
            {{resume.age}} года | стаж {{resume.experience_text}}
        </div>
        <div class="resume__profession">
            {{resume.profession}}
        </div>
        <div class="resume-snippet__status">
            <i v-if="checkStatus(resume.id)" class="status-icon far fa-thumbs-down" style="color: red"></i>
            <i v-else class="status-icon far fa-thumbs-up" style="color: green"></i>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        props: {
            resume: {
                Type: Object,
                required: true
            }
        },
        data() {
            return {

            }
        },
        methods: {
            checkStatus(resumeId) {
                const resumeWithStatus = this.resumeStore.usersResumeStatus.find(el => el.resumeId === resumeId)
                return resumeWithStatus.status
            }
        },
        computed: {
            ...mapState(['resumeStore'])
        }
    }
</script>

<style lang="scss" scoped>
    .resume-snippet {
        position: relative;
        width: 600px;
        height: 100px;
        margin-bottom: 40px;
        color: #000;
        padding: 15px;
        border-radius: $border-radius;
        border: $border-light-gray;
        cursor: pointer;
        box-sizing: border-box;
        transition: 0.3s;
    }

    .resume__profession {
        font-size: 20px;
        line-height: 1.2em;
        margin: 6px 0;
    }

    .resume__experience {
        font-size: 15px;
        color: rgba(0,0,0,0.7)
    }

    .resume-snippet__status {
        position: absolute;
        top: -15px;
        right: -15px;
        background-color: #fff;
        font-size: 30px;
        padding: 6px;
        @include flexSpaceBetween;
    }

</style>