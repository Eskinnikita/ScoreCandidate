<template>
    <div class="resume-snippet" @click="setResumeToRate">
        <div class="resume__experience" v-if="resume.experience_text">
            {{resume.age}} года | стаж {{resume.experience_text}}
        </div>
        <div class="resume__profession">
            {{resume.profession}}
        </div>
    </div>
</template>

<script>
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
            setResumeToRate() {
                    this.$store.commit('SET_RESUME_TO_RATE', this.resume)
                    // this.$store.dispatch('getResumeById', {resume: this.resume})
                    // this.$router.push(`/rating/${this.resume.id}`)
                    this.$router.push(`/rating`)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .resume-snippet {
        width: 600px;
        min-height: 100px;
        height: auto;
        margin-bottom: 40px;
        color: #000;
        padding: 15px;
        border-radius: $border-radius;
        border: $border-light-gray;
        cursor: pointer;
        box-sizing: border-box;
        transition: 0.3s;
    }

    .resume-snippet:hover {
        transform: scale(1.02);
    }

    .resume-snippet:active {
        transform: scale(0.99);
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


</style>