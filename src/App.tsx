import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import View from './View'





function App() {


    return (
        <>
            <Tabs defaultValue="combinations" className="w-7xl mx-auto font-mono">
                <TabsList className="mx-auto" >
                    <TabsTrigger className="text-2xl p-4" value="combinations">Combinations</TabsTrigger>
                    <TabsTrigger className="text-2xl p-4" value="permutations">Permutations</TabsTrigger>
                </TabsList>
                <TabsContent value="combinations" className="mx-auto">
                    <View state="combinations" />
                </TabsContent>
                <TabsContent value="permutations" className="mx-auto">
                    <View state="permutations" />
                </TabsContent>
            </Tabs>

        </>
    )
}

export default App
