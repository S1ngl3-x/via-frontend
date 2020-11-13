<template>
  <div>
    <LoginAlertNeedToLogin />
    <LoginForm />
    <UserLoginStatus />
    <!--    todo - delete later that user status-->
  </div>
</template>

<script>
import LoginForm from '@/components/forms/login/loginForm';
import LoginAlertNeedToLogin from '@/components/forms/login/alerts/loginAlertNeedToLogin';
import UserLoginStatus from '@/components/user/userLoginStatus';
export default {
  name: 'Login',
  components: { UserLoginStatus, LoginAlertNeedToLogin, LoginForm },
};
</script>

<style scoped></style>
