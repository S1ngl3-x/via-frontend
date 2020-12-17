<template>
  <v-app>
    <page-loader v-if="loading" />
    <v-container v-if="!loading">
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
      >
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar :clipped-left="clipped" fixed app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title v-text="title" />
        <v-spacer />
        <logout-button />
      </v-app-bar>
      <v-main>
        <v-container>
          <nuxt />
        </v-container>
      </v-main>
      <v-footer :absolute="!fixed" app>
        <span
          >{{ subjectName }} - {{ author }} &copy; {{ new Date().getFullYear() }}</span
        >
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
import LogoutButton from '@/components/user/logoutButton';
import PageLoader from '@/components/pageLoader';
import { mapActions } from 'vuex';
export default {
  components: { PageLoader, LogoutButton },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      author: 'Adam Lipowski',
      subjectName: 'VIA',
      title: 'Celebrity App',
      loading: true,
    };
  },

  computed: {
    user() {
      return this.$store.getters['user/user'];
    },
    items() {
      const items = [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
          secret: true,
          hideFromLoggedUser: false,
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Results',
          to: '/results',
          secret: true,
          hideFromLoggedUser: false,
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About',
          to: '/welcome',
          secret: false,
          hideFromLoggedUser: false,
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Login',
          to: '/login',
          secret: false,
          hideFromLoggedUser: true,
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Registration',
          to: '/registration',
          secret: false,
          hideFromLoggedUser: true,
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Testing',
          to: '/testingPage',
          secret: false,
          hideFromLoggedUser: false,
        },
      ];
      return items.filter((item) =>
        this.user.id ? !item.hideFromLoggedUser : !item.secret,
      );
    },
  },

  async mounted() {
    await this.authenticate();
    this.loading = false;
  },

  methods: {
    ...mapActions({
      authenticate: 'user/authenticate',
    }),
  },
};
</script>
