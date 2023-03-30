import StepperControl from 'components/StepperControl';
import DragAndCropAOI from 'pages/wizard/DragAndCropAOI';
import FormData from 'pages/wizard/FormData';
import Review from 'pages/wizard/Review';
import SelectBasemap from 'pages/wizard/SelectBasemap';
import { useState, useRef, useEffect } from 'react';
import './App.css';
import { Stepper } from 'react-form-stepper';
import { Alert } from 'react-alert'


function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["1", "2", "3", "4"]

  //// VARIABLE NEEDED 1ST STEP
  const [validateForm, setValidateForm] = useState(false)
  const [period, setPeriodValue] = useState({ startDate: null, endDate: null });
  const handlePeriodChange = (newPeriod) => {
    setPeriodValue(newPeriod);
  }

  const areaNameHolder = useRef(null);

  const [country, setCountry] = useState({ framework: "" });
  const handleCountryChange = (countryEvent) => {
    setCountry({ framework: countryEvent.target.value });
  };

  //// VARIABLE NEEDED 2ND STEP
  const [typeMap, setTypeMap] = useState("osm")
  const typeMapHandling = (mapChosen) => {
    setTypeMap(mapChosen.target.value)
  }

  //// VARIABLE NEEDED 3ST STEP

  const [loading, setLoading] = useState(false);

  const mapRefHolder = useRef(null);
  const [screenshotUrl, setScreenshotUrl] = useState("");
  const handleScreenshotUrl = (urlEvent) => {
    setScreenshotUrl(urlEvent.target.value);
  };

  /// STEP SCREEN COMPONENTs 

  function DisplayStep({ step }) {
    switch (step) {
      case 1:
        return <div>
          <FormData
            key="area-form"
            periodData={period}
            areaHolder={areaNameHolder}
            countryData={country}
            onPeriodChange={handlePeriodChange}
            onCountryChange={handleCountryChange}
          />
          {validateForm && !isFormValid() ?
            <p className=" text-red-500 font-bold mb-5 text-center">
              Please fill all the field first
            </p> : <div />}
        </div>
      case 2:
        return <SelectBasemap onChoose={typeMapHandling} mapId={typeMap} />
      case 3:
        return <DragAndCropAOI type={typeMap}
          mapRef={mapRefHolder} />
      case 4:
        return <Review
          screenshotHolder={screenshotUrl}
          areaHolder={areaNameHolder}
          countryHolder={country}
          periodHolder={period} />
      default:
        return <FormData />
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    if (direction === "previous") {
      setCountry({ framework: "" });
      setPeriodValue({ startDate: null, endDate: null });
    }

    else if (!isFormValid()) setValidateForm(true);

    if (newStep > 0 && newStep <= steps.length && isFormValid()) {
      setCurrentStep(newStep);
    }
  }

  useEffect(() => {
    setValidateForm(false);
  }, [areaNameHolder, period, country]);

  function isFormValid() {
    return country !== "" && areaNameHolder.current !== null && period.startDate !== null && period.endDate !== null;
  }

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5 text-center">
        Welcome to Wizard tools and GIS Services!
      </p>
      <p className="text-gray-500 text-lg text-center">
        Created by Aulia Rosyida
      </p>
      <p className="text-3xl text-gray-700 text-center pt-12">
        Create Proposal Document
      </p>

      <div className="pt-12">
        <Stepper
          styleConfig={{
            activeBgColor: '#2b7cff',
            activeTextColor: '#fff',
            inactiveBgColor: '#fff',
            inactiveTextColor: '#fff',
            completedBgColor: '#2b7cff',
            completedTextColor: '#fff',
            size: '2em'
          }}
          steps={[
            { label: 'Input Data' },
            { label: 'Select Basemap' },
            { label: 'Drag and Crop Area of Interest' },
            { label: 'Review' },
          ]}
          activeStep={currentStep - 1}
        />
      </div>
      <DisplayStep step={currentStep} />
      {loading ?
        <p>Generating screenshot... Please wait for some minutes</p>
        : <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />}
    </div>

  );

}

export default App;
