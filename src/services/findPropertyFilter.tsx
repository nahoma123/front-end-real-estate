import { callApi } from "./apiService";

export async function sendFilterRequest(filterString: string): Promise<any> {
  const apiUrl = `/properties?filter=${encodeURIComponent(filterString)}`;
  const response = await callApi<void>(apiUrl, "GET");
  return response
}

export interface PropertyFilterData {
  address: string;
  minAmount?: number;
  maxAmount?: number;
  minBeds?: number;
  maxBeds?: number;
  propertyTypes: string[];
  mustHaves: string[];
  furnished: string;
  studentProperties: boolean;
}

export const handleFormSubmit = async (data: PropertyFilterData) => {
  // Create the filter array based on the form data
  const filterArray = [];

  // Add address filter
  if (data.address) {
    filterArray.push({
      field: "address",
      value: data.address,
      operator: "contains",
    });
  }

  // Add other filters as needed
  // Example: Add mustHaves filter
  if (data.mustHaves.length > 0) {
    data.mustHaves.forEach((value) => {
      filterArray.push({
        field: "features",
        value: value,
        operator: "contains",
      });
    });
  }
  // Example: Add minAmount filter
  if (data.minAmount) {
    filterArray.push({
      field: "amount",
      value: data.minAmount,
      operator: "gte",
    });
  }

  // Example: Add maxAmount filter
  if (data.maxAmount) {
    filterArray.push({
      field: "amount",
      value: data.maxAmount,
      operator: "lte",
    });
  }

  // ...

  
  // Convert the filter array to JSON string
  const filterString = JSON.stringify(filterArray);
  console.log(filterString)

  try {
    // Send the filter request to the backend
    return await sendFilterRequest(filterString);
  } catch (error) {
    // Handle errors
    console.error("Req error", error);
  }
};
