<template>
    <div class="resume">
        <div class="resume__header">
            <div class="resume__header-wrapper">
                <h2>{{resume.profession}}</h2>
                <p>Занятость: {{resume.type_of_work.title}}, к командировкам {{resume.business_trip.title}}</p>
            </div>
            <div class="resume__id opacity">id{{resume.id}}</div>
        </div>
        <hr class="split-line">
    </div>
</template>

<script>
    export default {
        props: {
            resume: {
                type: Object,
                required: true
            }
        },
        created() {
            console.log(this.resume)
        }
    }
</script>

<style lang="scss" scoped>
    .resume {
        width: 80%;
        padding: 20px 40px;
        border-radius: 5px;
        box-sizing: border-box;
        margin: 10px auto 0 auto;
        border: $border-light-gray;
        height: 100vh;
    }

    .resume__header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .opacity {
        opacity: 0.8;
    }

    .split-line {
        margin: 0;
        padding: 0;
        background-color:rgba(0,0,0,0.5);
        border: none;
        height: 1px;
    }
</style>