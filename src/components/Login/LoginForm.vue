<template>
    <div class="login-form">
        <h3 class="form__title">Авторизация</h3>
        <form>
            <label class="form__label" for="login">
                Почта
            </label>
            <input class="form__input" name="login" type="email" v-model="email" />
            <label class="form__label" for="password">
                Пароль
            </label>
            <input class="form__input" name="password" type="password" v-model="password"/>
            <button type="submit" @click.prevent="submitForm" class="form_submit-button">Войти</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      submitForm() {
        console.log('email', this.email, 'password', this.password)
        this.$router.replace('/')
      }
    }
};
</script>

<style lang="scss" scoped>
.login-form {
    @include boxShadowBigBlur;
    max-width: 50%;
    min-width: 400px;
    height: auto;
    border-radius: $border-radius;
    // border: $border-light-gray;
    padding: 20px 20px 60px 20px;
    box-sizing: border-box;

    .form__title {
        text-align: center;
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
}
</style>
