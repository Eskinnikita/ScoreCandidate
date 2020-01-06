<template>
    <div id="header">
        <div class="wrapper">
            <span class="title" @click="toHomePage">Score Candidate</span>
            <div>
                <span class="user-container">
                    <span v-if="hasToken" class="username link-button" @click="showUserMenu">
                    {{authStore.user.surname}} {{authStore.user.name}}
                    </span>
                    <user-menu ref="userMenu"/>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import userMenu from "./UI/userMenu"
export default {
    components: {
        'user-menu': userMenu
    },
    data() {
        return {};
    },
    created() {
    },
    methods: {
        toHomePage() {
            this.$router.replace("/", () => {});
        },
        showUserMenu() {
            this.$refs.userMenu.toggleMenu()
        }
    },
    computed: {
        ...mapState(['authStore']),
        hasToken() {
            return this.$store.getters.isAuthenticated;
        },
        isAdmin() {
            return this.$store.getters.isAdmin
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
        position: relative;
        padding: 0 10px;
    }

    .header__admin-link {
        @include button-light;
        padding: 5px;
        font-size: 12px;
    }

    .user-container {
        position: relative;
    }
}

.wrapper {
    @include flexSpaceBetween;
    height: 100%;
}
</style>
