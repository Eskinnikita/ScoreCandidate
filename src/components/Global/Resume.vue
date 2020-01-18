<template>
    <div class="resume">
        <div class="resume__header">
            <div class="resume__header-wrapper">
                <h2>{{resume.profession}}</h2>
                <p v-if="resume.type_of_work">Занятость {{resume.type_of_work.title.toLowerCase()}}, готовность к командировкам {{resume.business_trip.title.toLowerCase()}}</p>
            </div>
            <div class="resume__id opacity">id{{resume.id}}</div>
        </div>
        <hr class="split-line">
        <div class="resume__experience structure-block">
             <div class="block-header">
                 <h3>Опыт <span class="subtitle">{{resume.experience_text}}</span></h3>
             </div>
             <div class="experience__history">
                 <div class="history__item splited-block" v-for="(work, index) in resume.work_history" :key="index">
                    <div class="item__period opacity splited-left">
                        {{monthConverter(work.monthbeg)}} {{work.yearbeg}} - <br> {{monthConverter(work.monthend)}} {{work.yearend}}
                    </div>
                     <div class="item__info splited-right">
                        <h4>{{work.profession}}</h4>
                         <span>{{work.name}}, {{work.townName}}</span> <br>
                         <span>{{work.company_scope}}</span> <br>
                         <span><b>Обязанности:</b> <br> {{work.work}}</span>
                     </div>
                 </div>
             </div>
        </div>
        <hr class="split-line">
        <div class="resume__education structure-block splited-block">
            <div class="education__item">
                <div class="block-header">
                    <h3>Образование</h3>
                </div>
                <div class="education__history">
                    <div class="splited-block" v-for="(institute, index) in resume.base_education_history" :key="index">
                        <div class="splited-left opacity">
                            {{institute.education_type.title}} образование <br>
                            <template v-if="institute.yearend !== 0">{{institute.yearend}}</template>

                        </div>
                        <div class="splited-right">
                            <h4>{{institute.institute.title}}</h4>
                            Факультет: {{institute.faculty}} <br>
                            Специальность: {{institute.profession}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="split-line">
        <div class="resume__skills structure-block">
            <div class="block-header">
                <h3>Образование</h3>
            </div>
            <div class="skills__block">
                <b>Профессиональные навыки:</b> <br>
                {{resume.achievements}}
            </div>
            <div class="skills__block">
                <b>Дополнительные сведения:</b> <br>
                {{resume.additional_info}}
            </div>
        </div>
        <hr class="split-line">
        <div class="resume__languages structure-block">
            <div class="block-header">
                <h3>Иностранные языки:</h3>
            </div>
            <div class="skills__block">
                <b>Профессиональные навыки:</b> <br>
                {{resume.achievements}}
            </div>
        </div>
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
        },
        methods: {
            monthConverter(num) {
                let month = ''
                switch (num) {
                    case 1:
                        month = 'Январь';
                        break;
                    case 2:
                        month = 'Февраль';
                        break;
                    case 3:
                        month = 'Март';
                        break;
                    case 4:
                        month = 'Апрель';
                        break;
                    case 5:
                        month = 'Май';
                        break;
                    case 6:
                        month = 'Июнь';
                        break;
                    case 7:
                        month = 'Июль';
                        break;
                    case 8:
                        month = 'Август';
                        break;
                    case 9:
                        month = 'Сентябрь';
                        break;
                    case 10:
                        month = 'Октябрь';
                        break;
                    case 11:
                        month = 'Ноябрь';
                        break;
                    case 12:
                        month = 'Декабрь';
                        break;
                }
                return month
            }
        }
    }
</script>

<style lang="scss" scoped>
    .resume {
        width: 80%;
        padding: 20px 40px 60px 40px;
        border-radius: 5px;
        box-sizing: border-box;
        margin: 10px auto 0 auto;
        border: $border-light-gray;
        height: auto;
        margin-bottom: 60px;
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
        margin-bottom: 20px;
    }

    .subtitle {
        font-size: 14px;
    }

    .splited-block {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-top: 20px;
    }

    .splited-left {
        padding-right: 60px;
        width: 150px;
    }

    h1,h2,h3,h4,h5 {
        margin: 0;
        padding: 0;
    }

    .splited-right {
        width: 100%;
    }

    .structure-block {
        margin-bottom: 20px;
    }

    .skills__block {
        margin-top: 15px;
    }
</style>