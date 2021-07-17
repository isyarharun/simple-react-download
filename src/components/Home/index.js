import React, { useState } from "react";
import Api from "../../services/Api";
import config from "../../utils/config";
import "./home.css";

const initialReport = {
  totalInteger: 0,
  totalNumber: 0,
  totalAlphabet: 0,
  totalAlphanumeric: 0,
};
const Home = (props) => {
  const [downloadLink, setDownloadLink] = useState("");
  const [fileName, setFileName] = useState("");
  const [report, setReport] = useState(initialReport);
  const [loading, setLoading] = useState(false);

  const generateString = async (e) => {
    e.preventDefault();
    setLoading(true);
    let result = await Api.generateString();
    if (result.fileName) {
      setFileName(result.fileName);
      setDownloadLink(`${config.API_HOST}/api/download/${result.fileName}`);
      setReport(initialReport);
    }
    setLoading(false);
  };
  const generateReport = async (e) => {
    e.preventDefault();
    let report = await Api.generateReport(fileName);
    setReport(report);
  };
  return (
    <div className="home">
      <div>
        <button className="button" onClick={generateString}>
          <span>Generate</span>
        </button>
      </div>
      {loading && <div>Generating, Please Wait ...</div>}
      {fileName.length > 0 && !loading && (
        <div>
          <div>
            <a href={downloadLink} download>
              Download {fileName}
            </a>
          </div>
          <div className="report-wrapper">
            <div>
              <button className="button" onClick={generateReport}>
                <span>Report</span>
              </button>
            </div>
            <div className="result">
              <span>Alphabetical string: {report.totalAlphabet}</span>
              <span>Real numbers: {report.totalNumber}</span>
              <span>Integers: {report.totalInteger}</span>
              <span>Alphanumerics: {report.totalAlphanumeric}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
