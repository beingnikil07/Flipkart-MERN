import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmParams, paytmMerchantKey } from '../index.js';


export const addPaymentGateway = async (req, res) => {
    try {
        let paytmCheckSum = await paytmchecksum.generateSignature(paytmParams,paytmMerchantKey);
        let params = {
            ...paytmParams,'CHECKSUMHASH':paytmCheckSum
        }
        res.status(200).json(params);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

}  