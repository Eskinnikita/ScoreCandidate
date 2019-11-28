<template>
    <div id="login-page">
        <login-form />
    </div>
</template>

<script>
import LoginForm from "@/components/Login/LoginForm";
export default {
    components: {
        "login-form": LoginForm
    }
};
</script>

<style lang="scss" scoped>
#login-page {
    @include flexCenter;
}
</style>
