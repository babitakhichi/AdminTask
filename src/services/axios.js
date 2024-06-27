import axios from "axios";
import config from "../config";





const APIrequest = async ({
  method,
  url,
  baseURL,
  queryParams,
  bodyData,
  cancelFunction,
  formHeaders,
  removeHeaders,
}) => {


  try {
    const axiosConfig = {
      method: method || "GET",
      baseURL: config.API_BASE_URL,
      headers: {
        "content-type": "application/json",
        "X-Frame-Options": "sameorigin",
       
      },
    };

    if (formHeaders) {
      axiosConfig.headers = { ...axiosConfig.headers, ...formHeaders };
    }

    if (baseURL) {
      axiosConfig.baseURL = baseURL;
    }

    if (url) {
      axiosConfig.url = url;
    }

    if (queryParams) {
      const queryParamsPayload = {};
      for (const key in queryParams) {
        if (Object.hasOwnProperty.call(queryParams, key)) {
          let element = queryParams[key];
          if (typeof element === "string") {
            element = element.trim();
          }
          if (!["", null, undefined, NaN].includes(element)) {
            queryParamsPayload[key] = element;
          }
        }
      }
      axiosConfig.params = queryParamsPayload;
    }

    if (bodyData) {
      const bodyPayload = {};
      for (const key in bodyData) {
        if (Object.hasOwnProperty.call(bodyData, key)) {
          let element = bodyData[key];
          if (typeof element === "string") {
            element = element.trim();
          }
          if (![null, undefined, NaN].includes(element)) {
            bodyPayload[key] = element;
          }
        }
      }
      axiosConfig.data = bodyPayload;
    }

    if (cancelFunction) {
      axiosConfig.cancelToken = new axios.CancelToken((cancel) => {
        cancelFunction(cancel);
      });
    }

    if (removeHeaders) {
      delete axiosConfig.headers;
    }


    const res = await axios(axiosConfig);
    return res.data;
  } catch (error) {
  
    if (axios.isCancel(error)) {
      console.log("API canceled", error);
      throw new Error(error);
    } else {
      const errorRes = error.response;
      console.log("Error in the api request", errorRes);
      
      return null;
    }
  }
};

export default APIrequest;
