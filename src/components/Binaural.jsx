import {
  Card,
  CardBody,
  CircularProgress,
  Button,
  Progress,
} from "@nextui-org/react";

import { Activity } from "lucide-react";
import SliderWithSideButton from "./SliderWithSideButton";
import useBinaural from "../hooks/useBinaural";

export default function Binaural() {
  const {
    isPlaying,
    setIsPlaying,
    leftFreq,
    setLeftFreq,
    rightFreq,
    setRightFreq,
    volume,
    setVolume,
  } = useBinaural();

  const frequencyDifference = Math.abs(leftFreq - rightFreq);

  return (
    <Card className="max-w-[650px] mx-auto my-5 px-5 py-10">
      <CardBody
        className={`flex flex-col items-center space-y-5  ${
          isPlaying ? "hidden" : ""
        }`}
      >
        <div className="flex items-center space-x-5">
          <Activity className="animate-pulse duration-500" />
          <div className="text-xl ">
            <div className="m-2">
              {leftFreq == rightFreq ? leftFreq : frequencyDifference} hz
            </div>
            <Progress
              size="sm"
              isIndeterminate
              aria-label="Loading..."
              className="max-w-md"
            />
          </div>

          <Activity className="animate-pulse delay-75 duration-500 transform scale-x-[-1]" />
        </div>

        <SliderWithSideButton
          label={`Left Freq : ${leftFreq}`}
          value={leftFreq}
          setValue={setLeftFreq}
          minValue={1}
          maxValue={1000}
          step={1}
        />
        <SliderWithSideButton
          label={`Right Freq : ${rightFreq}`}
          value={rightFreq}
          setValue={setRightFreq}
          minValue={1}
          maxValue={1000}
          step={1}
        />
        <SliderWithSideButton
          label={`Volume : ${volume}`}
          value={volume}
          setValue={setVolume}
          minValue={1}
          maxValue={100}
          step={1}
        />

        <Button onClick={() => setIsPlaying((prev) => !prev)}>
          {isPlaying ? "Stop" : "Start"}
        </Button>
      </CardBody>

      <CardBody
        className={`flex flex-col items-center space-y-5 p-5 ${
          !isPlaying ? "hidden" : ""
        }`}
      >
        <CircularProgress
          aria-label="Binaural Progress Bar"
          size="lg"
          classNames={{
            svg: "w-40 h-40 drop-shadow-md",
            label: "text-2xl m-2",
          }}
          isIndeterminate={true}
          showValueLabel={true}
          label={`${leftFreq == rightFreq ? leftFreq : frequencyDifference} Hz`}
          strokeWidth="2"
          color={"success"}
        />

        <Button onClick={() => setIsPlaying((prev) => !prev)}>Stop</Button>
      </CardBody>
    </Card>
  );
}
