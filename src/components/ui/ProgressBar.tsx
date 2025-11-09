interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

export default function ProgressBar({ step, totalSteps }: ProgressBarProps) {
  const progress = ((step + 1) / totalSteps) * 100;

  return (
    <div className="flex justify-center w-full mt-8">
      <div className="w-xl h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#604BFF] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
