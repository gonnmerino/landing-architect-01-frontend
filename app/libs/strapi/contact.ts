import { ContactData } from "@/app/types/contact";
import { StrapiFetch } from "./fetcher";

export async function getContact(): Promise<ContactData> {
const result = await StrapiFetch<{data: ContactData[]}>(
    "/api/data-contacts"
  )
  return result.data[0];
}