export const Auth = () => {
    const user = localStorage.getItem('User');
    const token = localStorage.getItem('token');
    return { user, token };
  };
  export const Authentication = (User,token) => {
    localStorage.setItem('User', User);
    localStorage.setItem('token', token);
  };
  