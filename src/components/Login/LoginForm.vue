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
            <button type="submit" @click.prevent="login" class="form_submit-button">Войти</button>
            <span style="color: red">{{authStore.error}}</span>
        </form>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
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
