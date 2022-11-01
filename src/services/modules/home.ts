import { request } from "..";

export function getHomeGoodPriceData() {
  return request.get({
    url: "/home/goodprice",
  });
}
