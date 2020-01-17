<template>
    <div class="users-list">
        <user
                v-for="(user, index) in users"
                :key="index"
                :user="user"
        />
    </div>
</template>

<script>
    import User from "./User"
    import {mapState} from 'vuex'
    export default {
        components: {
            user: User
        },
        data() {
            return {

            }
        },
        created() {
            this.$store.dispatch('getUsers')
        },
        computed: {
            ...mapState(['usersStore', 'authStore']),
            users() {
                return this.usersStore.users
            }
        }
    }
</script>

<style scoped>
    .users-list {
        width: 100%;
        padding: 10px 0 0 40px;
    }
</style>