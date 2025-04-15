import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import View from './View'





function App() {


    return (
        <div className=' w-[100vw]'>
            <Tabs defaultValue="combinations" className="font-mono p-10">
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

            <footer className="fixed bottom-0 w-full text-center text-sm text-gray-500 py-4 bg-white border-t">
                © Rehan Shah 2025
            </footer>

        </div>
    )
}

export default App
