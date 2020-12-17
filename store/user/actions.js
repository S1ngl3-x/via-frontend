export default {
  async register({ commit }, { email, password }) {
    const createUserDto = { email, password };
    const response = await this.$axios.$post('auth/register', createUserDto).catch(() => {
      throw new Error('User exists');
    });
    if (response) {
      await this.$router.push('/login');
    }
  },

  async login({ commit }, { email, password }) {
    const loginUserDto = { email, password };
    const response = await this.$axios.$post('auth/login', loginUserDto).catch(() => {
      throw new Error('Login failed');
    });
    if (response) {
      commit('setUser', response);
      await this.$router.push('/');
    }
  },

  async authenticate({ commit }) {
    const response = await this.$axios
      .$get('auth')
      .catch(() => this.$router.push('login'));
    if (response) {
      commit('setUser', response);
    }
  },
};
