import { useState } from "react";
import CampaignSteps from "./builder/CampaignSteps";
import CampaignContent from "./builder/CampaignContent";
import CampaignAudience from "./builder/CampaignAudience";
import CampaignSchedule from "./builder/CampaignSchedule";
import CampaignReview from "./builder/CampaignReview";

export default function CampaignBuilder() {
    const [currentStep, setCurrentStep] = useState(1);

  const [campaignData, setCampaignData] = useState({
    campaignName: "",
    subject: "",
    sender: "",
    heading: "",
    message: "",
    buttonText: "",
    buttonLink: "",

    audience: "",

    scheduleType: "now",
    scheduleDate: "",
    scheduleTime: "",
  });

  const goNext = () => {
    setCurrentStep((previousStep) =>
      Math.min(previousStep + 1, 4)
    );
  };

  const goBack = () => {
    setCurrentStep((previousStep) =>
      Math.max(previousStep - 1, 1)
    );
  };

  const renderCurrentStep = () => {

    switch (currentStep) {

      case 1:
        return (
          <CampaignContent
            campaignData={campaignData}
            setCampaignData={setCampaignData}
            onNext={goNext}
          />
        );

      case 2:
        return (
          <CampaignAudience
            campaignData={campaignData}
            setCampaignData={setCampaignData}
            onNext={goNext}
            onBack={goBack}
          />
        );

      case 3:
        return (
          <CampaignSchedule
            campaignData={campaignData}
            setCampaignData={setCampaignData}
            onNext={goNext}
            onBack={goBack}
          />
        );

      case 4:
        return (
          <CampaignReview
            campaignData={campaignData}
            onBack={goBack}
          />
        );

      default:
        return null;
    }
  };
  return (
    <div className="campaign-builder">

      <div className="builder-page-header">

        <div>
          <h1>Create Campaign</h1>

          <p>
            Create and schedule a new email campaign.
          </p>
        </div>

        <button
          className="secondary-button"
          type="button"
        >
          Save as Draft
        </button>

      </div>

      <CampaignSteps
        currentStep={currentStep}
      />

      <div className="builder-container">

        {renderCurrentStep()}

      </div>

    </div>
  )
}
