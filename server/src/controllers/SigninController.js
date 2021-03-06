require("dotenv").config();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { Users } from '../modules';
import { apiError, apiSuccess } from '../utilits/Errors';


const Signin = async (req, res) => {

    try {
        const { email, password } = req.body
        if (!(email && password)) {
            apiError(res)
        }
        const user = await Users.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({ user_id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1d" });
            const resp={token}
            return apiSuccess("Records found",resp, res);
            
        } else {
            apiError(res)
        }
      
    }   catch (err) {
             apiError(res)
     }
 
}

 



export {Signin}