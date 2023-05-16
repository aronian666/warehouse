import { Provider } from "../../lib/tables"

export const load = async () => {
    const providers = await Provider.filter({}, { perPage: 100, raw: true })
    return { providers }
}