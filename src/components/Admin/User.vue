<template>
    <transition name="slide-fade">
        <div class="user">
            <div class="user__name">
                {{user.surname}} {{user.name}} {{user.email}} <span class="user__admin" v-if="user.isAdmin">Администратор</span>
            </div>
            <div class="user__buttons">
                <button v-if="user._id !== authStore.user._id" class="delete-button" @click="deleteUser(user._id)">&nbsp;Удалить</button>
            </div>
        </div>
    </transition>
</template>

<script>
    import {mapState} from 'vuex'
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
        },
        computed: {
            ...mapState(['authStore'])
        }
    }
</script>

<style lang="scss" scoped>
    .user {
        cursor: pointer;
        width: 100%;
        height: 50px;
        padding: 0 15px;
        border: $border-light-gray;
        border-radius: 6px;
        margin-bottom: 20px;
        //@include boxShadowBigBlur;
        @include flexSpaceBetween;
    }

    .user__admin {
        color: red;
    }

    .delete-button {
        @include button-dark;
    }

    .slide-fade-enter-active {
        transition: all .2s ease;
    }
    .slide-fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateY(5px);
        opacity: 0;
    }
</style>