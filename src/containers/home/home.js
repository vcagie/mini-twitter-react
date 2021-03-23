import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./home.style";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import PhotoOutlinedIcon from "@material-ui/icons/PhotoOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import TweetSection from "../../components/home/tweetSection";
import { withRouter } from "react-router";
import {
  postTweet,
  putEditedTweet,
  deleteTweet,
  getTweetData
} from "../../services/homeService";
import RightBar from "../../components/home/rightBar";

function getUsername() {
  const usernameString = sessionStorage.getItem("username");
  const username = JSON.parse(usernameString);
  return username ;
}

const Home = () => {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const [username] = useState(getUsername);

  const handleSubmit = async e =>{
    e.preventDefault();
    if(newTweet !== ""){
      const res = await postTweet(newTweet, username);
      setNewTweet("");    
      setTweets([res.body, ...tweets]);
    }
  }

  const handleDeleteTweet = async(tweetId) => {
    await deleteTweet(tweetId);
    setTweets(tweets.filter((tweet) => tweet.tweetid !== tweetId));
  }

  const editTweet = async(tweetid, tweetContent)=>{
    await putEditedTweet(tweetid, tweetContent);
    setTweets(
      tweets.map((tweet) =>
        tweet.tweetid === tweetid ? { ...tweet, tweet: tweetContent } : tweet
      )
    );
  }

  useEffect(() => {
    async function fetchData() {
      const request = await getTweetData();
      setTweets(request.data);
      return request;
    }
    fetchData();
  }, []);

  return (
    <HomeWrapper>
      <div className="mainContent">
        <div className="homeTitle">
          <span>Home</span>
        </div>
        <div className="tweetContainer">
          <div className="photoContainer">
            <div className="photoFrame"></div>
          </div>
          <div className="inputContainer">
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={2}
              placeholder="What's happening?"
              onChange={(e) => setNewTweet(e.target.value)}
              value={newTweet}
            />

            <div className="buttonContainer">
              <div className="iconContainer">
                <PhotoOutlinedIcon className="iconImage" />
                <GifOutlinedIcon className="iconImage" />
                <EqualizerOutlinedIcon className="iconImage" />
                <SentimentSatisfiedOutlinedIcon className="iconImage" />
                <ScheduleOutlinedIcon className="iconImage" />
              </div>
              <div className="tweetButton" onClick={handleSubmit} >
                <span>Tweet</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contentBorder"></div>

        {tweets.map((tweet, i) => {
          return (
            <TweetSection
              tweetData={tweet}
              loginUsername={username}
              deleteTweet={handleDeleteTweet}
              editTweet={editTweet}
              key={i}
            />
          );
        })}
      </div>
      <div className="rightBar">
        <RightBar />
      </div>
    </HomeWrapper>
  );
};

export default withRouter(Home);
