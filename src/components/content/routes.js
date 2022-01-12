import MainPage from "../../pages/main"
import LoginPage from "../../pages/login"
import ProfilePage from "../../pages/profile"
import SettingsPage from "../../pages/settings"

export const routes = [
  {
    path: '',
    component: MainPage,
    exact: true
  },
  {
    path: 'login',
    component: LoginPage,
    exact: true
  },
  {
    path: 'admin/profile',
    component: ProfilePage,
    exact: true
  },
  {
    path: 'admin/settings',
    component: SettingsPage,
    exact: true
  }
];
