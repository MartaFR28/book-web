import { createHttp } from './BaseService';

const http = createHttp(false);

export const login = ({ email, password }) => http.post('/login', { email, password })

export const signup = ({firstName, lastName, userName, email, password}) => http.post('/signup', {firstName, lastName, userName, email, password})