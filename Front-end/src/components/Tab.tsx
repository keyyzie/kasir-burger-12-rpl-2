import { useEffect, useState } from "react"

function Tab() {
    const [activeTab, setactiveTab] = useState<"makanan" | "minuman" | "Semua" | "snack" | "semua">('Semua')

    useEffect(() => {
        const makEl = document.getElementById("makanan")
        const minEl = document.getElementById("minuman")
        const snaEl = document.getElementById("snack")
        if (!makEl || !minEl || !snaEl) return
        switch (activeTab) {
            case "makanan":
                makEl.classList.remove("hidden")
                minEl.classList.add("hidden")
                snaEl.classList.add("hidden")
                console.log(makEl)
                break;
            case "minuman":
                minEl.classList.remove("hidden")
                makEl.classList.add("hidden")
                snaEl.classList.add("hidden")
                console.log(minEl)
                break;
            case "snack":
                snaEl.classList.remove("hidden")
                makEl.classList.add("hidden")
                minEl.classList.add("hidden")
                console.log(snaEl)
                break;
            case "semua":
                makEl.classList.remove("hidden")
                minEl.classList.remove("hidden")
                snaEl.classList.remove("hidden")
                break;
            default:
                makEl.classList.remove("hidden")
                minEl.classList.remove("hidden")
                snaEl.classList.remove("hidden")
                break;
        }
    }, [activeTab])
    
  return (
  <div>
    <ul className="nav nav-pills gap-1 pb-3 mb-4 border-bottom">
                    <li className="nav-item">
                        <a className="nav-link active" onClick={() => setactiveTab("semua")} aria-current="page" href="#">Semua</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => setactiveTab("makanan")} href="#">Makanan</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => setactiveTab("minuman")} href="#">Minuman</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => setactiveTab("snack")} href="#">Snack</a>
                    </li>
                </ul>
  </div>
    

  )
}

export default Tab
