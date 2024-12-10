"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const Dashboard: React.FC = () => {
  const cardData = [
    { id: 1, title: "Card 1", description: "Description for Card 1", realName: "Amit", universe: "Earth Prime" },
    { id: 2, title: "Card 2", description: "Description for Card 2", realName: "John", universe: "Earth 2" },
    { id: 3, title: "Card 3", description: "Description for Card 3", realName: "Jane", universe: "Earth 3" },
  ];
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]
   
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig

  const listData = [
    { id: 1, title: "Item 1", description: "Description for Item 1", realName: "Amit", universe: "Earth Prime" },
    { id: 2, title: "Item 2", description: "Description for Item 2", realName: "John", universe: "Earth 2" },
    // Add more data as needed
  ];

  return (
  <>
    <div className="text-xl p-4 font-bold">
      <h1>Welcome to Dashboard</h1>
      <div className="grid grid-cols-3 gap-5 mt-2">
        {cardData.map((card) => (
          <Card key={card.id} className="flex flex-col justify-between shadow-xl">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>Real Name:</strong> {card.realName}</p>
              <p><strong>Universe:</strong> {card.universe}</p>
            </CardContent>
          </Card>
        ))}
      </div>  
      <div className="grid grid-cols-2 gap-5 mt-5">
        <Card className="mt-5 w-[100%] shadow-xl">
            <CardHeader>
              <CardTitle>Dashboard graph</CardTitle>
              <CardDescription>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                      <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                      <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    </BarChart>
               </ChartContainer>
              </CardDescription>
            </CardHeader>
          </Card>    
           <Card className="mt-5">
              <CardHeader>
                <CardTitle className="mb-2">Dashboard List</CardTitle>
                <CardDescription>
                  <div className="grid grid-cols-2 gap-5 mt-4">
                    <ul className="space-y-4">
                      {listData.map((item) => (
                        <li key={item.id} className="bg-white p-4 shadow-lg rounded-lg">
                          <h2 className="font-semibold text-lg">{item.title}</h2>
                          <p>{item.description}</p>
                          <p><strong>Real Name:</strong> {item.realName}</p>
                          <p><strong>Universe:</strong> {item.universe}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardDescription>
              </CardHeader>
          </Card>     
        </div>   
      </div>
    </>
  );
};

export default Dashboard;
