import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helper";
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import { AddBudgetFrom } from "../components/AddBudgetFrom"
export function dashboardLoader() {
    const userName = fetchData("userName");
    const budgets = fetchData("budgets");
    return { userName, budgets }
}

export async function dashboardAction({ request }) {
    const data = await request.formData();
    // console.log(data)
    try {
        const formData = Object.fromEntries(data)
        localStorage.setItem("userName", JSON.stringify(formData.userName))
        return toast.success(`Welcome, ${formData.userName}`)
        // throw new Error('Ya Done')
    } catch (error) {
        throw new Error("There was a problem creating your account.")
    }
}



const Dashboard = () => {
    const { userName, budgets } = useLoaderData();
    // console.log(useLoaderData())
    return (
        <div>
            {userName ?
                <div className="dashboard">
                    <h1>Welcome back, <span className="accent">{userName}</span></h1>
                    <div className="grid-sm">
                        {/* {budgets ? } */}
                        <div className="grid-lg">
                            <div className="flex-lg">
                                <AddBudgetFrom />
                            </div>
                        </div>
                    </div>
                </div> : <Intro />
            }
        </div>
    );
}

export default Dashboard;