<template>
    <div class="user">
       <div class="user__name">
           {{user.surname}} {{user.name}} {{user.email}} <span class="user__admin" v-if="user.isAdmin">Администратор</span>
       </div>
        <div class="user__buttons">
            <button class="delete-button" @click="deleteUser(user._id)">&nbsp;Удалить</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            user: {
                type: Object,
                required: true
            }
        },
        data() {
            return {

            }
        },
        methods: {
            deleteUser(id) {
                this.$store.dispatch('deleteUser', {id: id})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .user {
        cursor: pointer;
        width: 100%;
        padding: 15px;
        border: $border-light-gray;
        border-radius: 6px;
        margin-bottom: 20px;
        @include flexSpaceBetween;
    }

    .user__admin {
        color: red;
    }

    .delete-button {
        @include button-dark;
    }

</style>