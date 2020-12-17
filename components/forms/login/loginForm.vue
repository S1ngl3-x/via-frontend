<template>
  <div>
    <form @submit="submit">
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="email"
        hint="Like example@mail.com"
        clearable
        :counter="lengthLimit"
        required
        tabindex="1"
        @input="invalidLogin = false"
        @blur="$v.email.$touch()"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :error-messages="passwordErrors"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        label="password"
        hint="At least 5 characters"
        required
        clearable
        :counter="lengthLimit"
        tabindex="2"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        @input="invalidLogin = false"
        @blur="$v.password.$touch()"
      ></v-text-field>

      <v-btn class="mr-4" tabindex="3" type="submit" value="Submit"> login </v-btn>
      <v-btn tabindex="4" @click="clear"> clear </v-btn>
    </form>
    <ErrorInvalidLogin v-if="invalidLogin" />
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength, minLength, email } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';
import ErrorInvalidLogin from '@/components/forms/errors/errorInvalidLogin';

export default {
  name: 'LoginForm',
  components: { ErrorInvalidLogin },
  mixins: [validationMixin],

  validations: {
    email: { required, email, minLength: minLength(5), maxLength: maxLength(30) },
    password: { required, minLength: minLength(5), maxLength: maxLength(30) },
  },

  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      lengthLimit: 30,
      invalidLogin: false,
    };
  },

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail (example@mail.com)');
      !this.$v.email.required && errors.push('E-mail is required');
      !this.$v.email.minLength &&
        errors.push('E-mail must be at least 5 characters long');
      !this.$v.email.maxLength &&
        errors.push('E-mail cannot be more than 30 characters long');
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push('Password is required');
      !this.$v.password.minLength &&
        errors.push('Password must be at least 5 characters long');
      !this.$v.password.maxLength &&
        errors.push('Password cannot be more than 30 characters long');
      return errors;
    },
    valid() {
      return this.$v.$anyDirty && !this.$v.$invalid && !this.invalidLogin;
    },
  },

  methods: {
    ...mapActions({
      login: 'user/login',
    }),

    async submit(e) {
      e.preventDefault();
      this.$v.$touch();
      if (this.valid) {
        await this.login({
          email: this.email,
          password: this.password,
        }).catch(() => {
          this.invalidLogin = true;
        });
      }
    },
    clear() {
      this.$v.$reset();
      this.email = '';
      this.password = '';
      this.showPassword = false;
    },
  },
};
</script>

<style scoped></style>
