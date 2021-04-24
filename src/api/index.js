import { signIn } from "./signIn";
import { signUp } from "./signUp";
import { getAlliances } from "./getAlliances";
import { getAlliance } from "./getAlliance";
import { createAlliance } from "./createAlliance";
import { getUserProfile } from "./getUserProfile";
import { updateTokens } from './updateTokens';

export const request = {
    signIn,
    signUp,
    getAlliance,
    getAlliances,
    createAlliance,
    getUserProfile,
    updateTokens,
}