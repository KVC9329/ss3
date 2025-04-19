"use client"
import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LeaveChart from "./LeaveChart"
import TaskTable from "./TaskTable"
import LeavesData from "./LeavesData"
import { useUser} from '@clerk/nextjs'

export async function getUserData(id) {
    const res = await fetch(
        `https://script.google.com/macros/s/AKfycbz-eaudNZH9o2I_Q3VA_pXdgkTV6bDqO3GmSTqXsmGS6YxVDQ8qhMv-uXBd-l--JJd0Rg/exec?id=${id}`,
        { cache: 'force-cache' } 
    );

    if (!res.ok) {
        throw new Error('Failed to fetch user data');
    }

    return res.json();
}

const Tabsview = () => {
    const { user } = useUser()
    const [recruiterData, setRecruiterData] = useState([{ Leaves: "...", Leads: "..." }])
    const recruiterID = user?.id

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserData(recruiterID)
                setRecruiterData(data)
            } catch (error) {
                console.error('Error fetching user data:', error)
            }
        }

        if (recruiterID !== "No User ID") {
            fetchData()
        }
    }, [recruiterID])

    console.log("REC DATA"+JSON.stringify(recruiterData, null, 2))
    // const recruiter = recruiterData[0]

    return (
        <>
            <Tabs defaultValue="overall" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="overall">Overall</TabsTrigger>
                    <TabsTrigger value="leaves">Leaves</TabsTrigger>
                    <TabsTrigger value="leads">Leads</TabsTrigger>
                    {/* <TabsTrigger value="tasks">Tasks</TabsTrigger> */}
                </TabsList>
                <TabsContent value="overall"><LeaveChart/></TabsContent>
                <TabsContent value="leaves">
                    <h1 className="text-md py-1">You have taken <span className="text-xl font-bold">{recruiterData[0]?.Leaves ?? "NULL"}</span> Leaves this month.</h1><br/>
                    <LeavesData/>
                </TabsContent>
                <TabsContent value="leads">Given <span className="text-xl font-bold">{recruiterData[0]?.Leads ?? "NULL"}</span> Leads</TabsContent>
                <TabsContent value="tasks" className="w-3/4 sm:w-full"><TaskTable/></TabsContent>
            </Tabs>
        </>
    )
}

export default Tabsview;