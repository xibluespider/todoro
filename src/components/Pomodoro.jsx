import {
  Button,
  Card,
  CardBody,
  Slider,
  CircularProgress,
  Switch,
} from "@nextui-org/react";

import { Play, Pause, RotateCcw, CircleStop } from "lucide-react";

import usePomodoro from "../hooks/usePomodoro";

export default function Pomodoro() {
  const {
    workTimeLimit,
    setWorkTimeLimit,
    breakTimeLimit,
    setBreakTimeLimit,
    isPlaying,
    setIsPlaying,
    isWork,
    setIsWork,
    timeLeft,
    resetTimer,
    formatSecondsToMinutes,
    stopAlarm,
    isAlarmPlaying,
    alarmRef,
  } = usePomodoro();

  return (
    <Card
      isBlurred
      className="dark:bg-default-100/50 mx-auto my-10 max-w-[650px]"
    >
      <CardBody className="p-10 flex flex-col items-center space-y-10">
        <CircularProgress
          aria-label="Loading..."
          strokeWidth={2}
          value={
            (timeLeft * 100) /
            (isWork ? workTimeLimit * 60 : breakTimeLimit * 60)
          }
          color={isWork ? "success" : "default"}
          valueLabel={formatSecondsToMinutes(timeLeft)}
          showValueLabel={true}
          classNames={{
            svg: "w-40 h-40 drop-shadow-md",
            track: "stroke-white/10",
            value: "text-4xl text-white",
          }}
        />

        <Button
          isIconOnly
          onClick={stopAlarm}
          className={`flex space-x-2 w-64 ${isAlarmPlaying ? "" : "hidden"}`}
        >
          <CircleStop size={20} /> <div>Stop</div>
        </Button>

        <div className="flex flex-col space-y-10">
          <div className={`flex space-x-10 ${isAlarmPlaying ? "hidden" : ""}`}>
            <Button isIconOnly onClick={() => setIsPlaying((prev) => !prev)}>
              {!isPlaying ? <Play size={20} /> : <Pause size={20} />}
            </Button>

            <Switch
              color="success"
              isDisabled={isPlaying}
              isSelected={isWork}
              onChange={(event) => setIsWork((prev) => event.target.checked)}
              size="lg"
              width={300}
              className="max-w-md"
              height={300}
            >
              <div>{isWork ? "Work" : "Break"}</div>
            </Switch>

            <Button isIconOnly onClick={resetTimer}>
              <RotateCcw size={20} />
            </Button>
          </div>

          <div className={isAlarmPlaying ? "hidden" : ""}>
            <Slider
              isDisabled={isPlaying}
              label="Work Session in Minutes"
              size="sm"
              step={1}
              maxValue={60}
              minValue={1}
              value={workTimeLimit}
              onChange={setWorkTimeLimit}
              className={`w-full + ${isPlaying || !isWork ? "hidden" : ""}`}
            />

            <Slider
              isDisabled={isPlaying}
              label="Break Session in Minutes"
              size="sm"
              step={1}
              maxValue={60}
              minValue={1}
              value={breakTimeLimit}
              onChange={setBreakTimeLimit}
              className={`w-full + ${isPlaying || isWork ? "hidden" : ""}`}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
