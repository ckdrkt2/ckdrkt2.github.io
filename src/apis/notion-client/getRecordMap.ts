import { NotionAPI } from "notion-client"

export const getRecordMap = async (pageId: string) => {
  const api = new NotionAPI()
  const recordMap = await api.getPage(pageId)
  console.log(123123123)
  console.log(JSON.stringify(recordMap, null, 2));
  return recordMap
}
