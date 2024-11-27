import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Card} from "@/components/Card.tsx";
import {useState} from "react";
import {Randomizer} from "@/lib/Randomize.ts";
import {scorestreaks} from "@/scorestreaks";
import {Button} from "@/components/ui/button.tsx";
import Primary from "@/components/Primary.tsx";
import Secondary from "@/components/Secondary.tsx";

function App() {
    const [includeScorestreaks, setIncludeScorestreaks] = useState(true)
    const randomizer = new Randomizer(scorestreaks);
    const [randomScorestreaks, setRandomScorestreaks] = useState(randomizer.randomize(3));
    randomizer.reset();

    const reRoll = () => {
        setRandomScorestreaks(randomizer.randomize(3));
        randomizer.reset()
    }
    return (
        <div className="mt-4 mb-8 min-h-full md:px-10 mx-auto xl:px-20 2xl:max-w-[1280px] 2xl:px-0 w-full px-4">
            <div className="flex justify-between items-center">
                <div className="space-x-2">
                    <Checkbox
                        aria-label="Include scorestreaks?"
                        onCheckedChange={(e: boolean) => setIncludeScorestreaks(e)}
                        checked={includeScorestreaks}/>
                    <span className="text-white">
                        Include scorestreaks?
                    </span>
                </div>
                <Button onClick={() => reRoll()} variant="primary">
                    Randomize
                </Button>
            </div>
            <div className="md:grid grid-cols-4 gap-4 mt-4">
                <h1 className="col-span-3 text-white lg:text-4xl text-2xl md:text-2xl">
                    Loadout
                </h1>
                {includeScorestreaks && (
                    <h2 className="col-span-1 text-white lg:text-4xl hidden md:block md:text-2xl">
                        Scorestreaks
                    </h2>
                )}
            </div>
            <div className="md:grid grid-cols-4 gap-4 mt-4">
                <div className="col-span-3">
                    <Primary />
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <Secondary />
                        <Card/>
                        <div className="grid grid-cols-2 gap-4">
                            <Card/>
                            <Card/>
                        </div>
                        <Card/>
                        <div className="grid grid-cols-2 gap-4">
                            <Card/>
                            <Card/>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                    <Card className="mt-4"/>
                </div>
                {includeScorestreaks && (
                    <>
                        <h2 className="md:hidden text-white mt-4 md:mt-0 text-2xl">
                            Scorestreaks
                        </h2>
                        <div className="col-span-1 flex flex-col gap-4">
                            <Card item={randomScorestreaks[0]}/>
                            <Card item={randomScorestreaks[1]}/>
                            <Card item={randomScorestreaks[2]}/>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
