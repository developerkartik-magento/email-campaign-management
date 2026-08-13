import React from 'react'

export default function CampaignSteps({ currentStep }) {
    const steps = [
    {
      id: 1,
      label: "Content",
    },
    {
      id: 2,
      label: "Audience",
    },
    {
      id: 3,
      label: "Schedule",
    },
    {
      id: 4,
      label: "Review",
    },
  ];
  return (
    <div className="campaign-steps">

      {steps.map((step, index) => {

        const isActive = currentStep === step.id;
        const isCompleted = currentStep > step.id;

        return (
          <div
            key={step.id}
            className={`campaign-step ${
              isActive ? "active" : ""
            } ${
              isCompleted ? "completed" : ""
            }`}
          >

            <div className="step-number">
              {isCompleted ? "✓" : step.id}
            </div>

            <span>
              {step.label}
            </span>

            {index < steps.length - 1 && (
              <div className="step-line" />
            )}

          </div>
        );
      })}

    </div>
  )
}
