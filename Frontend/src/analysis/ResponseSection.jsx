import AnalyzeComplexity from "./AnalyzeComplexity";
import CodeQualityResponse from "./CodeQualityAnalysis";
import DebugResponse from "./DebugResponse";
import ExplainResponse from "./ExplainResponse";
import ReviewResponse from "./ReviewResponse";
import TestCaseGeneration from "./TestCaseGeneration";

const ResponseSection = ({ action, response , language}) => {

  if (!response) return null;

  switch (action) {

    case "review":
      return (
       <>
       <ReviewResponse response={response}/>
       </>
      );

    case "explain":
      return (
       <>
       <ExplainResponse response={response}/>
       </>
      );

    case "debug":
      return (
        <>
        <DebugResponse response={response} language={language}/>
        </>
      );

    case "complexity":
      return (
        <>
        <AnalyzeComplexity response={response}/>
        </>
      );

    case "quality":
      return (
       <>
       <CodeQualityResponse response={response}/>
       </>
      );

    case "testcases":
      return (
        <>
        <TestCaseGeneration response={response}/>
        </>
      );

    default:
      return null;
  }

};

export default ResponseSection;