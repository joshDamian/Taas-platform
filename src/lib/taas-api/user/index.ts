import { userRepository, xata } from "@/utils/constants";

type CreateTaasUserPayload = {   
    walletAddress: string;
    email: string;
}

const createUser = async (payload: CreateTaasUserPayload) => {
    return await userRepository.create(payload.email, {
        walletAddress: payload.walletAddress        
    });
};

export { createUser }