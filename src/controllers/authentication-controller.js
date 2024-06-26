import { authenticationService } from "../services/index.js"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants.js";

export default {
    async signUp(req, res, next) {
        const { email, name, password, phoneNumber } = req.body
        await authenticationService.createUser({ email, name, password, phoneNumber });
        return res.status(200).json("ok")
    },
    async signIn(req, res) {
        const { email, password } = req.body
        const { accessToken, refreshToken } = await authenticationService.signIn({ email, password })
        if (!accessToken || !refreshToken) throw new UnauthorizedError("Generate access and refresh token failed")
        res.cookie(ACCESS_TOKEN, accessToken, { httpOnly: true, secure: true })
        res.cookie(REFRESH_TOKEN, refreshToken, { httpOnly: true, secure: true })
        return res.status(200).json("ok")
    },
    async logOut(req, res) {
        const { email, password } = req.body
        const { accessToken, refreshToken } = await authenticationService.signIn({ email, password })
        if (!accessToken || !refreshToken) throw new UnauthorizedError("Generate access and refresh token failed")
        res.cookie(ACCESS_TOKEN, accessToken, { httpOnly: true, secure: true })
        res.cookie(REFRESH_TOKEN, refreshToken, { httpOnly: true, secure: true })
        return res.status(200).json("ok")
    },
    async refreshToken(req, res, next) {
        const refreshToken= req.cookies[REFRESH_TOKEN]
        if (!refreshToken) throw new RefreshTokenExpiredError("Refresh token failed")
        const accessToken = await authenticationService.generateAccessTokenFromRefreshToken(refreshToken)
        if (!accessToken) throw new UnauthorizedError("Generate access token failed")
        res.cookie(ACCESS_TOKEN, accessToken, { httpOnly: true, secure: true })
        return res.status(200).json("ok")
    }
}
