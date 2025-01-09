"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LeaveChart from "./LeaveChart"
import TaskTable from "./TaskTable"
import LeavesData from "./LeavesData"

const Tabsview = () => {
    return (
        <>
            <Tabs defaultValue="overall" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="overall">Overall</TabsTrigger>
                    <TabsTrigger value="leaves">Leaves</TabsTrigger>
                    <TabsTrigger value="leads">Leads</TabsTrigger>
                    <TabsTrigger value="tasks">Tasks</TabsTrigger>
                </TabsList>
                <TabsContent value="overall"><LeaveChart/></TabsContent>
                <TabsContent value="leaves">
                    <h1 className="text-md py-1">You have taken <span className="text-xl font-bold">14</span> Leaves this month.</h1><br/>
                    <LeavesData/>
                </TabsContent>
                <TabsContent value="leads">Given 96 Leads</TabsContent>
                <TabsContent value="tasks" className="w-3/4 sm:w-full"><TaskTable/></TabsContent>
            </Tabs>
        </>
    )
}

export default Tabsview;