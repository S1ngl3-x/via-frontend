<template>
  <div>
    <RegistrationAlertToRegister />
    <RegisterForm />
    <RegistrationLinkToLogin />
  </div>
</template>

<script>
import RegisterForm from '@/components/forms/registration/registerForm';
import RegistrationLinkToLogin from '@/components/forms/registration/registrationLinkToLogin';
import RegistrationAlertToRegister from '@/components/forms/registration/alerts/registrationAlertToRegister';
export default {
  name: 'Registration',
  components: { RegistrationAlertToRegister, RegistrationLinkToLogin, RegisterForm },
};
</script>

<style scoped></style>
