import "@/styles"
import ReactDOM from "react-dom/client"
import App from "@/App"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
import "@/install"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<App />)

serviceWorkerRegistration.register()
