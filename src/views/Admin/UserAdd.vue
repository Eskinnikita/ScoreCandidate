<template>
    <div class="admin-panel">
        <div class="admin-panel__user-add">
            <h2>Добавить пользователя</h2>
            <form>
                <label class="form__label" for="surname">
                    Фамимия
                </label>
                <input class="form__input" id="surname" type="text" v-model="user.surname" />
                <label class="form__label" for="name">
                    Имя
                </label>
                <input class="form__input" id="name" type="text" v-model="user.name" />
                <label class="form__label" for="email">
                    Почта
                </label>
                <input class="form__input" id="email" type="email" v-model="user.email" />
                <label class="form__label" for="password">
                    Пароль
                </label>
                <input class="form__input" id="password" type="password" v-model="user.password" />
                <label class="form__label" for="isAdmin">
                    Администратор?
                    <input class="form__input" id="isAdmin" type="checkbox" v-model="user.isAdmin" />
                </label>
                <button class="form_submit-button" @click.prevent="addUser">Дабавить</button>
                <span  style="color: green; text-align: center; margin-top: 10px;" v-if="usersStore.status">{{usersStore.status}}</span>
                <span style="color: red; text-align: center; margin-top: 10px;" v-else>{{usersStore.error}}</span>
            </form>
        </div>
        <users-list/>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import UsersList from "../../components/Admin/UsersList"
    export default {
        components: {
            'users-list': UsersList
        },
        created() {
            this.$store.dispatch('getUsers')
        },
        data() {
            return {
                user: {
                    surname: '',
                    name: '',
                    email: '',
                    password: '',
                    isAdmin: false
                }
            }
        },
        methods: {
            addUser() {
                this.$store.dispatch('addUser', this.user)
            }
        },
        computed: {
            ...mapState(['usersStore'])
        }
    }
</script>

<style lang="scss" scoped>
    .admin-panel {
        display: flex;
        justify-content: space-between;
    }
    .admin-panel__user-add {
        width: 40%;
        min-width: 400px;
        background-color: #fff;
        border-radius: $border-radius;
        border: $border-light-gray;
        padding: 5px 20px 20px 20px;
        box-sizing: border-box;
        height: auto;
    }

    form {
        @include flexDirectionColumn;
        .form__input {
            @include input;
        }

        .form__label {
            @include label;
        }

        .form_submit-button {
            @include button-dark;
        }
    }
</style>