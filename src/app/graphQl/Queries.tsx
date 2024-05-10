export const GET_STATE_VINCULATION_QR = `
    query getStateVinculationQr {
        getStateVinculationQr {
            status
            statusCode
            updateDate
        }
    }
`;
export const GET_STATE_GENERATION_QR = `
    query getStateGenerationQr {
        getStateGenerationQr {
            status
            updateDate
            bankId
        }
    }
`;
export const GET_STATE_TX_REVERSING = `
    query getStateTxReversing {
        getStateTxReversing {
            idCommerce
            clientTransactionId
            status
            updateDate
            value
            motive
        }
    }
`;

export const GET_CLIENT_VALIDATION = `
    query getAccountQrValidation ($input: InputValidateCommerce) {
        getAccountQrValidation(input: $input){
            MsgRsHdr {
                Status {
                    StatusCode
                    ServerStatusCode
                    StatusDesc
                }
            }
        }
    }
`;
