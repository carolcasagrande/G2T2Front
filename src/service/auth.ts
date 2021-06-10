export const isAuthenticated = (): boolean => {
    const TokenStorage = localStorage.getItem('@tokenMaisha')
    if (TokenStorage){
        return true
    } else {
        return false
    }
};