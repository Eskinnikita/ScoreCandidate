<template>
    <div>
        <h2>Оценка резюме {{$route.params.spec}}</h2>
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
            console.log(this.$route.params.spec)
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>