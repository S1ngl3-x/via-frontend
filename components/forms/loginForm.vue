<template>
  <form>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="email"
      hint="Like example@mail.com"
      clearable
      :counter="lengthLimit"
      required
      tabindex="1"
      @input="$v.email.$touch()"
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
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>

    <v-btn class="mr-4" @click="submit"> submit </v-btn>
    <v-btn @click="clear"> clear </v-btn>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength, minLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'LoginForm',

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
  },

  methods: {
    submit() {
      this.$v.$touch();
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
