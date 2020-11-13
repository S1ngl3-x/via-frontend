<template>
  <div>
    <form @submit="submit">
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="email"
        hint="Like example@mail.com"
        required
        clearable
        :counter="lengthLimit"
        tabindex="1"
        @input="errorOccurred = false"
        @blur="$v.email.$touch()"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :error-messages="passwordErrors"
        :append-icon="showPasswords ? 'mdi-eye' : 'mdi-eye-off'"
        label="password"
        hint="At least 5 characters"
        required
        clearable
        :counter="lengthLimit"
        :type="showPasswords ? 'text' : 'password'"
        tabindex="2"
        @click:append="showPasswords = !showPasswords"
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>

      <v-text-field
        v-model="passwordAgain"
        :error-messages="passwordAgainErrors"
        label="passwordAgain"
        :append-icon="showPasswords ? 'mdi-eye' : 'mdi-eye-off'"
        required
        clearable
        hint="Passwords must match"
        :counter="lengthLimit"
        :type="showPasswords ? 'text' : 'password'"
        tabindex="3"
        @click:append="showPasswords = !showPasswords"
        @input="$v.passwordAgain.$touch()"
        @blur="$v.passwordAgain.$touch()"
      ></v-text-field>

      <v-btn class="mr-4" type="submit" value="Submit" tabindex="4" @click="submit">
        submit
      </v-btn>
      <v-btn tabindex="5" @click="clear"> clear </v-btn>
    </form>
    <ErrorUserExists v-if="errorOccurred" />
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength, minLength, sameAs, email } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';
import ErrorUserExists from '@/components/forms/errors/errorUserExists';

export default {
  name: 'RegisterForm',
  components: { ErrorUserExists },
  mixins: [validationMixin],

  validations: {
    email: { required, email, minLength: minLength(5), maxLength: maxLength(30) },
    password: { required, minLength: minLength(5), maxLength: maxLength(30) },
    passwordAgain: { required, sameAs: sameAs('password') },
  },

  data() {
    return {
      email: '',
      password: '',
      passwordAgain: '',
      showPasswords: false,
      lengthLimit: 30,
      errorOccurred: false,
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
    passwordAgainErrors() {
      const errors = [];
      if (!this.$v.passwordAgain.$dirty) return errors;
      !this.$v.passwordAgain.required && errors.push('Repeated password is required');
      !this.$v.passwordAgain.sameAs && errors.push('Passwords do not match');
      return errors;
    },
    valid() {
      return this.$v.$anyDirty && !this.$v.$invalid && !this.errorOccurred;
    },
  },

  methods: {
    ...mapActions({
      register: 'user/register',
    }),
    async submit(e) {
      e.preventDefault();
      this.$v.$touch();
      if (this.valid) {
        await this.register({
          email: this.email,
          password: this.password,
        }).catch(() => (this.errorOccurred = true));
      }
    },
    clear() {
      this.$v.$reset();
      this.email = '';
      this.password = '';
      this.passwordAgain = '';
      this.showPasswords = false;
      this.errorOccurred = false;
    },
  },
};
</script>

<style scoped></style>
