<template>
    <div id="header">
        <div class="wrapper">
            <span class="title" @click="toHomePage">Score Candidate <i class="fas fa-file"></i></span>
            <div>
                <button class="header__admin-link" v-if="isAdminPage" @click="goToAdminPage">Добавить пользователя</button>
                <span v-if="hasToken" class="username link-button">
                    {{authStore.user.surname}} {{authStore.user.name}}
                </span>
                <button class="link-button" v-if="hasToken" @click="logout">выйти</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {};
    },
    created() {
    },
    methods: {
        toHomePage() {
            this.$router.replace("/", () => {});
        },
        logout() {
            this.$store
                .dispatch("authLogout")
                .then(() => {
                    this.$router.push({ path: "/login" }, () => {});
                })
                .catch(err => {
                    console.log(err.message);
                });
        },
        goToAdminPage() {
            this.$router.push('/admin')
        }
    },
    computed: {
        ...mapState(['authStore']),
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
};
</script>

<style lang="scss" scoped>
#header {
    width: 100%;
    height: 55px;
    box-sizing: border-box;
    background-color: $main-color;
    margin-bottom: 30px;
    color: #fff;

    .link-button {
        @include link(#fff);
    }

    .title {
        font-size: 20px;
        text-transform: uppercase;
        font-weight: semi-bold;
        cursor: pointer;
    }

    .username {
        padding: 0 10px;
    }

    .header__admin-link {
        @include button-light;
        padding: 5px;
        font-size: 12px;
    }
}

.wrapper {
    @include flexSpaceBetween;
    height: 100%;
}
</style>
