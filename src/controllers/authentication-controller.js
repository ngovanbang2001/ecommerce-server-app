import { authenticationService } from "../services/index.js"

export default {
    async signUp(req, res, next) {
        const { email, name, password, phoneNumber } = req.body
        await authenticationService.createUser({ email, name, password, phoneNumber });
        return res.status(200).json("ok")
    },
    async signIn(req, res) {
        const { email, password } = req.body
        const { accessToken, refreshToken } = await authenticationService.signIn({ email, password });
        if (!accessToken || !refreshToken) throw new UnauthorizedError("Generate token and refresh token failed");
        res.cookie("access_token", accessToken, { httpOnly: true, secure: true })
        res.cookie("refresh_token", refreshToken, { httpOnly: true, secure: true })
        return res.status(200).json("ok")
    },
    refreshTokenService(token) {
    }
}
