import { register, init } from "svelte-i18n"

register("ga", () => require("./translation/ga.json"))

init({
    fallbackLocale: "ga",
    initialLocale: "ga",
})
