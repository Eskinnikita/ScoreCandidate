<template>
    <transition
            name="slide-fade"
    >
        <div v-click-outside="closeMenu" class="user-menu" v-show="isShown">
            <div class="user-menu__item" @click="goToRatedResume">
                Оцененные резюме
            </div>
            <div class="user-menu__item" v-if="isAdminPage" @click="goToAdminPage">
                Пользователи
            </div>
            <div class="user-menu__item" v-if="hasToken" @click="logout">
                Выйти
            </div>
        </div>
    </transition>
</template>

<script>
    import ClickOutside from 'vue-click-outside'

    export default {
        data() {
            return {
                isShown: false
            }
        },
        directives: {
            ClickOutside
        },
        methods: {
            toggleMenu() {
                this.isShown = !this.isShown
            },
            closeMenu() {
                event.target.classList.contains('username') ? this.isShown = true : this.isShown = false
            },
            logout() {
                this.$store
                    .dispatch("authLogout")
                    .then(() => {
                        this.$router.push({path: "/login"}, () => {
                        });
                    })
                    .catch(err => {
                        console.log(err.message);
                    });
            },
            goToAdminPage() {
                this.closeMenu()
                this.$router.push({path: '/admin'})
            },
            goToRatedResume() {
                this.closeMenu()
                this.$router.push({path: '/rated-resume'})
            }
        },
        computed: {
            hasToken() {
                return this.$store.getters.isAuthenticated;
            },
            isAdmin() {
                return this.$store.getters.isAdmin
            },
            isAdminPage() {
                return this.isAdmin && this.$route.name !== 'Admin'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .user-menu {
        position: absolute;
        z-index: 100000;
        left: -20px;
        top: 30px;
        padding: 10px 0;
        box-sizing: border-box;
        width: 200px;
        height: auto;
        background-color: #fff;
        border-radius: $border-radius;
        color: $main-color;
        @include boxShadowBigBlur;

        .user-menu__item {
            width: 80%;
            padding: 5px 20px;
            transition: 0.3s;
            cursor: pointer;

            &:hover {
                background-color: rgba(0, 0, 0, 0.2);
            }
        }
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