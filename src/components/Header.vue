<template>
    <div id="header">
        <div class="wrapper">
            <span class="title" @click="toHomePage">Score Candidate <i class="fas fa-file"></i></span>
            <div>
                <span v-if="hasToken" class="username">{{authStore.user.surname}} {{authStore.user.name}}</span>
                <router-link to="/login" v-if="!hasToken">
                     <button class="link-button">войти</button>
                </router-link>
                <button class="link-button" v-else @click="logout">выйти</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    components: {},
    data() {
        return {};
    },
    created() {
       console.log()
    },
    methods: {
        toHomePage() {
            this.$router.replace("/", () => {});
        },
        logout() {
            this.$store
                .dispatch("authLogout")
                .then(() => {
                    this.$router.push({ path: "/login" });
                })
                .catch(err => {
                    console.log(err.message);
                });
        }
    },
    computed: {
        ...mapState(['authStore']),
        hasToken() {
            return this.$store.getters.isAuthenticated;
        }
        // hasNameOrSurname() {
        //     return this.user.surname || this.user.name
        // }
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
}

.wrapper {
    @include flexSpaceBetween;
    height: 100%;
}
</style>
