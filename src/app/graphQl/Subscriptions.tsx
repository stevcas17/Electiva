export const GET_STATE_QR_VINCULATION = `
    subscription getStateQrVinculation($sub: String!) {
        getStateQrVinculation(sub: $sub) {
            id
            sub
            states {
                auth {
                    status
                    isValidUser
                    errorDetailActQR
                    qrStatusActivation
                }
            }
        }
    }
`;
export const GET_STATE_TRANSACTION_REVERSING = `
    subscription getStateTransactionReversing($sub: String!) {
        getStateTransactionReversing(sub: $sub) {
            id
            sub
            states {
                auth {
                    status
                    transactionReversingStatus
                    isValidUser
                }
            }
        }
    }
`;
