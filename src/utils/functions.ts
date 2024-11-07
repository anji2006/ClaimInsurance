import dayjs, { Dayjs } from "dayjs";
import { CustomObject } from "./types";
import { desiredDateFormate } from "../views/claimForm/constants";

function addObjToRes(obj: CustomObject, res: CustomObject) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && !Array.isArray(value) && !dayjs.isDayjs(value)) {

      if (res[key] === undefined) res[key] = {};

      addObjToRes(obj[key], res[key])
    } else {
      res[key] = value;
    }
  }
}

export function combineTwoObjects(obj1: CustomObject, obj2: CustomObject) {
  const res = { ...obj1 };
  
  addObjToRes(obj2, res);
  
  return res;
}


export function downloadObject(exportObj: any, fileName: string, format: string = 'txt') {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", fileName + "." + format);
  document.body.appendChild(downloadAnchorNode); // Required for Firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};

function convertDayJsToDesiredFormat(obj: Dayjs) {
  if (dayjs.isDayjs(obj)) {
    return dayjs(obj).format(desiredDateFormate)
  }
  return '';
}


export function formatData(claimData: CustomObject) {

  const unableDates = claimData?.patient?.dates_patient_unable_to_work_in_current_operation;
  const serviceDates = claimData?.physician_or_supplier?.hospitalization_dates_related_to_current_services;

  if (claimData?.patient?.date_of_birth) {
    claimData.patient.date_of_birth = convertDayJsToDesiredFormat(claimData.patient.date_of_birth)
  }


  if (claimData?.patient?.signature?.signed_date) {
    claimData.patient.signature.signed_date = convertDayJsToDesiredFormat(claimData.patient.signature.signed_date);
  }


  if (
    unableDates &&
    unableDates?.length &&
    unableDates[1]
  ) {
    claimData.patient.dates_patient_unable_to_work_in_current_operation = {};
    claimData.patient.dates_patient_unable_to_work_in_current_operation.from_date = convertDayJsToDesiredFormat(unableDates[0]);
    claimData.patient.dates_patient_unable_to_work_in_current_operation.to_date = convertDayJsToDesiredFormat(unableDates[1]);
  }


  if (
    serviceDates &&
    serviceDates?.length &&
    serviceDates[1]
  ) {
    claimData.physician_or_supplier.hospitalization_dates_related_to_current_services = {};
    claimData.physician_or_supplier.hospitalization_dates_related_to_current_services.from_date = convertDayJsToDesiredFormat(serviceDates[0]);
    claimData.physician_or_supplier.hospitalization_dates_related_to_current_services.to_date = convertDayJsToDesiredFormat(serviceDates[1]);
  }


  if (
    claimData?.supplemental_information_items &&
    claimData?.supplemental_information_items?.length &&
    claimData?.supplemental_information_items[0]
  ) {
    claimData.supplemental_information_items = claimData.supplemental_information_items.map((obj: any) => {
      if (obj?.service_dates && obj?.service_dates?.length && obj?.service_dates?.[1]) {
        const [from, to] = obj.service_dates;
        obj.service_dates = {};
        obj.service_dates.from_date = convertDayJsToDesiredFormat(from);
        obj.service_dates.to_date = convertDayJsToDesiredFormat(to);
      }

      return obj;
    })
  }


  return claimData;
};
