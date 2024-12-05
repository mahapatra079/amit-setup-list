import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import charactersData from "../../_data/db.json" // Correct import path

interface Character {
  id: number;
  name: string;
  real_name: string;  
  universe: string;
  avatar: string;
  powers: string[];
  first_appearance: string;
}


async function getCharacters(): Promise<Character[]> {
  const result = await fetch('http://localhost:4000/characters');

  //delay response 
    await new Promise((resolve) => setTimeout(resolve,3000))
    console.log('result',result)
    return result.json()  
}

export default async function Home() {
  // Access the characters data from the imported JSON
  // const characters = await getCharacters(); // Access the data directly
  const characters = await charactersData.characters;

  return (
    <main>
      <div className="grid grid-cols-3 gap-8 p-4">
        {characters.map((character) => (
          <Card key={character.id} className="flex flex-col justify-between shadow-xl">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>{character.name}</CardTitle>
              <CardDescription>{character.first_appearance}</CardDescription>
              <Avatar>
                <AvatarImage src={character.avatar} alt={character.avatar} />
                <AvatarFallback>{character.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
              <p><strong>Real Name:</strong> {character.real_name}</p>
              <p><strong>Universe:</strong> {character.universe}</p>
              <p><strong>Powers:</strong></p>
              <ul>
                {character.powers.map((power, index) => (
                  <li key={index}>{power}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-between flex-col items-start gap-4">
              <p>Marvel Tm X Mutant Tm</p>
              <div className="flex gap-5">
                  <Badge variant="destructive">Notify me</Badge>
                  <Button variant="secondary">Check This</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
