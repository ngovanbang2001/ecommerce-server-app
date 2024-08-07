import { authenticationService } from "../services/index.js"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants.js";

export default {
    async signUp(req, res) {
        const { email, name, password, phoneNumber } = req.body
        await authenticationService.createUser({ email, name, password, phoneNumber });
        return res.status(200).json("ok")
    },
    
    async signIn(req, res) {
        const { email, password } = req.body
        const { accessToken, refreshToken } = await authenticationService.signIn({ email, password })
        if (!accessToken || !refreshToken) throw new UnauthorizedError("Generate access and refresh token failed")
        const optionCookie = {
            httpOnly: true,
            sameSite: process.env.NODE_ENV === "development" ? true : "none",
            secure: process.env.NODE_ENV === "development" ? false : true,
        }

        res.cookie(ACCESS_TOKEN, accessToken, optionCookie)
        res.cookie(REFRESH_TOKEN, refreshToken, optionCookie)
        res.send()
    },
    
    async signOut(req, res) {
        res.clearCookie(ACCESS_TOKEN)
        res.clearCookie(REFRESH_TOKEN)
        res.send()
    },

    async refreshToken(req, res) {
        const refreshToken = req.cookies[REFRESH_TOKEN]
        if (!refreshToken) throw new RefreshTokenExpiredError("Refresh token failed")
        const accessToken = await authenticationService.generateAccessTokenFromRefreshToken(refreshToken)
        if (!accessToken) throw new UnauthorizedError("Generate access token failed")
        const optionCookie = {
            httpOnly: true,
            sameSite: process.env.NODE_ENV === "development" ? true : "none",
            secure: process.env.NODE_ENV === "development" ? false : true,
        }
        res.cookie(ACCESS_TOKEN, accessToken, optionCookie)
        res.send()
    }
}
