import axios from "../api/axios";
import { tweetRequests } from "../api/request";

async function postTweet(tweet, username) {
  return axios
    .post(tweetRequests, {
      username: username,
      tweet: tweet,
    })
    .then((data) => data.data);
}

async function deleteTweet(tweetid) {
  return axios.delete(tweetRequests + `/${tweetid}`);
}

async function putEditedTweet(tweetid, tweetContent) {
  return axios.put(tweetRequests + `/${tweetid}`, {
    tweet: tweetContent,
  });
}

async function getTweetData() {
    return axios.get(tweetRequests);
}
export { postTweet, deleteTweet, putEditedTweet, getTweetData };