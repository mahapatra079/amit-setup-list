import { Skeleton } from "./ui/skeleton";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export default function SkeletonCard() {
  return (
    <div className="grid grid-cols-3 gap-8">
        <Card className="ml-7 w-[480px] flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
            <Skeleton className="w-12 h-12 rounded-full"/>
            <Skeleton className="w-6 h-6 flex-grow"/>
            </CardHeader>
            <CardContent>
                <Skeleton className="h-4 flex-grow mt-4"/>
                <Skeleton className="h-4 flex-grow mt-4"/>
                <Skeleton className="h-4 w-1/2 mt-4"/>  
                {/* it will take  half width of the conatiner */}
            </CardContent>
            <CardFooter>
                <Skeleton className="h-10 w-28"/>
            </CardFooter>
        </Card>
    </div>
  )
}
