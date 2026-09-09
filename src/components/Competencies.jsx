import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { competencies, competenciesIntro, toolkit } from "../data/content";
import { Section } from "./Section";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

export const Competencies = () => {
  const data = {
    labels: competencies.labels,
    datasets: [
      {
        label: "Self-assessed",
        data: competencies.values,
        backgroundColor: "rgba(20, 88, 76, 0.14)",
        borderColor: "#14584C",
        borderWidth: 2,
        pointBackgroundColor: "#14584C",
        pointBorderColor: "#fff",
        pointRadius: 3.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      r: {
        min: 0,
        max: 100,
        angleLines: { color: "rgba(20,23,26,.08)" },
        grid: { color: "rgba(20,23,26,.08)" },
        ticks: { display: false, stepSize: 25 },
        pointLabels: {
          color: "#14171A",
          font: { size: 11.5, family: "Manrope", weight: "600" },
        },
      },
    },
  };

  return (
    <Section
      id="skills"
      kicker="How I work"
      title="Competencies and toolkit"
      intro={competenciesIntro}
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1.05fr] md:items-center">
        <div className="h-[340px] rounded-2xl border border-line bg-surface p-5 shadow-card md:h-[400px]">
          <Radar data={data} options={options} />
        </div>

        <div className="space-y-6">
          {toolkit.map((g) => (
            <div key={g.group}>
              <div className="mb-2.5 text-[12.5px] font-extrabold tracking-wide text-accent">{g.group}</div>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-lg border border-line bg-surface px-2.5 py-1.5 text-[12.5px] font-medium shadow-card"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
