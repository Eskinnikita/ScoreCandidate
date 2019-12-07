<template>
    <div>
        <h2>Оценка резюме {{spec}}</h2>
        <resume/>
    </div>
</template>

<script>
import Resume from '../components/Global/Resume'
    export default {
        components: {
            'resume': Resume
        },
        created() {
        },
        data() {
            return {
                spec: this.$route.params.spec
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>