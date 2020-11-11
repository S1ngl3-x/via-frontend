<template>
  <div>
    <h2>Login</h2>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/forms/loginForm';
export default {
  name: 'Login',
  components: { LoginForm },
};
</script>

<style scoped></style>
