export default {
  async register({ commit }, { email, password }) {
    const createUserDto = { email, password };
    await this.$axios.$post('auth/register', createUserDto).catch(() => {
      throw new Error('User exists');
    });
  },

  async login({ commit }, { email, password }) {
    const loginUserDto = { email, password };
    const response = await this.$axios.$post('auth/login', loginUserDto).catch(() => {
      throw new Error('Login failed');
    });
    if (response) {
      commit('setUser', response);
    }
  },

  async authenticate() {
    return await this.$axios.$get('auth');
  },
};
