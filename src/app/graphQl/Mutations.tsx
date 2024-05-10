export const REFRESH_TOKEN_MUTATION = `
    mutation refreshToken($input: InputRefreshToken) {
        refreshToken(input: $input) {
            accessToken
            idToken
            newExpiration
        }
    }
`;
export const LOGOUT_MUTATION = `
    mutation logOut($id: ID!) {
        logOut(id: $id) {
            id
            states {
                auth {
                    status
                    documentLogin
                }
            }
        }
    }
`;
export const CLEAR_AUTH_MUTATION = `
mutation clearAuth($id: ID!) {
    clearAuth(id: $id) {
        id
        states {
            auth {
                status
            }
        }
    }
}
`;
export const LOGOFF_MUTATION = `
mutation forceLocalLogOut($id: ID!, $username: String) {
    forceLocalLogOut(id: $id, username: $username) {
        id
        states {
            auth {
                status
            }
        }
    }
}
`;
export const START_GENERATION_MUTATION = `
mutation startQRGeneration($id: ID!, $input: QRGenerationInput!) {
    startQRGeneration(id: $id, input: $input) {
        response
    }
}
`;
