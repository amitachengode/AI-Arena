import { useState } from "react";

export interface DebateConfig {
  topic: string;
  position: "for" | "against" | "";
  duration: number;
  rounds: number;
}

interface TopicSelectionPageProps {
  onStartDebate?: (config: DebateConfig) => void;
  onCancel?: () => void;
}

export default function TopicSelectionPage({
  onStartDebate,
  onCancel,
}: TopicSelectionPageProps) {
  const [topic, setTopic] = useState("");
  const [position, setPosition] = useState<"for" | "against" | "">("");
  const [duration, setDuration] = useState<number>(5);
  const [rounds, setRounds] = useState<number>(3);

  const highlighted =
    "border-1 border-green-500 bg-green-500/10 text-green-500 rounded-lg p-2 w-full m-1 cursor-pointer flex items-center gap-2";
  const unhighlighted =
    "border-1 border-white bg-white/10 text-white rounded-lg p-2 w-full m-1 cursor-pointer flex items-center gap-2";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!topic.trim()) {
      alert("Please enter a topic.");
      return;
    }

    if (!position) {
      alert("Please select a position.");
      return;
    }

    const payload: DebateConfig = {
      topic: topic.trim(),
      position,
      duration: Number(duration),
      rounds: Number(rounds),
    };

    console.log("Starting debate with config:", payload);
    onStartDebate?.(payload);
  };

  const handleCancel = () => {
    setTopic("");
    setPosition("");
    setDuration(5);
    setRounds(3);
    onCancel?.();
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <form className="justify-left max-w-96" onSubmit={handleSubmit}>
          <p className="text-4xl font-extralight text-white">Fill the form below to start the debate</p>
          <hr className="border-white/20 my-2" />
          {/* Topic */}
          <div className="pt-5">
            <p className="form-input-label">Topic</p>
            <textarea
              className="form-input"
              rows={4}
              cols={50}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter debate topic..."
              required
            />
            <p className="form-footer-label">Please enter the topic you want to discuss</p>
          </div>

          {/* Position */}
          <div className="pt-5">
            <p className="form-input-label">Position</p>
            <div className="flex items-center gap-2.5">
              <label
                htmlFor="for"
                className={position === "for" ? highlighted : unhighlighted}
              >
                <input
                  type="radio"
                  name="position"
                  id="for"
                  value="for"
                  checked={position === "for"}
                  onChange={() => setPosition("for")}
                />
                For
              </label>

              <label
                htmlFor="against"
                className={position === "against" ? highlighted : unhighlighted}
              >
                <input
                  type="radio"
                  name="position"
                  id="against"
                  value="against"
                  checked={position === "against"}
                  onChange={() => setPosition("against")}
                />
                Against
              </label>
            </div>
            <p className="form-footer-label">Please enter your position</p>
          </div>

          {/* Debate Config */}
          <div className="pt-5">
            <p className="form-input-label">Debate config</p>
            <div className="flex gap-2.5">
              <div className="flex-1">
                <p className="text-sm text-white/70">Duration (mins)</p>
                <input
                  type="number"
                  min={1}
                  max={60}
                  className="form-input"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  required
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-white/70">Rounds</p>
                <input
                  type="number"
                  min={1}
                  max={10}
                  className="form-input"
                  value={rounds}
                  onChange={(e) => setRounds(Number(e.target.value))}
                  required
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-5 flex justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2 w-full"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}