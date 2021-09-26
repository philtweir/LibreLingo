import settings from "../settings.json"
import Cookies from "js-cookie"

const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"

const database = !isDevelopment
    ? settings.database.production
    : settings.database.development

const authEnabled = false // Cookies.get("authEnabled") !== "false" || process.browser

export default {
    ...settings,
    database,
    features: {
        authEnabled,
    },
}
