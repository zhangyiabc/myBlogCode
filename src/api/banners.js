import request from "./request"
export async function getBannerData(){
  return await request.get("/api/banner");

}