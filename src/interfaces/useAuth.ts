
type Middleware = 'guest' | 'auth';


export default interface useAuthData {
  middleware: Middleware;
  redirectIfAuthenticated?: string
}