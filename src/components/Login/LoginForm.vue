<template>
    <div class="login-form">
        <h3 class="form__title">Авторизация</h3>
        <form>
            <label class="form__label" for="login">
                Почта
            </label>
            <input class="form__input" id="login" type="email" v-model="email" />
            <label class="form__label" for="password">
                Пароль
            </label>
            <input class="form__input" id="password" type="password" autocomplete="email password" v-model="password"/>
            <button type="submit" @click.prevent="login" class="form_submit-button">Войти</button>
            <error-handler :error="authStore.error"/>
        </form>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ErrorHandler from "../UI/ErrorHandler"

export default {
    components: {
        'error-handler': ErrorHandler
    },
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
          const {email, password} = this
          this.$store.dispatch('authRequest', {email, password})
          .then(() => {
              this.$router.push({path: '/'})
          })
          .catch(err => {
              console.log(err)
          })
      }
    },
    computed: {
        ...mapState(['authStore'])
    }
};
</script>

<style lang="scss" scoped>
.login-form {
    height: 340px;
    @include boxShadowBigBlur;
    max-width: 50%;
    min-width: 400px;
    border-radius: $border-radius;
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
