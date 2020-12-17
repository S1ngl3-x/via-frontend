<template>
  <div>
    <LoginAlertNeedToLogin />
    <LoginForm />
    <login-link-to-register />
  </div>
</template>

<script>
import LoginForm from '@/components/forms/login/loginForm';
import LoginAlertNeedToLogin from '@/components/forms/login/alerts/loginAlertNeedToLogin';
import LoginLinkToRegister from '@/components/forms/login/loginLinkToRegister';
export default {
  name: 'Login',
  components: { LoginLinkToRegister, LoginAlertNeedToLogin, LoginForm },
};
</script>

<style scoped></style>
