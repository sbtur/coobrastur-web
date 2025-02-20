import { HomePrivate, HomePublic } from './home';

const ISAUTHENTICATED = false;
export default function Page() {
  return ISAUTHENTICATED ? <HomePrivate /> : <HomePublic />;
}
